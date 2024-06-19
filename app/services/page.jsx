"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Web Development Services provide custom website development, e-commerce platforms, CMS implementation, and web applications tailored to business needs. Focused on responsive design, scalability, and user engagement, these services ensure high-quality, client-centric solutions. Expertise in SEO, digital marketing, and reliable cloud hosting enhances online presence and drives business growth.",
    href: "https://en.wikipedia.org/wiki/Web_development",
  },
  {
    num: "02",
    title: "System Development",
    description:
      "System Development Services encompass tailored solutions for designing, implementing, and optimizing robust software systems to meet specific organizational needs. From initial conceptualization to deployment and maintenance, our services focus on delivering scalable, secure, and efficient solutions. We specialize in custom software development, integration of existing systems, and comprehensive testing to ensure reliability and performance, empowering businesses to streamline operations and achieve strategic goals effectively.",
    href: "https://en.wikipedia.org/wiki/Software_development_process",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description:
      "UI/UX Design Services focus on crafting intuitive, visually appealing interfaces that enhance user engagement and satisfaction. Specializing in meticulous research, wireframing, and prototyping, these services aim to create seamless user experiences. Emphasizing user behaviors and preferences, designs prioritize efficiency and memorable interactions.",
    href: "https://en.wikipedia.org/wiki/User_interface_design",
  },
  {
    num: "04",
    title: "Graphic Design",
    description:
      "Graphics Design Services involve creating visually compelling and impactful designs tailored to client needs. Offerings include logo design, branding, digital illustrations, and print materials, each crafted to reflect unique brand identities and messaging. Utilizing industry-standard software and techniques, these services ensure high-quality graphics that enhance marketing collateral and digital presence across various platforms and mediums.",
    href: "https://en.wikipedia.org/wiki/Graphic_design",
  },
];

import { delay, motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* {top} */}
                <div className="w-full flex justify-between items-center">
                  <div
                    className="text-5xl font-extrabold text-outline text-transparent
                  group-hover:text-outline-hover transtion-all duration-500"
                  >
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent
                  transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* {title} */}
                <h2
                  className="text-[42px] font-bold leading-none text-white
                group-hover:text-accent transition-all duration-500"
                >
                  {service.title}
                </h2>
                {/* {description} */}
                <p className="text-white/60">{service.description}</p>
                {/* {border} */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
