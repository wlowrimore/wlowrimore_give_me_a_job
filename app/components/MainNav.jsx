"use client";

import { useState, lazy } from "react";
import Link from "next/link";
import Image from "next/image";

import { FiMenu } from "react-icons/fi";

const MainNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex justify-between px-8 py-4 lg:mt-2">
      <Link href="/">
        <Image
          priority
          src="/mainLogo.png"
          width={100}
          height={100}
          alt="Logo"
          className="w-[50%] lg:w-[75%]"
        />
      </Link>
      <div className="">
        <FiMenu
          className=" bg-gray-900 bg-opacity-70 lg:hidden fixed right-[2em] top-[1em] z-99 h-8 w-8 cursor-pointer text-purple-200"
          onClick={() => setOpen(!open)}
        />
      </div>

      <nav
        onClick={() => setOpen(false)}
        className={`${
          open
            ? "flex justify-center py-24 opacity-80 fixed inset-0 z-10 bg-black"
            : "hidden"
        } w-full lg:flex lg:items-center lg:w-auto`}
      >
        <span
          className="lg:hidden text-white text-md bg-purple-900 border border-black rounded-full px-2 absolute top-5 right-8"
          onClick={() => setOpen(false)}
        >
          close
        </span>
        <ul className="lg:flex text-white">
          <li
            className="my-8 lg:my-0 mx-4 p-1 tracking-wider hover:text-purple-300 hover:underline"
            onClick={() => setOpen(false)}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className="my-8 lg:my-0 mx-4 p-1 tracking-wider hover:text-purple-300 hover:underline"
            onClick={() => setOpen(false)}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className="my-8 lg:my-0 mx-4 p-1 tracking-wider hover:text-purple-300 hover:underline"
            onClick={() => setOpen(false)}
          >
            <Link href="/my-work">My Work</Link>
          </li>
          <li
            className="my-8 lg:my-0 mx-4 p-1 tracking-wider hover:text-purple-300 hover:underline"
            onClick={() => setOpen(false)}
          >
            <Link href="/skills">Skills</Link>
          </li>
          <li
            className="my-8 lg:my-0 mx-4 p-1 tracking-wider hover:text-purple-300 hover:underline"
            onClick={() => setOpen(false)}
          >
            <Link href="/resume">Resume</Link>
          </li>
          <li
            className="my-8 lg:my-0 mx-4 p-1 tracking-wider hover:text-purple-300 hover:underline"
            onClick={() => setOpen(false)}
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
