"use client";
import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import ReactCardFlip from "react-card-flip";
import Link from "next/link";

import "app/my-work/my-work.css";

const renderLoader = () => <p>Loading Images...</p>;

const Card = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <main className="my-20">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div
          id="card-fade-in"
          className="card-style"
          onClick={() => setIsFlipped((prev) => !prev)}
        >
          {/* front of card */}
          <div className="text-white relative">
            <Suspense fallback={renderLoader()}>
              <Image
                src={project.image}
                width={500}
                height={500}
                alt={project.title}
                className="mb-2 hover:opacity-50 w-[100%] h-[100%]"
              />
            </Suspense>
          </div>
        </div>
        {/* back of card */}
        <div
          onClick={() => setIsFlipped((prev) => !prev)}
          className="card-style text-white bg-gray-600"
        >
          <h1 className="text-blue-300 text-sm md:text-2xl text-center my-3 md:my-5">
            {project.title}
          </h1>
          <div className="flex flex-col justify-center gap-4 text-md text-center">
            <p className="text-start text-sm leading-relaxed mx-6 mb-2 text-white">
              {project.description}
            </p>
            <Link
              href={project.repo_url}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:bg-blue-300 hover:text-gray-900 font-semibold rounded-md shadow-md shadow-gray-900 px-3 mx-auto mb-6 bg-transparent text-purple-300"
            >
              View Code
            </Link>
          </div>
        </div>
      </ReactCardFlip>
    </main>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/projects");
      const json = await res.json();
      setProjects(json);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center text-center mt-10 mb-6 md:mt-20">
        <h1 className="text-blue-300 text-3xl mb-2">Some of My Work</h1>
        <span className="text-white tracking-wider">
          click each image for details
        </span>
      </div>
      <div className="flex flex-col items-center xl:mx-[6em]">
        {projects.map((project, index) => (
          <Card project={project} key={`card-${index}`} priority={`${index}`} />
        ))}
        <div class="mb-10">
          <Link
            href="https://www.github.com/wlowrimore"
            target="_blank"
            rel="noreferrer noopener"
            className="font-semibold text-xl px-3 mx-auto mb-6 text-blue-300 hover:text-purple-300"
          >
            See More Work
          </Link>
        </div>
      </div>
    </>
  );
};

export default Projects;

// xl:grid xl:grid-cols-2
