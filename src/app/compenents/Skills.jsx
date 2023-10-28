import React from "react";
import { RiFileExcel2Line } from "react-icons/ri";
import { BiLogoGit } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { SiPython, SiTableau } from "react-icons/si";

const TechItem = ({ label, children }) => (
  <div className="flex flex-col items-center text-center mb-4 text-3xl md:text-5xl lg:text-7xl">
    {children}
    <p className="mt-4 text-base text-justify italic font-serif sm:text-lg text-[#F0F0F0]">
      {label}
    </p>
  </div>
);

const Skills = () => {
  return (
    <section id="skills">
      <div className="flex flex-col flex-wrap py-8 px-4 gap-4 xl:gap-16 sm:py-16 xl:px-16">
        <h1 className="font-extrabold text-center text-[#FFCE63] text-3xl sm:text-5xl lg:text-6xl">
          Skills
        </h1>
        <div className="text-center mt-2">
          <div className="flex flex-wrap gap-4 justify-between items-center">
            <TechItem label="Excel">
              <RiFileExcel2Line />
            </TechItem>
            <TechItem label="MySQL">
              <GrMysql />
            </TechItem>
            <TechItem label="Python">
              <SiPython />
            </TechItem>
            <TechItem label="Tableau">
              <SiTableau />
            </TechItem>
            <TechItem label="Git">
              <BiLogoGit />
            </TechItem>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
