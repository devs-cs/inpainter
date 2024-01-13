const API_HOST = process.env.REPLICATE_API_HOST || "https://api.replicate.com";
const addBackgroundToPNG = require("lib/add-background-to-png");

export default async function handler(req, res) {
  // remnove null and undefined values
  req.body = Object.entries(req.body).reduce(
    (a, [k, v]) => (v == null ? a : ((a[k] = v), a)),
    {}
  );

  if (req.body.mask) {
    req.body.mask = addBackgroundToPNG(req.body.mask);
  }


  let vers;
  console.log("HERE IS BODY" + req.body)
  if (req.body.selected === 2)
    vers  = "435061a1b5a4c1e26740464bf786efdfa9cb3a3ac488595a2de23e143fdb0117" 
  else if (req.body.selected ==1)
    vers= "be04660a5b93ef2aff61e3668dedb4cbeb14941e62a3fd5998364a32d613e35e"
  else
   vers = "30c1d0b916a6f8efce20493f5d61ee27491ab2a60437c13c588468b9810ec23f"
  
  const body = JSON.stringify({
    // Pinned to a specific version of Stable Diffusion, fetched from:
    // https://replicate.com/stability-ai/stable-diffusion
    version: vers,
    input: req.body,
  });

  console.log(body)

  const response = await fetch(`${API_HOST}/v1/predictions`, {
    method: "POST",
    headers: {
      Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body,
  });

  console.log(response)

  if (response.status !== 201) {
    let error = await response.json();
    res.statusCode = 500;
    res.end(JSON.stringify({ detail: error.detail }));
    return;
  }

  const prediction = await response.json();
  res.statusCode = 201;
  res.end(JSON.stringify(prediction));
}
