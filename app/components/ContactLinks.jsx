import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookMessenger,
} from "react-icons/fa";
import Link from "next/link";

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

const ContactLinks = () => {
  return (
    <main className="flex flex-row justify-center gap-6 mb-8 text-purple-300 lg:text-black">
      <Link
        href="https://www.github.com/wlowrimore"
        target="_blank"
        rel="noreferrer noopener"
        className="p-2"
      >
        <FaGithub
          className="transform text-black-300 text-4xl transition duration-500 hover:scale-125 hover:text-purple-400"
          name="github"
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/william-lowrimore-21778310"
        target="_blank"
        rel="noreferrer noopener"
        className="p-2"
      >
        <FaLinkedinIn
          className="transform text-black-300 text-4xl transition duration-500 hover:scale-125 hover:text-purple-400"
          name="linkedin"
        />
      </Link>
      <Link
        href="https://twitter.com/wlowrimore"
        target="_blank"
        rel="noreferrer noopener"
        className="p-2"
      >
        <FaTwitter
          className="transform text-black-300 text-4xl transition duration-500 hover:scale-125 hover:text-purple-400"
          name="twitter"
        />
      </Link>
      <Link
        href="https://m.me/wlowrimore"
        target="_blank"
        rel="noreferrer noopener"
        className="p-2"
      >
        <FaFacebookMessenger
          className="transform text-black-300 text-4xl transition duration-500 hover:scale-125 hover:text-purple-400"
          name="facebook-messenger"
        />
      </Link>
    </main>
  );
};

export default ContactLinks;
