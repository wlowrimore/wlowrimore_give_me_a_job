import MainNav from "./components/MainNav";
import "./globals.css";
import { Poppins, Cinzel } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "William Lowrimore | Software Engineer",
  description:
    "William Lowrimore is a Software Engineer located in Nashville, TN. He is a graduate of Vanderbilt University Coding Bootcamp.",
  keywords: [
    "Lowrimore",
    "Software",
    "Developer",
    "Website",
    "Engineer",
    "Programming",
    "ReactJS",
    "NextJS",
    "Web Design",
    "Portfolio",
    "Contact",
    "For Hire",
    "Freelance",
    "Nashville",
    "Tennessee",
    "TN",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} h-screen w-screen flex flex-col`}>
        <MainNav />
        {children}
      </body>
    </html>
  );
}
