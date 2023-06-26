import Image from "next/image";

import "../skills/skills.css";

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
  ],
};

const Skills = ({ skills }) => {
  const duration = 2500;
  const animItem = (index) => `fade-in ${duration}ms ease-in`;

  return (
    <div className="grid grid-cols-2 lg:grid lg:grid-cols-10 md:mx-[10%] xl:mx-[17%] ">
      {skills.map((skill, index) => (
        <div
          key={skill.id}
          style={{ animation: animItem(index) }}
          className="text-gray-300 text-center p-2 lg:p-6 flex flex-col items-center"
        >
          <div className="skills-img text-white text-lg md:text-2xl">
            <Image
              priority
              src={skill.image}
              width={1000}
              height={1000}
              className="w-[95%] my-2"
              alt={skill.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
