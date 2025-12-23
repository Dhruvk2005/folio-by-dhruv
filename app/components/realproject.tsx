"use client";

import React from "react";
import { Carousel, Card } from "./apple-cards-carousel";



const ProjectContent = ({ project }:any) => {
  return (
    <div className="bg-black p-8 md:p-14 rounded-3xl mb-4 border border-white/10">

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
        {project.Title}
      </h2>

      {/* TAGLINE */}
      <p className="text-neutral-400 text-center mt-3 max-w-3xl mx-auto">
        {project.Description}
      </p>

      {/* IMAGE */}
      <div className="mt-10 flex justify-center">
        <img
          src={project.src}
          alt={project.Title}
          className="w-full md:w-4/5 rounded-xl"
        />
      </div>

      {/* DETAILS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">

        <Section title="Overview" text={project.overview} />  
        <Section title="Purpose" text={project.purpose} />
         <Section title="My role" text={project.Myrole} />
        <Section title="Timeline" text={project.Timeline} />

        {/* TECHNOLOGIES */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Technologies Used
          </h3>
          <ul className="text-neutral-400 space-y-1 list-disc list-inside">
            {project.Technology.map((tech:any, i:any) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        </div>

        {/* FEATURES */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Key Features
          </h3>
          <ul className="text-neutral-400 space-y-1 list-disc list-inside">
            {project.features.map((feature:any, i:any) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

const Section = ({ title, text }:any) => (
  <div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-neutral-400 leading-relaxed">{text}</p>
  </div>
);

/* ---------------------------------------
   PROJECT DATA (SINGLE SOURCE OF TRUTH)
---------------------------------------- */

const projects = [
  {
    Title: "Cognivue AI",
    Description:
      "An AI-powered platform that analyzes raw data and delivers actionable insights in seconds.",
    src: "./p1.png",
    overview:
      " Cognivue AI is a personal project focused on transforming complex and unstructured data into meaningful insights using artificial intelligence. The platform is designed for speed, clarity, and real-world usability.",
    purpose:
      "The goal of this project was to build an AI-driven solution that reduces manual data analysis time and helps users make faster, data-backed decisions without technical expertise.",
    Timeline: "6–8 weeks",
    Myrole:" I designed and developed the entire application end-to-end, including UI/UX, frontend architecture, AI logic integration, and performance optimization.",
    Technology: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "AI / ML APIs",
    ],
    features: [
      "Real-time AI data analysis",
      "Clean and intuitive dashboard",
      "Scalable architecture",
      "Optimized performance",
    ],
  },
  {
    Title: "CROOSE AI",
    Description: "An AI assistant designed to enhance daily productivity.",
    src: "./p2.png",
    overview:
      "CROOSE AI helps automate repetitive tasks and streamline daily workflows.",
    purpose:
      "To improve productivity using AI-driven task automation and smart prompts.",
    Timeline: "4 weeks",
    Technology: ["React", "Tailwind CSS", "OpenAI API"],
    features: ["Smart task automation", "Context-aware prompts"],
  },
  {
    Title: "Ordiio",
    Description: "A modern ordering platform with seamless UX.",
    src: "./p4.png",
    overview:
      "Ordiio simplifies digital ordering with a fast and intuitive interface.",
    purpose:
      "To deliver a frictionless ordering experience across devices.",
    Timeline: "5 weeks",
    Technology: ["Next.js", "Tailwind CSS", "REST APIs"],
    features: ["Fast checkout", "Mobile-first design"],
  },
];

/* ---------------------------------------
   CAROUSEL DATA (CONNECTED PROPERLY)
---------------------------------------- */

const data = projects.map((project) => ({
  category: project.Title,

  src: project.src,
  content: <ProjectContent project={project} />,
}));

/* ---------------------------------------
   MAIN COMPONENT
---------------------------------------- */

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.category} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full bg-[linear-gradient(90deg,#0b0b0b_0%,#1a1a1a_20%,#0e0e0e_40%,#2a2a2a_55%,#0a0a0a_70%,#151515_85%,#050505_100%)] py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white">
        My Projects
      </h2>

      <Carousel items={cards} />
    </div>
  );
}
