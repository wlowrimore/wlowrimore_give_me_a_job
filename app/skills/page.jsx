"use client";

import { useState, useEffect, Suspense } from "react";
import Skills from "../components/Skills";

import "../skills/skills.css";

const SkillsPage = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const response = await fetch("/api/skills");
      const data = await response.json();
      setSkills(data);
    };
    fetchSkills();
  }, []);

  return (
    <div>
      <h1 className="text-blue-300 text-3xl text-center my-10 md:my-20">
        Some of My Skills
      </h1>
      <div className="img-container">
        <Skills skills={skills} />;
      </div>
      <section className="text-purple-200 tracking-wide leading-relaxed max-w-[80%] xl:max-w-[67%] mx-auto my-8">
        <p>
          As mentioned in the title of this page, these are only some of my
          skills. I felt as though the skills shown here would be a basic
          representation of my skillset. I am always learning new things and
          trying to sharpen my tools. I am currently working on a few projects
          that I will be adding to my portfolio very soon.
        </p>
      </section>
    </div>
  );
};

export default SkillsPage;
