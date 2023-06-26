import Link from "next/link";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "William Lowrimore Skills",
  description:
    "William Lowrimore is a Software Developer from Nashville, TN. He has experience with JavaScript, React, Node, Next, Express, and much more.",
  keywords: [
    "web",
    "developer",
    "software",
    "engineer",
    "javascript",
    "react",
    "node",
    "next",
    "express",
    "portfolio",
    "nashville",
    "tennessee",
    "tn",
    "william",
    "lowrimore",
    "skills",
    "resume",
  ],
};

const ResumePage = () => {
  return (
    <main className="flex flex-col justify-center items-center md:m-auto xl:my-[12em] 2xl:my-[20em]">
      <h5 className="text-purple-200 xl:text-2xl mx-[2em] mt-[12em] mb-6 md:my-[2em] md:mx-[10em] lg:mx-[10em] xl:mx-[10em] 2xl:mx-[20em]">
        Please review my resume for consideration on projects and open
        positions. You can find a printable version by following the link below.
      </h5>
      <Link
        href="/printableResume/6-26-23_Resume.pdf"
        target="_blank"
        rel="noreferrer noopener"
        className={`${cinzel.className} transform text-md lg:text-xl text-gray-700 font-bold rounded px-4 bg-red-300 hover:bg-red-200 transition duration-500 hover:scale-95`}
      >
        View | Print
      </Link>
    </main>
  );
};

export default ResumePage;
