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
  code:any
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
            <div className="" >

              <a className="text-blue-400 underline" href={project.code}>Source code</a>
            </div>
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
    Myrole: " I designed and developed the entire application end-to-end, including UI/UX, frontend architecture, backend, AI logic integration, and performance optimization.",
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
    link: "https://cognivue-ai.vercel.app/",
    code: "https://github.com/Dhruvk2005/Cognivue-AI"
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
    Myrole: "I contributed to the frontend development of the web application, focusing on building a responsive, high-performance user interface that delivers a seamless user experience. My work involved translating product requirements and design concepts into clean, scalable, and reusable UI components. I collaborated closely with the product and backend teams to integrate real-time data, APIs, and AI-driven features into the frontend, ensuring smooth interactions and consistent performance across devices and browsers. Special attention was given to performance optimization, accessibility, and maintaining a modern, intuitive design system.",
    Technology: ["Nextjs", 'REST APIs', "Tailwind CSS", "PostgreSQL", 'PHP', "AI technology"],
    features: ["Engage customers instantly with smart, AI-powered conversations that feel natural, personalized, and human—24/7.", "Send targeted announcements, offers, and updates to thousands of users at once without losing personalization.", 'Automate replies, follow-ups, and workflows to reduce response time and scale customer support effortlessly.', 'Organize and prioritize conversations with filters, tags, and AI-assisted summaries.', 'Built for high-performance, real-time communication that scales with your business.'],
    link: "https://www.joincroose.com/",
    code:"https://github.com/Dhruvk2005/CROOSE"
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
    Myrole: "I contributed to the frontend development of the web application, focusing on building a responsive, high-performance user interface that delivers a seamless user experience. My work involved translating product requirements and design concepts into clean, scalable, and reusable UI components. I collaborated closely with the product and backend teams to integrate real-time data, APIs, and AI-driven features into the frontend, ensuring smooth interactions and consistent performance across devices and browsers. Special attention was given to performance optimization, accessibility, and maintaining a modern, intuitive design system.",
    Technology: ["Next.js", "Tailwind CSS", "REST APIs", 'PostgreSQL', 'Modern AI technology for Muse AI'],
    features: ["Fast checkoutA curated library of high-quality afro-inspired tracks and sounds tailored for modern storytelling.", "Every track is pre-licensed and legally cleared, removing copyright risk and licensing complexity.", 'Search and filter music by mood, tempo, genre, and use-case to quickly find the perfect sound.', 'License tracks instantly with a simple, transparent process—no back-and-forth or legal delays.', 'Optimized for filmmakers, agencies, media networks, and brands producing commercial content.'],
    link: "https://www.ordiio.com/",
    code:"https://github.com/Dhruvk2005/Ordiio"
  },
  {
    Title: "Forecastify : Weather app",
    Description:
      "Forecastify is a lightweight and modern weather application that provides real-time weather information through a clean and intuitive user interface. Built using pure HTML, CSS, and JavaScript, the app focuses on fast performance, simplicity, and usability while delivering accurate weather data for cities worldwide.",

    src: "./weather.png",
    overview:
      "Forecastify is a frontend-focused weather application designed to deliver essential weather insights in a visually appealing and easy-to-use format. Users can search for any city and instantly view real-time weather details such as temperature, humidity, wind speed, and weather conditions. The application uses JavaScript to fetch live data from a weather API and dynamically update the UI, while HTML and CSS ensure a responsive and modern design across all devices. Forecastify emphasizes clean code, efficient API handling, and a smooth user experience without relying on external frameworks or libraries.",

    purpose:
      "The purpose of Forecastify is to provide users with quick and reliable access to real-time weather information through a simple, lightweight, and accessible web application. By using only HTML, CSS, and JavaScript, the project demonstrates strong frontend fundamentals, API integration skills, and responsive design practices while delivering a practical tool for everyday weather tracking.",

    Timeline: "1 day",
    Myrole: "I contributed to the frontend development of the web application, focusing on building a responsive, high-performance user interface that delivers a seamless user experience. My work involved translating product requirements and design concepts into clean, scalable, and reusable UI components. I collaborated closely with the product and backend teams to integrate real-time data, APIs, and AI-driven features into the frontend, ensuring smooth interactions and consistent performance across devices and browsers. Special attention was given to performance optimization, accessibility, and maintaining a modern, intuitive design system.",
    Technology: ["HTML", "CSS", "JavaScript", "Weather API"],

    features: [
      "Real-time weather data display with current temperature, humidity, and wind speed.",
      "City-based weather search with instant results.",
      "Clean and responsive UI built using pure HTML and CSS for all screen sizes.",
      "Dynamic weather icons and backgrounds that change based on weather conditions.",
      "JavaScript-powered API integration for live weather updates.",
      "Error handling for invalid city names and network issues.",
      "Fast loading and lightweight performance without any external frameworks."
    ],

    link: "https://forecastify-weather-website.vercel.app/",
    code:"https://github.com/Dhruvk2005/Forecastify-Weather-website-"
  },
  {
    Title: "To-do List App",
    Description: "A simple and interactive task management application with a clean user interface.",
    src: "./todo.png",
    overview:
      "The To-do List App is a frontend web application that helps users organize daily tasks efficiently. Users can add, complete, and delete tasks with real-time UI updates. Built using HTML, CSS, and JavaScript, the app focuses on simplicity, responsiveness, and smooth user interactions.",
    purpose:
      "The purpose of this project is to strengthen JavaScript fundamentals such as DOM manipulation, event handling, and dynamic UI updates while building a practical productivity tool.",
    Timeline: "1–2 days",
    Myrole:
      "I designed and developed the complete frontend of the application, implemented task logic using JavaScript, and ensured a responsive and user-friendly interface.",
    Technology: ["HTML", "CSS", "JavaScript"],
    features: [
      "Add, complete, and delete tasks dynamically",
      "Responsive and minimal UI design",
      "Real-time DOM updates without page reload",
      "Lightweight and fast performance",
      "User-friendly task interaction flow"
    ],
    link: "https://to-do-list-beta-seven-74.vercel.app/",
    code:"https://github.com/Dhruvk2005/TO-DO-List"
  },

  {
    Title: "Pariksh : Quiz Game",
    Description: "An interactive quiz game designed to test knowledge with instant feedback.",
    src: "./game.png",
    overview:
      "Pariksh is a browser-based quiz game built using HTML, CSS, and JavaScript. It presents users with multiple-choice questions, calculates scores in real time, and provides immediate feedback. The game logic and state handling are fully managed using JavaScript.",
    purpose:
      "The purpose of this project is to demonstrate logical thinking, conditional rendering, and state management through a fun and engaging quiz-based application.",
    Timeline: "1–2 days",
    Myrole:
      "I developed the complete quiz flow, handled game logic and scoring using JavaScript, and designed a responsive and engaging UI.",
    Technology: ["HTML", "CSS", "JavaScript"],
    features: [
      "Multiple-choice quiz questions",
      "Real-time score calculation",
      "Instant feedback on answers",
      "Clean and responsive UI",
      "Smooth game flow and interactions"
    ],
    link: "https://quiz-game-coral-one.vercel.app/",
    code:"https://github.com/Dhruvk2005/Quiz-Game"
  },

  {
    Title: "Penguin Fashion",
    Description: "A modern and responsive fashion landing page with a clean layout.",
    src: "./p5.png",
    overview:
      "Penguin Fashion is a frontend landing page project showcasing modern fashion products. Built using HTML and CSS, the project focuses on layout structure, visual hierarchy, and responsive design to deliver a professional brand-style interface.",
    purpose:
      "The purpose of this project is to practice responsive web design, layout structuring, and UI consistency using pure HTML and CSS.",
    Timeline: "1–2 days",
    Myrole:
      "I designed and implemented the entire layout, focused on responsive design principles, and ensured visual consistency across devices.",
    Technology: ["HTML", "CSS"],
    features: [
      "Responsive fashion landing page",
      "Modern and clean UI design",
      "Well-structured layout sections",
      "Mobile-first responsive approach",
      "Professional brand-style appearance"
    ],
    link: "Not deployed",
    code:"https://github.com/Dhruvk2005/XDream-Frontend-"
  },

  {
    Title: "UltraEdit (UI Clone)",
    Description: "A frontend UI clone inspired by the UltraEdit website.",
    src: "./ultra.png",
    overview:
      "UltraEdit UI Clone is a static frontend project that recreates the visual layout of the UltraEdit website using HTML and CSS. The project focuses on accurate layout replication, typography, spacing, and responsive behavior.",
    purpose:
      "The purpose of this project is to enhance CSS layout skills and attention to detail by recreating a real-world website interface.",
    Timeline: "1–2 days",
    Myrole:
      "I recreated the website layout using HTML and CSS, focusing on spacing, alignment, and responsive design accuracy.",
    Technology: ["HTML", "CSS"],
    features: [
      "Pixel-accurate UI replication",
      "Responsive layout structure",
      "Clean typography and spacing",
      "Flexbox-based layout design",
      "Professional website styling"
    ],
    link: "#",
    code:"https://github.com/Dhruvk2005/UltraEdit"
  },

  {
    Title: "Tic Tac Toe",
    Description: "A classic two-player Tic Tac Toe game with interactive gameplay.",
    src: "./tic.png",
    overview:
      "Tic Tac Toe is a browser-based game developed using HTML, CSS, and JavaScript. It allows two players to take turns, automatically detects winning combinations, and resets the game after completion.",
    purpose:
      "The purpose of this project is to demonstrate problem-solving skills, game logic implementation, and JavaScript fundamentals through an interactive game.",
    Timeline: "1–2 days",
    Myrole:
      "I implemented the game logic, win-condition checks, and interactive UI using JavaScript while keeping the design clean and responsive.",
    Technology: ["HTML", "CSS", "JavaScript"],
    features: [
      "Two-player interactive gameplay",
      "Automatic win and draw detection",
      "Game reset functionality",
      "Responsive game board design",
      "Smooth and intuitive user experience"
    ],
    link: "https://tic-tac-toe-game-1fgw.vercel.app/",
    code:"https://github.com/Dhruvk2005/TIC-TAC-TOE-Game"
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
        My Projects amd contributions
      </h2>

      <Carousel items={cards} />
    </div>
  );
}
