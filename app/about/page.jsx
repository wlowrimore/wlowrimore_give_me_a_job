import React from "react";
import Link from "next/link";
import { Cinzel } from "next/font/google";

import "app/about/about.css";

const cinzel = Cinzel({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const AboutPage = () => {
  return (
    <article className="text-center my-6 md:mt-0">
      <div>
        <h1 className="flex pt-3 px-6 md:mx-52 justify-start items-center text-[1.5rem] text-blue-300 text-start md:mt-20 md:mb-6">
          Nice To Meet You...
        </h1>
      </div>
      <div className="text-gray-300 text-start p-6 md:mx-52 md:text-xl">
        <p>
          My name is William Lowrimore. I am a Software Engineer with training
          in Full Stack Web Development. I am also a lifelong musician with a
          passion for creating, and bringing ideas to life.
        </p>
        <br />
        <p>
          As a Software Engineer, I often find myself obsessing over code
          quality. My aim is to have clean, readable, efficient code, and a
          neat, well organized file structure. I am a very organized individual
          who works well with time constraints. I believe that clear
          communication between team members, as well as with stakeholders is a
          neccessity.
        </p>
        <br />
        <p>
          My first Software Engineering role was with Coroutine, a Software Firm
          out of Boulder, Colorado. There, I held a Junior Software Engineer
          position working mainly with Ruby on Rails, Stimulus, Turbo, and
          ReactJS.
        </p>
        <br />
        <p>
          Currently I am studying more in depth ReactJS concepts, in conjunction
          with the latest version of NextJS (v13.4).
        </p>
      </div>
      <div className="links-in mb-8 flex flex-col justify-normal lg:flex-row lg:mx-[12.5em]">
        <Link
          href="/resume"
          className={`${cinzel.className} transform mb-4 py-1 mx-6 md:mx-[14.5em] lg:mx-8 lg:px-10 lg:mt-8 rounded bg-purple-200 font-bold hover:bg-purple-100 transition duration-500 hover:scale-95`}
        >
          Jump to Resume
        </Link>

        <Link
          href="/contact"
          className={`${cinzel.className} transform mb-4 py-1 mx-6 md:mx-[14.5em] lg:mx-8 lg:px-10 lg:mt-8 rounded bg-blue-300 font-bold hover:bg-blue-200 transition duration-500 hover:scale-95`}
        >
          Jump to Contact
        </Link>
      </div>
    </article>
  );
};

export default AboutPage;
