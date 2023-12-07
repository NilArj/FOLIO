import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
  imageSrc,
  altText,
  description,
  projectLink,
  title,
  subtitle,
}) => {
  return (
    <div className="project-card flex flex-col justify-between text-center overflow-hidden">
      <div className="relative aspect-1/1 min-w-[200px] min-h-[180px]">
        <Image
          src={imageSrc}
          alt={altText}
          layout="fill"
          objectFit="cover"
          className="mx-auto "
        />
      </div>
      <div className="px-4 py-2">
        <h2 className="text-yellow-primary text-center text-lg mt-4 font-semibold sm:text-xl">
          {title}
        </h2>
        <h2 className="text-yellow-primary text-center text-lg mb-4 sm:text-xl">
          {subtitle}
        </h2>
        <p className="text-white-primary text-justify italic text-base mb-4 sm:text-xl">
          {description}
        </p>

        <a
          href={projectLink}
          passHref
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 mx-auto text-[#F0F0F0] text-sm border border-solid border-[#FFCE63] px-5 py-3 w-full font-semibold sm:w-fit md:text-lg hover:bg-gradient-to-br hover:to-[#FFCE63] hover:from-[#0A133D]"
        >
          View
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      imageSrc: "images/g-ply.png",
      altText: "Google Play Logo",
      description:
        "Create a successful Android App. This project aims to answer critical questions to make informed decisions",
      projectLink: "https://github.com/NilArj/Google_play",
      title: "SQL | Power BI",
      subtitle: "Google Play App Development Analysis",
    },
    {
      imageSrc: "images/amazon.jpg",
      altText: "Amazon Logo",
      description:
        "The primary problem was to identify and understand customer behavior and segment customers effectively for more targeted marketing strategies",
      projectLink: "https://github.com/NilArj/Amazon_sales",
      title: "EXCEL",
      subtitle: "Amazon RFM Analysis",
    },
    {
      imageSrc: "images/drag.jpg",
      altText: "La mas draga logo",
      description:
        "The goal is to unveil the key factors shared by the top 4 contestants across all seasons of the show.",
      projectLink: "https://github.com/NilArj/drag_show",
      title: "PYTHON | SQL",
      subtitle: "La Más Draga",
    },
    {
      imageSrc: "images/mx.jpg",
      altText: "mexico flag",
      description:
        "The primary objective is to forecast Mexico's economic growth using available data from Banco de Mexico.",
      projectLink:
        "https://github.com/NilArj/Predicting-Mexico-s-Economic-Growth",
      title: "PYTHON",
      subtitle: "Predicting Mexico's Economic Growth",
    },
  ];

  return (
    <section id="projects">
      <div className="flex flex-col items-center flex-wrap py-8 px-4 gap-4 xl:gap-16 sm:py-16 xl:px-16">
        <h1 className="font-extrabold text-center text-[#FFCE63] text-3xl sm:text-5xl lg:text-6xl">
          Projects
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
