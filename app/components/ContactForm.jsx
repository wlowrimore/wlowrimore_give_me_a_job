import React from "react";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const ContactForm = ({
  submitEmail,
  setFirstName,
  setLastName,
  setEmail,
  setSubject,
  setMessage,
}) => {
  return (
    <form
      className="flex flex-col items-center max-w-full mx-auto justify-center p-6 mb-[4%] md:mx-[4em] lg:mx-[8em] xl:mx-[12em]"
      id="form"
      onSubmit={submitEmail}
    >
      <input type="hidden" value="nothing" />
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <div className="flex flex-col w-full">
          <input
            className="bg-transparent border-b border-white placeholder-white text-white font-thin tracking-wide focus:bg-transparent focus:border-white outline-none w-full px-2"
            type="text"
            name="first_name"
            required
            onChange={(e) => setFirstName(e.target.value)}
            autoComplete="off"
          />
          <label htmlFor="first-name" className="text-white px-2">
            first name
          </label>
        </div>
        <div className="flex flex-col w-full">
          <input
            className="bg-transparent border-b border-white placeholder-white text-white font-thin tracking-wide focus:bg-transparent focus:border-white outline-none w-full px-2"
            type="text"
            name="last_name"
            required
            onChange={(e) => setLastName(e.target.value)}
            autoComplete="off"
          />
          <label htmlFor="last-name" className="text-white px-2">
            last name
          </label>
        </div>
      </div>
      <div className="flex flex-col w-full py-4">
        <input
          className="bg-transparent border-b border-white placeholder-white text-white font-thin tracking-wide focus:bg-transparent focus:border-white outline-none px-2"
          type="email"
          name="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
        />
        <label htmlFor="email" className="text-white px-2">
          email
        </label>
      </div>
      <div className="flex flex-col w-full pb-2">
        <input
          className="bg-transparent border-b border-white placeholder-white placeholder:font-thin text-white tracking-wide focus:bg-transparent outline-none px-2"
          type="text"
          name="subject"
          onChange={(e) => setSubject(e.target.value)}
          required
          autoComplete="off"
          id="subject"
        />
        <label htmlFor="subject" className="text-white px-2">
          subject
        </label>
      </div>

      <div className="flex flex-col w-full py-2">
        <label htmlFor="message"></label>
        <textarea
          className="bg-black bg-opacity-10 border-b border-white rounded-sm px-2 py-1 placeholder-white placeholder:text-center placeholder:fixed placeholder:bottom-0 text-white font-thin tracking-wide outline-none"
          name="message"
          required
          onChange={(e) => setMessage(e.target.value)}
          autoComplete="off"
          id="message"
          cols="30"
          rows="8"
          placeholder="message"
        ></textarea>
      </div>
      <button
        className={`${cinzel.className} transform bg-blue-200 text-black text-xl font-bold px-5 w-full mt-4 rounded-sm shadow-sm shadow-black hover:bg-blue-100 hover:text-black tracking-wide transition duration-500 hover:scale-95`}
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
