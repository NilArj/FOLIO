import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
  imageSrc,
  altText,
  description,
  projectLink,
  title,
}) => {
  return (
    <div className="project-card text-center relative overflow-hidden">
      <div className="relative aspect-1/1 min-w-[200px] min-h-[235px] sm:min-h-[260px] sm:min-w-[280px] md:min-h-[280px] md:min-w-[280px] lg:min-h-[300px] lg:min-w-[345px]">
        <Image
          src={imageSrc}
          alt={altText}
          layout="fill"
          objectFit="cover"
          className="mx-auto"
        />
        <div className="flex flex-col flex-wrap px-auto items-center absolute transition-background inset-0 text-center justify-evenly opacity-0 hover:opacity-95 hover:bg-[#0A133D]">
          <h2 className=" text-[#FFCE63] text-center text-base font-semibold sm:mt-4 lg:text-xl">
            {title}
          </h2>
          <p className="italic w-fit text-justify object-fill font-serif text-base text-[#F0F0F0] md:mx-4 lg:text-lg">
            {description}
          </p>
          <Link
            href={projectLink}
            className="text-[#F0F0F0] mx-auto w-full text-xs border border-solid border-[#FFCE63] px-5 py-3 font-semibold hover:bg-gradient-to-br hover:to-[#FFCE63] hover:from-[#0A133D] sm:w-fit md:text-xl lg:mb-4"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      imageSrc: "/images/g-ply.png",
      altText: "Google Play Logo",
      description:
        "Create a successful Android App. This project aims to answer critical questions to make informed decisions. SQL",
      projectLink: "https://github.com/NilArj/Google_play",
      title: "Google Play App Development Analysis",
    },
    {
      imageSrc: "/images/amazon.jpg",
      altText: "Amazon Logo",
      description:
        "The primary problem was to identify and understand customer behavior and segment customers effectively for more targeted marketing strategies. EXCEL",
      projectLink: "https://github.com/NilArj/Amazon_sales",
      title: "Amazon RFM Analysis",
    },
    {
      imageSrc: "/images/pexels-kristina-paukshtite-1146760.jpg",
      altText: "A plato pizza image",
      description:
        "Analyze a large dataset of pizza sales and extract meaningful insights to help the company make data-driven decisions. SQL",
      projectLink: "https://github.com/NilArj/Pizza-Analysis",
      title: "Maven's Pizza",
    },
    {
      imageSrc: "/images/drag.jpg",
      altText: "La mas draga logo",
      description:
        "The problem in this project is creation of a model to predict the success of contestants in the show based on their performance and characteristics. PYTHON",
      projectLink: "https://github.com/NilArj/drag_show",
      title: "La Más Draga",
    },
  ];

  return (
    <section id="projects">
      <div className="flex flex-col items-center flex-wrap py-8 px-4 gap-4 xl:gap-16 sm:py-16 xl:px-16">
        <h1 className="font-extrabold text-center text-[#FFCE63] text-3xl sm:text-5xl lg:text-6xl">
          Projects
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-0 ">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
