import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <div className="max-w-[512px] mx-auto p-10 bg-white rounded-lg">
      <Head>
        <title>ShopVisual</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="text-left mb-5">
        <h1 className="text-5xl font-bold">Design Your World</h1>
        <h2 className="text-5xl font-bold text-orange-500">Shop Visual</h2>
      </div>
      
      <Link href="/paint">
        <video autoPlay loop muted playsInline className="w-full cursor-pointer">
          <source src="/demo.mp4" />
        </video>
      </Link>

      <p className="mt-5 pb-5 text-lg">
        When there are <em>billions</em> of purchasable items, natural language queries are simply not enough to narrow the choices down.
      </p>

      <div className="flex justify-center items-center h-[desired-height]">
  <p className="text-orange-500 text-xl font-extrabold  decoration-2 underline-offset-2 text-center pb-5">
    <strong>We are redefining shopping through accessible image interfaces.</strong>
  </p>
</div>


      <p className  = "pb-5 text-lg">
      In the spirit of an image is worth 1000 words, we are making it easy to search for and find what would otherwise be complicated queries and allowing you to see those items, rather than simply describe them.
      </p>

      <p className="pb-5 text-lg">
        Change items in your environment with our generative tools or design items from scratch and purchase the results.
      </p>

      <p className="pb-5 text-lg">
        This is the <strong> Next-Generation </strong> of shopping, helping you buy exactly what you need rather than scrolling endlessly.
      </p>

      

      <ol className="list-decimal pl-5">
        <li className="mb-2">
          Enter a text prompt to generate an image, upload your own starting
          image, or sketch an outline to start.
        </li>
        <li className="mb-2">
          Make thematic changes or generative edits through natural language and inpainting.  
        </li>
        <li className="mb-2">
          Find similar items online and for sale at the click of a button.
        </li>
      </ol>

      <Link href="/paint">
        <a className="py-3 block text-center bg-black text-white rounded-md mt-10">
          Start Designing
        </a>
      </Link>
    </div>
  );
}
