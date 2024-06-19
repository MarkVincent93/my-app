"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "Personal Information",
  description:
    "Eager IT graduate with a strong command of C#, HTML, CSS, and MySQL. Proficient in Adobe Photoshop and Illustrator for graphic design projects, with hands-on experience in video editing using Adobe Premiere Pro and After Effects. Passionate about graphic design and video editing, I have created visual designs and multimedia content for various projects. My creativity and attention to detail drive me to deliver high-quality work, and I am excited to contribute to a dynamic environment where I can continue to learn and innovate.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Mark Vincent Quiao",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+63)9300415548",
    },
    {
      fieldName: "Experience",
      fieldValue: "1-2 Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "MarkVincent93",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Pilipino",
    },
    {
      fieldName: "Email",
      fieldValue: "markvincentquiao@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Filipino",
    },
  ],
};

//experiences
const experience = {
  icon: "",
  title: "My experience",
  desciption:
    "OJT trainee in the IT-MIS Department of Bansalan Multipurpose Cooperative, working as a Technology Staff/System Developer. Seasoned Layout Artist with 1-year expertise in tarpaulin design, leveraging Adobe Photoshop and Illustrator to deliver high-quality visual solutions.",
  items: [
    {
      company: "Bansalan Coop",
      position: "System Developer/Technology Staff",
      duration: "2024 Feb - 2024 April",
    },
    {
      company: "Arking Printing & Design",
      position: "Layout Artist",
      duration: "2019 May - 2020 June",
    },
  ],
};

//education
const education = {
  icon: "",
  title: "My education",
  desciption:
    "NC III - Visual Graphics Design Passer (2018) & NC II - Computer Servicing System Passer (2018). An active School Officer / Student Excutive Board and BSIT Program Officer.",
  items: [
    {
      institution: "Nazareth High School of Bansalan, Inc.",
      degree: "ICT / Senior High School",
      duration: "2019",
    },
    {
      institution: "St. Mary's College of Bansalan, Inc.",
      degree: "Bachelor of Science in Information Technology",
      duration: "2024",
    },
  ],
};

//skills
const skills = {
  title: "My skills",
  description:
    "A strong command of progamming such as HTML, CSS, Javascript, MYSQL etc. Proficient in utilizing Adobe Photoshop and Illustrator for graphic design projects.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaJava />,
      name: "java",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* {content} */}
          <div className="min-h-[70vh] w-full">
            {/* {experience} */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.desciption}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                        flex flex-col justify-center items-center lg:-items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left mb-3 xl:mb-3 leading-none">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* {dot} */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* {education} */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.desciption}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                        flex flex-col justify-center items-center lg:-items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left mb-4 xl:mb-3 leading-none">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-2">
                            {/* {dot} */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 leading-none mt-3">
                              {item.institution}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* {skills} */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger
                              className="w-full h-[150px] bg-[#232329] rounded-xl flex
                            justify-center items-center group"
                            >
                              <div
                                className="text-6xl group-hover:text-accent
                              transition-all duration-300"
                              >
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* {about} */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul
                  className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]
                mx-auto xl:mx-0"
                >
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
