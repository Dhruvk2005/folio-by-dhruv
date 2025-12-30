"use client";

import React from "react";
import { Carousel, Card } from "./apple-cards-carousel";

/* ---------------------------------------
   TYPES
---------------------------------------- */

interface Project {
  Title: string;
  Description: string;
  src: string;
  overview: string;
  purpose: string;
  Timeline: string;
  Myrole: string;
  Technology: string[];
  features: string[];
  link: string;
}

/* ---------------------------------------
   PROJECT CONTENT COMPONENT
---------------------------------------- */

const ProjectContent = ({ project }: { project: Project }) => {
  return (
    <div className="bg-black p-8 md:p-14 rounded-3xl mb-4 border border-white/10">

      <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
        {project.Title}
      </h2>

      <p className="text-neutral-400 text-center mt-3 max-w-3xl mx-auto">
        {project.Description}
      </p>

      <div className="mt-10 flex justify-center">
        <img
          src={project.src}
          alt={project.Title}
          className="w-full md:w-4/5 rounded-xl"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">
        <Section title="Overview" text={project.overview} />
        <Section title="Purpose" text={project.purpose} />
        <Section title="My Role" text={project.Myrole} />
        <Section title="Timeline" text={project.Timeline} />

        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Technologies Used
          </h3>
          <ul className="text-neutral-400 space-y-1 list-disc list-inside">
            {project.Technology.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Key Features
          </h3>
          <ul className="text-neutral-400 space-y-1 list-disc list-inside">
            {project.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>

        {project.link && (
          <div className="col-span-full text-center mt-6">
            <a
              href={project.link}
              target="_blank"
              className="text-blue-400 underline"
            >
              Visit Project
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const Section = ({ title, text }: { title: string; text: string }) => (
  <div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-neutral-400 leading-relaxed">{text}</p>
  </div>
);

/* ---------------------------------------
   PROJECT DATA
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
    Myrole:" I designed and developed the entire application end-to-end, including UI/UX, frontend architecture, backend, AI logic integration, and performance optimization.",
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
    link:"https://cognivue-ai.vercel.app/",
  },
  {
    Title: "CROOSE AI",
    Description: "An AI assistant designed to enhance daily productivity.",
    src: "./p2.png",
    overview:
      "CROOSE is an intelligent WhatsApp business automation platform designed for small businesses. It combines booking management, payment processing, customer communication, and inventory tracking into a single, unified system. Think of it as your AI-powered business assistant that operates 24/7 on WhatsApp, delivering a seamless and professional experience to your customers while you focus on growing your business.",
    purpose:
      "The purpose of JoinCroose is to help businesses build stronger customer relationships through intelligent, real-time communication. By combining AI-powered chats, broadcast messaging, and smart automation, Croose enables teams to engage customers faster, personalize interactions at scale, and turn conversations into measurable growth.",
    Timeline: "Code in progress. This project is started from june and team is still working on it.",
    Myrole:"I contributed to the frontend development of the web application, focusing on building a responsive, high-performance user interface that delivers a seamless user experience. My work involved translating product requirements and design concepts into clean, scalable, and reusable UI components. I collaborated closely with the product and backend teams to integrate real-time data, APIs, and AI-driven features into the frontend, ensuring smooth interactions and consistent performance across devices and browsers. Special attention was given to performance optimization, accessibility, and maintaining a modern, intuitive design system.",
    Technology: ["Nextjs",'REST APIs',"Tailwind CSS", "PostgreSQL",'PHP',"AI technology"],
    features: ["Engage customers instantly with smart, AI-powered conversations that feel natural, personalized, and human—24/7.", "Send targeted announcements, offers, and updates to thousands of users at once without losing personalization.",'Automate replies, follow-ups, and workflows to reduce response time and scale customer support effortlessly.','Organize and prioritize conversations with filters, tags, and AI-assisted summaries.','Built for high-performance, real-time communication that scales with your business.'],
    link:"https://www.joincroose.com/",
  },
  {
    Title: "Ordiio",
    Description: "A modern ordering platform with seamless UX.",
    src: "./p4.png",
    overview:
      "Ordiio is the first sync licensing platform built specifically for creators, filmmakers, agencies, media networks, and brands seeking afro-leaning music and sounds for their projects. The platform provides a curated catalog of high-quality tracks, each fully cleared for commercial use—eliminating licensing complexity and legal uncertainty Designed to support modern storytelling, Ordiio makes it easy to discover, license, and use authentic afro-inspired music across films, advertisements, digital content, and branded media. By combining cultural depth with a streamlined licensing experience, Ordiio empowers creators to focus on creativity while ensuring every track is safe, legal, and production-ready.",
    purpose:
      "The purpose of Ordiio is to make afro-leaning music easily accessible and legally safe for creators and brands worldwide. By offering a curated library of commercially cleared tracks, Ordiio removes the complexity, risk, and time traditionally associated with music licensing. Ordiio exists to empower storytellers—filmmakers, agencies, media networks, and digital creators—to confidently use authentic sounds that elevate their projects, while supporting artists through fair and transparent licensing.",
    Timeline: "It is all in progress.",
    Myrole:"I contributed to the frontend development of the web application, focusing on building a responsive, high-performance user interface that delivers a seamless user experience. My work involved translating product requirements and design concepts into clean, scalable, and reusable UI components. I collaborated closely with the product and backend teams to integrate real-time data, APIs, and AI-driven features into the frontend, ensuring smooth interactions and consistent performance across devices and browsers. Special attention was given to performance optimization, accessibility, and maintaining a modern, intuitive design system.",
    Technology: ["Next.js", "Tailwind CSS", "REST APIs",'PostgreSQL','Modern AI technology for Muse AI'],
    features: ["Fast checkoutA curated library of high-quality afro-inspired tracks and sounds tailored for modern storytelling.", "Every track is pre-licensed and legally cleared, removing copyright risk and licensing complexity.",'Search and filter music by mood, tempo, genre, and use-case to quickly find the perfect sound.','License tracks instantly with a simple, transparent process—no back-and-forth or legal delays.','Optimized for filmmakers, agencies, media networks, and brands producing commercial content.'],
    link:"https://www.ordiio.com/",
  },
  {
    Title: "Forecastify : Weather app",
    Description: "A modern ordering platform with seamless UX.",
    src: "./weather.png",
    overview:
      "Ordiio is the first sync licensing platform built specifically for creators, filmmakers, agencies, media networks, and brands seeking afro-leaning music and sounds for their projects. The platform provides a curated catalog of high-quality tracks, each fully cleared for commercial use—eliminating licensing complexity and legal uncertainty Designed to support modern storytelling, Ordiio makes it easy to discover, license, and use authentic afro-inspired music across films, advertisements, digital content, and branded media. By combining cultural depth with a streamlined licensing experience, Ordiio empowers creators to focus on creativity while ensuring every track is safe, legal, and production-ready.",
    purpose:
      "The purpose of Ordiio is to make afro-leaning music easily accessible and legally safe for creators and brands worldwide. By offering a curated library of commercially cleared tracks, Ordiio removes the complexity, risk, and time traditionally associated with music licensing. Ordiio exists to empower storytellers—filmmakers, agencies, media networks, and digital creators—to confidently use authentic sounds that elevate their projects, while supporting artists through fair and transparent licensing.",
    Timeline: "It is all in progress.",
    Myrole:"I contributed to the frontend development of the web application, focusing on building a responsive, high-performance user interface that delivers a seamless user experience. My work involved translating product requirements and design concepts into clean, scalable, and reusable UI components. I collaborated closely with the product and backend teams to integrate real-time data, APIs, and AI-driven features into the frontend, ensuring smooth interactions and consistent performance across devices and browsers. Special attention was given to performance optimization, accessibility, and maintaining a modern, intuitive design system.",
    Technology: ["Next.js", "Tailwind CSS", "REST APIs",'PostgreSQL','Modern AI technology for Muse AI'],
    features: ["Fast checkoutA curated library of high-quality afro-inspired tracks and sounds tailored for modern storytelling.", "Every track is pre-licensed and legally cleared, removing copyright risk and licensing complexity.",'Search and filter music by mood, tempo, genre, and use-case to quickly find the perfect sound.','License tracks instantly with a simple, transparent process—no back-and-forth or legal delays.','Optimized for filmmakers, agencies, media networks, and brands producing commercial content.'],
    link:"https://www.ordiio.com/",
  },
  {
    Title: "To-do list app",
    Description: "A modern ordering platform with seamless UX.",
    src: "./todo.png",
    overview:
      "Ordiio is the first sync licensing platform built specifically for creators, filmmakers, agencies, media networks, and brands seeking afro-leaning music and sounds for their projects. The platform provides a curated catalog of high-quality tracks, each fully cleared for commercial use—eliminating licensing complexity and legal uncertainty Designed to support modern storytelling, Ordiio makes it easy to discover, license, and use authentic afro-inspired music across films, advertisements, digital content, and branded media. By combining cultural depth with a streamlined licensing experience, Ordiio empowers creators to focus on creativity while ensuring every track is safe, legal, and production-ready.",
    purpose:
      "The purpose of Ordiio is to make afro-leaning music easily accessible and legally safe for creators and brands worldwide. By offering a curated library of commercially cleared tracks, Ordiio removes the complexity, risk, and time traditionally associated with music licensing. Ordiio exists to empower storytellers—filmmakers, agencies, media networks, and digital creators—to confidently use authentic sounds that elevate their projects, while supporting artists through fair and transparent licensing.",
    Timeline: "It is all in progress.",
    Myrole:"I contributed to the frontend development of the web application, focusing on building a responsive, high-performance user interface that delivers a seamless user experience. My work involved translating product requirements and design concepts into clean, scalable, and reusable UI components. I collaborated closely with the product and backend teams to integrate real-time data, APIs, and AI-driven features into the frontend, ensuring smooth interactions and consistent performance across devices and browsers. Special attention was given to performance optimization, accessibility, and maintaining a modern, intuitive design system.",
    Technology: ["Next.js", "Tailwind CSS", "REST APIs",'PostgreSQL','Modern AI technology for Muse AI'],
    features: ["Fast checkoutA curated library of high-quality afro-inspired tracks and sounds tailored for modern storytelling.", "Every track is pre-licensed and legally cleared, removing copyright risk and licensing complexity.",'Search and filter music by mood, tempo, genre, and use-case to quickly find the perfect sound.','License tracks instantly with a simple, transparent process—no back-and-forth or legal delays.','Optimized for filmmakers, agencies, media networks, and brands producing commercial content.'],
    link:"https://www.ordiio.com/",
  },
  {
    Title: "Pariksh : Quiz game",
    Description: "A modern ordering platform with seamless UX.",
    src: "./game.png",
    overview:
      "Ordiio is the first sync licensing platform built specifically for creators, filmmakers, agencies, media networks, and brands seeking afro-leaning music and sounds for their projects. The platform provides a curated catalog of high-quality tracks, each fully cleared for commercial use—eliminating licensing complexity and legal uncertainty Designed to support modern storytelling, Ordiio makes it easy to discover, license, and use authentic afro-inspired music across films, advertisements, digital content, and branded media. By combining cultural depth with a streamlined licensing experience, Ordiio empowers creators to focus on creativity while ensuring every track is safe, legal, and production-ready.",
    purpose:
      "The purpose of Ordiio is to make afro-leaning music easily accessible and legally safe for creators and brands worldwide. By offering a curated library of commercially cleared tracks, Ordiio removes the complexity, risk, and time traditionally associated with music licensing. Ordiio exists to empower storytellers—filmmakers, agencies, media networks, and digital creators—to confidently use authentic sounds that elevate their projects, while supporting artists through fair and transparent licensing.",
    Timeline: "It is all in progress.",
    Myrole:"I contributed to the frontend development of the web application, focusing on building a responsive, high-performance user interface that delivers a seamless user experience. My work involved translating product requirements and design concepts into clean, scalable, and reusable UI components. I collaborated closely with the product and backend teams to integrate real-time data, APIs, and AI-driven features into the frontend, ensuring smooth interactions and consistent performance across devices and browsers. Special attention was given to performance optimization, accessibility, and maintaining a modern, intuitive design system.",
    Technology: ["Next.js", "Tailwind CSS", "REST APIs",'PostgreSQL','Modern AI technology for Muse AI'],
    features: ["Fast checkoutA curated library of high-quality afro-inspired tracks and sounds tailored for modern storytelling.", "Every track is pre-licensed and legally cleared, removing copyright risk and licensing complexity.",'Search and filter music by mood, tempo, genre, and use-case to quickly find the perfect sound.','License tracks instantly with a simple, transparent process—no back-and-forth or legal delays.','Optimized for filmmakers, agencies, media networks, and brands producing commercial content.'],
    link:"https://www.ordiio.com/",
  },
  {
    Title: "Penguin fashion",
    Description: "A modern ordering platform with seamless UX.",
    src: "./p5.png",
    overview:
      "Ordiio is the first sync licensing platform built specifically for creators, filmmakers, agencies, media networks, and brands seeking afro-leaning music and sounds for their projects. The platform provides a curated catalog of high-quality tracks, each fully cleared for commercial use—eliminating licensing complexity and legal uncertainty Designed to support modern storytelling, Ordiio makes it easy to discover, license, and use authentic afro-inspired music across films, advertisements, digital content, and branded media. By combining cultural depth with a streamlined licensing experience, Ordiio empowers creators to focus on creativity while ensuring every track is safe, legal, and production-ready.",
    purpose:
      "The purpose of Ordiio is to make afro-leaning music easily accessible and legally safe for creators and brands worldwide. By offering a curated library of commercially cleared tracks, Ordiio removes the complexity, risk, and time traditionally associated with music licensing. Ordiio exists to empower storytellers—filmmakers, agencies, media networks, and digital creators—to confidently use authentic sounds that elevate their projects, while supporting artists through fair and transparent licensing.",
    Timeline: "It is all in progress.",
    Myrole:"I contributed to the frontend development of the web application, focusing on building a responsive, high-performance user interface that delivers a seamless user experience. My work involved translating product requirements and design concepts into clean, scalable, and reusable UI components. I collaborated closely with the product and backend teams to integrate real-time data, APIs, and AI-driven features into the frontend, ensuring smooth interactions and consistent performance across devices and browsers. Special attention was given to performance optimization, accessibility, and maintaining a modern, intuitive design system.",
    Technology: ["Next.js", "Tailwind CSS", "REST APIs",'PostgreSQL','Modern AI technology for Muse AI'],
    features: ["Fast checkoutA curated library of high-quality afro-inspired tracks and sounds tailored for modern storytelling.", "Every track is pre-licensed and legally cleared, removing copyright risk and licensing complexity.",'Search and filter music by mood, tempo, genre, and use-case to quickly find the perfect sound.','License tracks instantly with a simple, transparent process—no back-and-forth or legal delays.','Optimized for filmmakers, agencies, media networks, and brands producing commercial content.'],
    link:"https://www.ordiio.com/",
  },
  {
    Title: "Ultraedit",
    Description: "A modern ordering platform with seamless UX.",
    src: "./ultra.png",
    overview:
      "Ordiio is the first sync licensing platform built specifically for creators, filmmakers, agencies, media networks, and brands seeking afro-leaning music and sounds for their projects. The platform provides a curated catalog of high-quality tracks, each fully cleared for commercial use—eliminating licensing complexity and legal uncertainty Designed to support modern storytelling, Ordiio makes it easy to discover, license, and use authentic afro-inspired music across films, advertisements, digital content, and branded media. By combining cultural depth with a streamlined licensing experience, Ordiio empowers creators to focus on creativity while ensuring every track is safe, legal, and production-ready.",
    purpose:
      "The purpose of Ordiio is to make afro-leaning music easily accessible and legally safe for creators and brands worldwide. By offering a curated library of commercially cleared tracks, Ordiio removes the complexity, risk, and time traditionally associated with music licensing. Ordiio exists to empower storytellers—filmmakers, agencies, media networks, and digital creators—to confidently use authentic sounds that elevate their projects, while supporting artists through fair and transparent licensing.",
    Timeline: "It is all in progress.",
    Myrole:"I contributed to the frontend development of the web application, focusing on building a responsive, high-performance user interface that delivers a seamless user experience. My work involved translating product requirements and design concepts into clean, scalable, and reusable UI components. I collaborated closely with the product and backend teams to integrate real-time data, APIs, and AI-driven features into the frontend, ensuring smooth interactions and consistent performance across devices and browsers. Special attention was given to performance optimization, accessibility, and maintaining a modern, intuitive design system.",
    Technology: ["Next.js", "Tailwind CSS", "REST APIs",'PostgreSQL','Modern AI technology for Muse AI'],
    features: ["Fast checkoutA curated library of high-quality afro-inspired tracks and sounds tailored for modern storytelling.", "Every track is pre-licensed and legally cleared, removing copyright risk and licensing complexity.",'Search and filter music by mood, tempo, genre, and use-case to quickly find the perfect sound.','License tracks instantly with a simple, transparent process—no back-and-forth or legal delays.','Optimized for filmmakers, agencies, media networks, and brands producing commercial content.'],
    link:"https://www.ordiio.com/",
  },
  {
    Title: "Tic Tac Toe",
    Description: "A modern ordering platform with seamless UX.",
    src: "./tic.png",
    overview:
      "Ordiio is the first sync licensing platform built specifically for creators, filmmakers, agencies, media networks, and brands seeking afro-leaning music and sounds for their projects. The platform provides a curated catalog of high-quality tracks, each fully cleared for commercial use—eliminating licensing complexity and legal uncertainty Designed to support modern storytelling, Ordiio makes it easy to discover, license, and use authentic afro-inspired music across films, advertisements, digital content, and branded media. By combining cultural depth with a streamlined licensing experience, Ordiio empowers creators to focus on creativity while ensuring every track is safe, legal, and production-ready.",
    purpose:
      "The purpose of Ordiio is to make afro-leaning music easily accessible and legally safe for creators and brands worldwide. By offering a curated library of commercially cleared tracks, Ordiio removes the complexity, risk, and time traditionally associated with music licensing. Ordiio exists to empower storytellers—filmmakers, agencies, media networks, and digital creators—to confidently use authentic sounds that elevate their projects, while supporting artists through fair and transparent licensing.",
    Timeline: "It is all in progress.",
    Myrole:"I contributed to the frontend development of the web application, focusing on building a responsive, high-performance user interface that delivers a seamless user experience. My work involved translating product requirements and design concepts into clean, scalable, and reusable UI components. I collaborated closely with the product and backend teams to integrate real-time data, APIs, and AI-driven features into the frontend, ensuring smooth interactions and consistent performance across devices and browsers. Special attention was given to performance optimization, accessibility, and maintaining a modern, intuitive design system.",
    Technology: ["Next.js", "Tailwind CSS", "REST APIs",'PostgreSQL','Modern AI technology for Muse AI'],
    features: ["Fast checkoutA curated library of high-quality afro-inspired tracks and sounds tailored for modern storytelling.", "Every track is pre-licensed and legally cleared, removing copyright risk and licensing complexity.",'Search and filter music by mood, tempo, genre, and use-case to quickly find the perfect sound.','License tracks instantly with a simple, transparent process—no back-and-forth or legal delays.','Optimized for filmmakers, agencies, media networks, and brands producing commercial content.'],
    link:"https://www.ordiio.com/",
  },
];

/* ---------------------------------------
   CAROUSEL DATA (✅ FIXED)
---------------------------------------- */

const data = projects.map((project) => ({
  title: project.Title,      // ✅ REQUIRED BY Card
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
