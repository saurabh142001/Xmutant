"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/InfiniteMovingCards";

export default function Page() {
  return (<div className="bg-orange-100 py-4 pt-20 pb-20 font-serif font-bold text-center text-5xl  text-teal-80">
    Hottest Bids
    <div className="h-[20rem] px-8  py-4rounded-md flex flex-col antialiased bg-white dark: movingcards dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div></div>
  );
}

const testimonials = [
  {
    image: "https://i.seadn.io/s/raw/files/e27411bcf1b79a8f9a7db34527873aa6.gif?auto=format&dpr=1&w=400",
    description: "Cherry Skulls",
    name: "La Dolce Vita",
  },
  {
    image: "https://i.seadn.io/s/raw/files/ea5fa529f0b903e6761fa04bd84b55e4.gif?auto=format&dpr=1&w=400",
    description: "Dimen8ions",
    name: "Sebastian Markiewicz",
  },
  {
    image: "https://i.seadn.io/s/raw/files/f99c183d1e817779d25be48981feb3bb.gif?auto=format&dpr=1&w=400",
    description: "Dark Riders",
    name: "Raul Casilla",
  },
  {
    image: "https://i.seadn.io/s/raw/files/bb5996282c2fb3848ec8659efb4128d8.gif?auto=format&dpr=1&w=400",
    description: "Divine Gaze ",
    name: "Busra Ozin",
  },
  {
    image: "https://i.seadn.io/s/raw/files/b7b10e32e7aee7ce74749c20cdea70d9.gif?auto=format&dpr=1&w=400",
    description: "Faces of Eternity",
    name: "Raul Casilla",
  },
];

