

import { cn } from "@/app/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "../Grid_nft_Comp";


const items = [
  {
    title: "Meta Legends ",
    description: "https://opensea.io/collection/meta-legends",
    image: "https://i.seadn.io/s/primary-drops/0xdc871f58c295fa7087efcfbe85cf516ccc41a381/30969465:about:preview_media:d4120d40-1557-41ce-a320-ffac38ac6cff.png?auto=format&dpr=1&w=3840",
   
  },
  {
    title: "Grufter",
    description: "Dive into the transformative power of technology.",
    image: "https://i.seadn.io/s/raw/files/364e9e162319f62e87f71a14906130dd.png?auto=format&dpr=1&w=750",
    
  },
  {
    title: "Kuroshio",
    description: "Discover the beauty of thoughtful and functional design.",
    image: "https://i.seadn.io/s/raw/files/82ffb15b0ee0759362b31cc848041f24.png?auto=format&dpr=1&w=750",
 
  },
  {
    title: "Savannah Stories",
    description: "Understand the impact of effective communication in our lives.",
    image: "https://i.seadn.io/s/raw/files/5c8863d75ca8a4fff9ab2c37857f78d4.gif?auto=format&dpr=1&w=400",

    
  },
  {
    title: "Perils",
    description: "Join the quest for understanding and enlightenment.",
    image: "https://raw.seadn.io/files/f588468bb479bde3c0ea6fcbf0b0e32b.png",
  
  },
  {
    title: "waiting for a train",
    description: "Experience the thrill of bringing ideas to life.",
    image: "https://i.seadn.io/s/raw/files/75b70da1811dd391ec8e35e0600a1fce.gif?auto=format&dpr=1&w=400",
    
  },
  {
    title: "Pieces of a Day",
    description: "Embark on exciting journeys and thrilling discoveries.",
    image: "https://i.seadn.io/s/raw/files/18e4ca0597771a2e8e9be23252c3df92.gif?auto=format&dpr=1&w=400",

  }
];



export default function GridBox() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          image={item.image}
          
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
