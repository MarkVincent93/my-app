"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "Capstone Project",
    description:
      "My Capstone Project titled SMCBI Students' Offense Management System with SMS Notification.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Php" },
      { name: "MySQL" },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://offensemngt.online/landingpage/index.php",
    github: "",
  },
  {
    num: "02",
    category: "System Development",
    title: "Capstone Project",
    description: "My software project during Internship from Bansalan Coop.",
    stack: [{ name: "C#" }, { name: "MySQL" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Graphic Design",
    title: "Photoshop",
    description: "This are my designs using Adobe Photoshop and Illustrator.",
    stack: [{ name: "Adobe Photoshop" }, { name: "Adobe Illustrator" }],
    image: "/assets/work/thumb3.png",
    live: "https://www.pornhub.com/",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <h1 className="text-3xl leading-none font-extrabold text-white/50">
          JUST SWIPE THE IMAGE
        </h1>
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-name">
            <div className="flex flex-col gap-[30px]">
              {/* {outline} */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* {category} */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* {project description} */}
              <p className="text-white/60">{project.description}</p>
              {/* {stack} */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-accent">
                      {item.name}
                      {/* {remove last comma} */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* {border} */}
              <div className="border border-white/20"></div>
              {/* {buttons} */}
              <div className="flex items-center gap-4">
                {/* {live} */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* {github} */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="w-full flex justify-center"
                  >
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* Overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* Image Container */}
                      <div className="relative w-full h-full flex justify-center items-center">
                        <Image
                          src={project.image}
                          layout="fill"
                          objectFit="cover"
                          alt=""
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* {slider button} */}
              {/* <WorkSliderBtns /> */}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
