import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { SiTableau, SiGoogleforms } from "react-icons/si";

const Contact = () => {
  return (
    <section id="contact">
      <div className="flex flex-col flex-wrap py-8 px-4 gap-4 xl:gap-16 sm:py-16 xl:px-16">
        <h1 className="font-extrabold text-center text-[#FFCE63] text-3xl sm:text-5xl lg:text-6xl">
          Contact
        </h1>
        <p className="text-[#F0F0F0] text-justify italic font-serif text-base sm:text-xl">
          {"I'm"} on the lookout for exciting opportunities, and {"I'm"} here
          for a chat. If {"you've"} got questions or just want to discuss
          possibilities,
          {"don't"} hesitate to reach out. {"I'm"} committed to swift responses!
          {'"'}
        </p>

        <div className="flex text-3xl md:text-5xl justify-evenly sm:gap-4 sm:justify-center">
          <a
            href="https://www.linkedin.com/in/nilarj/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin className="hover:bg-[#FFCE63] hover:rounded-full hover:p-2" />
          </a>
          <a
            href="https://github.com/NilArj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="hover:bg-[#FFCE63] hover:rounded-full hover:p-2" />
          </a>
          <a
            href="https://public.tableau.com/app/profile/nilvia.arjona/vizzes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTableau className="hover:bg-[#FFCE63] hover:rounded-full hover:p-2" />
          </a>
          <a
            href="https://twitter.com/NilArj_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillTwitterCircle className="hover:bg-[#FFCE63] hover:rounded-full hover:p-2" />
          </a>
          <a
            href="https://forms.gle/RDsBCnyK2NM3T3DB8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGoogleforms className="hover:bg-[#FFCE63] hover:rounded-full hover:p-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
