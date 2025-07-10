"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 mb-8">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Projects
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          Hey, I have a small YouTube channel where I post videos of my projects created till now!
        </p>
      </div>

      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
    <p className="font-bold md:text-4xl text-xl text-white">Movie Recommendation System</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Built a movie recommendation app with 65K+ titles & 2.4M+ reviews — even corrects your typos 🍿
    </p>
    <a href="https://www.youtube.com/watch?v=1HI8FbGLMtA" target="_blank" rel="noopener noreferrer">
      <button className="px-4 py-2 rounded-xl border border-neutral-600 text-black bg-white hover:bg-gray-100 transition duration-200">
        Watch a demo on YouTube
      </button>
    </a>
  </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
    <p className="font-bold md:text-4xl text-xl text-white">Vyoom - National Space Hackathon Winner</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Built a Cargo Stowage Management System to help astronauts organize, locate, and access critical tools in space missions. 🛰️🧑‍🚀
    </p>
    <a href="https://www.youtube.com/watch?v=-67WDPuTdCs" target="_blank" rel="noopener noreferrer">
      <button className="px-4 py-2 rounded-xl border border-neutral-600 text-black bg-white hover:bg-gray-100 transition duration-200">
        Watch a demo on YouTube
      </button>
    </a>
  </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
    <p className="font-bold md:text-4xl text-xl text-white">RespireTech</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      A first-of-its-kind system using computer vision to detect posture, dosage, and technique during asthma inhaler use.
    </p>
    <a href="https://www.youtube.com/watch?v=6TDvoS9Y4Os" target="_blank" rel="noopener noreferrer">
      <button className="px-4 py-2 rounded-xl border border-neutral-600 text-black bg-white hover:bg-gray-100 transition duration-200">
        Watch a demo on YouTube
      </button>
    </a>
  </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
    <p className="font-bold md:text-4xl text-xl text-white">Decentrix AI</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      DecentrixAI is your all-in-one Web3 powerhouse — combining AI-driven smart contract generation, multi-chain deployment, and seamless on-chain interaction into one intuitive platform. 🚀🤖
    </p>
    <a href="https://www.youtube.com/watch?v=s6ixOqQnutM" target="_blank" rel="noopener noreferrer">
      <button className="px-4 py-2 rounded-xl border border-neutral-600 text-black bg-white hover:bg-gray-100 transition duration-200">
        Watch a demo on YouTube
      </button>
    </a>
  </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "/thumbnails/movie-recommender.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "/thumbnails/vyoom.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:"/thumbnails/respiretech.jpg"  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/thumbnails/decentrix.jpg"
  },
];
