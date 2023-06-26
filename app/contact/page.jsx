"use client";

import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import ContactForm from "app/components/ContactForm.jsx";

import "app/contact/contact.css";
import ContactLinks from "../components/ContactLinks";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const submitEmail = (e) => {
    e.preventDefault();

    setFirstName(firstName);
    setLastName(lastName);
    setEmail(email);
    setSubject(subject);
    setMessage(message);
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_k4ijfrq",
        "template_6cu7t3j",
        "#form",
        "6mMLJJUzkP7lq3rbP"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      )
      .then(() => {
        setIsLoading(false);
        form.reset();
      });
  };

  const showStatusMessage = () => {
    if (success) {
      return (
        <h3
          id="success-toast"
          className="absolute top-[10em] left-2 md:left-[33%] right-2 md:right-[33%] z-1 bg-green-200 text-center rounded-lg px-2 shadow-md shadow-gray-700 max-w-full md:max-w-[50em]"
        >
          Hi, {firstName}! Thank you for your message regarding
          <span style={{ color: "purple" }}> "{subject}" </span>. I will be in
          touch with you at <span style={{ color: "purple" }}> {email} </span>
          as soon as possible.
        </h3>
      );
    } else if (!success && error) {
      return (
        <h3
          id="error-toast"
          className="absolute top-[10em] left-2 md:left-[33%] right-2 md:right-[33%] z-99 bg-red-300 bg-opacity-95 md:bg-opacity-60 text-center rounded-lg px-2 shadow-md shadow-gray-700 max-w-full md:max-w-[50em]"
        >
          Oops! Something went wrong. Please refresh your browser and try again.
        </h3>
      );
    }
  };

  return (
    <div>
      <h1 className="text-blue-300 text-3xl w-full text-center mt-4 mb-2 md:mb-5 xl:mt-20">
        Contact Form
      </h1>
      {isLoading && (
        <h5 className="text-xl text-center text-blue-100">Sending...</h5>
      )}

      {success || error ? showStatusMessage() : null}
      <main className="my-[2%] mx-auto max-w-[80em] py-[4%] bg-purple-400 bg-opacity-5 rounded-lg relative">
        <ContactForm
          setIsLoading={setIsLoading}
          setFirstName={setFirstName}
          setLastName={setLastName}
          setEmail={setEmail}
          setSubject={setSubject}
          setMessage={setMessage}
          submitEmail={submitEmail}
        />
      </main>
      <ContactLinks />
    </div>
  );
};

export default Contact;
