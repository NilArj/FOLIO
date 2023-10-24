"use client";
import React from "react";
import Image from "next/image";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { SiTableau } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-[#F0F0F0] mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-[#FFCE63]">
              Hello, I'm{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Nilvia",
                1000,
                " a Data Analyst",
                1000,
                " a BI Analyst",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#F0F0F0] text-base sm:text-lg mb-6 lg:text-xl">
            Data-driven explorer with a flair for transforming numbers into
            actionable narratives. {"Let's"} embark on a data adventure!
          </p>
          <div className="flex justify-center sm:justify-start gap-4 text-3xl lg:text-4xl">
            <a href="https://www.linkedin.com/in/nilarj/">
              {" "}
              <AiFillLinkedin className="hover:bg-[#FFCE63] hover:rounded-full hover:p-2" />{" "}
            </a>
            <a href="https://github.com/NilArj">
              <AiFillGithub className="hover:bg-[#FFCE63] hover:rounded-full hover:p-2" />
            </a>
            <a href="https://public.tableau.com/app/profile/nilvia.arjona/vizzes">
              <SiTableau className="hover:bg-[#FFCE63] hover:rounded-full hover:p-2" />
            </a>
            <a href="https://twitter.com/NilArj_">
              <AiFillTwitterCircle className="hover:bg-[#FFCE63] hover:rounded-full hover:p-2" />
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/image_1.jpg"
              alt="hero image"
              width={300}
              height={300}
              objectFit="cover"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
