"use client";
import React, { useState } from "react";
import { AiOutlineLine } from "react-icons/ai";

const About = () => {
  const [selectedSection, setSelectedSection] = useState("overview");

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <section id="about">
      <div className="flex flex-col flex-wrap py-8 px-4 gap-4 xl:gap-16 sm:py-16 xl:px-16">
        <h1 className="font-extrabold text-center text-[#FFCE63] text-3xl sm:text-5xl lg:text-6xl">
          About
        </h1>
        <div className="flex text-4xl sm:text-6xl gap-4 justify-center">
          <AiOutlineLine
            onClick={() => handleSectionChange("overview")}
            className={`${
              selectedSection === "overview"
                ? "text-[#FFCE63] "
                : "text-[rgb(10,19,55)]"
            } `}
          />
          <AiOutlineLine
            onClick={() => handleSectionChange("education")}
            className={`${
              selectedSection === "education"
                ? "text-[#FFCE63] "
                : "text-[rgb(10,19,95)]"
            }`}
          />
        </div>

        {selectedSection === "overview" && (
          <div>
            <p className="text-[#F0F0F0] text-justify italic font-serif text-base sm:text-xl mb-4">
              Hi there! I have a diverse background in education,
              administration, and data analysis. {"Here's"} a little about my
              journey:
            </p>

            <div className="md:flex md:justify-between md:mx-auto">
              <div className="md:px-6">
                <h2 className="text-[#FFCE63] font-semibold mb-4 text-center text-base sm:text-xl">
                  Education
                </h2>
                <p className="text-[#F0F0F0] italic font-serif mb-4 text-base text-justify sm:text-xl sm:mb-0">
                  {"'ve"} I been deeply engaged in the world of education,
                  working closely with students, teachers, parents,
                  administrators, and team leaders. My focus has been on
                  simplifying reports and crafting captivating visuals to drive
                  educational success.
                </p>
              </div>
              <div className="md:px-6">
                <h2 className="text-[#FFCE63] font-semibold mb-4 text-center text-base sm:text-xl sm:mt-4 md:mt-0">
                  Administration
                </h2>
                <p className="text-[#F0F0F0] italic font-serif mb-4 text-base text-justify sm:text-xl sm:mb-0">
                  As a data wizard, {"I've"} gathered, visualized, and delivered
                  insights that empower decisions. {"I'm"} tech-savvy and love
                  automating data processes. {"I've"} also worked on community
                  promotion projects, focusing on improving information
                  management
                </p>
              </div>
              <div className="md:px-6">
                <h2 className="text-[#FFCE63] font-semibold mb-4 text-center text-base sm:text-xl sm:mt-4 md:mt-0">
                  Data Analysis
                </h2>
                <p className="text-[#F0F0F0] italic font-serif text-base text-justify sm:text-xl sm:mb-0">
                  I can take complex ideas and make them easy to grasp. As a
                  Data Analyst, I want to turn raw data into actionable
                  insights. {"I'm"} well-armed with Python, SQL, Tableau and
                  Excel.
                  {"I'm"} excited to tackle new challenges in the data field.
                </p>
              </div>
            </div>
          </div>
        )}

        {selectedSection === "education" && (
          <div>
            <h2 className="text-[#FFCE63] font-semibold mb-4 text-center text-base sm:text-xl">
              Education
            </h2>
            <p className="text-[#F0F0F0] italic font-serif mb-4 text-base text-justify sm:text-xl sm:mb-0">
              <ul className="flex flex-col gap-4">
                <li>International Business Degree 2015</li>
                <li>Courses</li>
                <ul className="sm:ml-4 flex flex-col gap-4">
                  <li className="hover:text-[#FFCE63]">
                    <a
                      href="https://www.udemy.com/certificate/UC-a9589755-555f-4870-9f14-cd73eb211c66/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Python Total
                    </a>
                  </li>
                  <li className="hover:text-[#FFCE63]">
                    <a
                      href="https://www.udemy.com/certificate/UC-4aaa28d0-3be3-4b3e-a140-1fdc71c961af/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      MySQL
                    </a>
                  </li>
                  <li className="hover:text-[#FFCE63]">
                    <a
                      href="https://www.udemy.com/certificate/UC-8c0ef80b-4467-481c-b0fd-16244e8fd721/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Power Bi
                    </a>
                  </li>
                  <li className="hover:text-[#FFCE63]">
                    <a
                      href="https://www.udemy.com/certificate/UC-2eb236cb-da10-41f8-9cda-25519aebb574/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Statistics for Data Science and Business Analysis
                    </a>
                  </li>
                  <li className="hover:text-[#FFCE63]">
                    <a
                      href="https://www.udemy.com/certificate/UC-a21e432c-9535-4e0d-8148-122706db5343/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Tableau
                    </a>
                  </li>
                </ul>
              </ul>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
