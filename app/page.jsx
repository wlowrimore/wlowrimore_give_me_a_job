import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";

import { Cinzel } from "next/font/google";
import "app/home.css";

const renderLoader = () => <p>Loading...</p>;

const cinzel = Cinzel({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <>
      <div className="flex flex-col max-w-[18em] lg:max-w-[40em] mt-[12em] lg:mt-[8em] mx-auto items-center">
        <h1 className="flex flex-col text-purple-200 text-[1.5rem] text-center lg:text-[3rem] px-4 intro">
          <div className={cinzel.className}>
            <span>William</span>
            <span>Lowrimore</span>
          </div>
          <span>
            <hr />
          </span>
          <div className="tracking-wide xl:mt-[-0.3em] font-thin text-blue-200">
            <span className="text-xl lg:text-3xl">Software</span>
            <span className="text-xl lg:text-3xl">Engineer</span>
          </div>
        </h1>
      </div>
      <div className="flex justify-center">
        <Suspense fallback={renderLoader()}>
          <Image
            priority
            src="/selfie.png"
            alt="Picture of the author"
            width={500}
            height={500}
            className="selfie-image"
          />
        </Suspense>
      </div>
      <div className="text-centerborder border-gray-900 mx-auto mt-2 mb-4">
        <Link href="/about" className="text-center text-xl xl:text-xl">
          <h2
            className={`${cinzel.className} text-blue-200 text-lg tracking-wider md:bg-gray-300 md:text-black md:text-xl md:font-bold px-2 md:px-5 w-full mt-4 md:rounded-sm md:shadow-sm shadow-black hover:bg-blue-300 hover:text-black md:tracking-wide`}
          >
            ENTER
          </h2>
        </Link>
      </div>
    </>
  );
}
