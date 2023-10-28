"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen"
      style={{
        background: `url("public/images/desk2.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#0A133D] opacity-90"></div>
      <div className="z-30 mx-auto px-12">
        <div className="flex-col flex-wrap justify-center place-self-center text-center">
          <h1 className="text-[#F0F0F0] mb-6 text-4xl font-extrabold sm:text-5xl md:text-6xl">
            <span className="text-transparent bg-clip-text bg-[#FFCE63]">
              Hello, {"I'm"}
            </span>
            <br />
            <TypeAnimation
              sequence={["Nilvia", 1000, " a Data Analyst", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#F0F0F0] mb-6 italic font-serif text-base sm:text-xl md:text-2xl">
            Turning data into stories: A passionate data explorer
          </p>
          <button
            onClick={scrollToContact}
            className="text-[#F0F0F0] px-5 py-3 w-full font-semibold border border-[#FFCE63] bg-[#0A133D] hover:bg-gradient-to-br hover:to-[#FFCE63] hover:from-[#0A133D] sm:w-fit md:text-lg "
          >
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
