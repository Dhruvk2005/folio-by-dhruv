"use client";

import React from "react";
import { Carousel, Card } from "./apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full  bg-[linear-gradient(90deg,#0b0b0b_0%,#1a1a1a_20%,#0e0e0e_40%,#2a2a2a_55%,#0a0a0a_70%,#151515_85%,#050505_100%)] py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-[white] font-sans">
        My Projects
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>


      <div
        key="cognivue-ai-content"
        className="bg-black p-8 md:p-14 rounded-3xl mb-4 border border-white/10"
      >
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          Cognivue AI
        </h2>

        {/* SHORT TAGLINE */}
        <p className="text-neutral-400 text-center mt-3 max-w-3xl mx-auto">
          An AI-powered platform that analyzes raw data and delivers actionable
          insights in seconds.
        </p>

        {/* PROJECT IMAGE */}
        <div className="mt-10 flex justify-center">
          <img
            src="./p1.png"
            alt="Cognivue AI Dashboard"
            className="w-full md:w-4/5 h-auto object-contain rounded-xl"
          />
        </div>

        {/* INFO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">

          {/* OVERVIEW */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Overview</h3>
            <p className="text-neutral-400 leading-relaxed">
              Cognivue AI is a personal project focused on transforming complex and
              unstructured data into meaningful insights using artificial
              intelligence. The platform is designed for speed, clarity, and
              real-world usability.
            </p>
          </div>

          {/* PURPOSE */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Purpose</h3>
            <p className="text-neutral-400 leading-relaxed">
              The goal of this project was to build an AI-driven solution that reduces
              manual data analysis time and helps users make faster, data-backed
              decisions without technical expertise.
            </p>
          </div>

          {/* MY ROLE */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">My Role</h3>
            <p className="text-neutral-400 leading-relaxed">
              I designed and developed the entire application end-to-end, including
              UI/UX, frontend architecture, AI logic integration, and performance
              optimization.
            </p>
          </div>

          {/* TIMELINE */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Timeline</h3>
            <p className="text-neutral-400 leading-relaxed">
              Concept → Design → Development → Testing completed over a span of
              <span className="text-white font-medium"> 6–8 weeks</span>.
            </p>
          </div>

          {/* TECHNOLOGY */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Technologies Used
            </h3>
            <ul className="text-neutral-400 space-y-1 list-disc list-inside">
              <li>React & Next.js</li>
              <li>Tailwind CSS</li>
              <li>AI / ML APIs</li>
              <li>Node.js</li>
              <li>REST APIs</li>
            </ul>
          </div>

          {/* KEY FEATURES */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Key Features</h3>
            <ul className="text-neutral-400 space-y-1 list-disc list-inside">
              <li>Real-time AI data analysis</li>
              <li>Clean and intuitive dashboard</li>
              <li>Scalable architecture</li>
              <li>Fast response and optimized performance</li>
            </ul>
          </div>
        </div>
      </div>



    </>
  );
};

const data = [
  {
    category: "Cognivue AI",
    title: " ",
    src: "./p1.png",
    content: <DummyContent />,
  },
  {
    category: "CROOSE AI",
    title: "Enhance your productivity.",
    src: "./p2.png",
    content: <DummyContent />,
  },
  {
    category: "Ordiio",
    title: "Launching the new Apple Vision Pro.",
    src: "./p4.png",
    content: <DummyContent />,
  },

  {
    category: "Penguin Fashion",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "./p5.png",
    content: <DummyContent />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];
