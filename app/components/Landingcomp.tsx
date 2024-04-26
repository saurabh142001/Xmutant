"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import { Collection } from "mongodb";

export default function page() {
  return (
    <div className="flex flex-col overflow-hidden">
        
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            <h1 className="text-4xl md:text-[3rem] py-7  font-bold font-serif text-black ">
            Discover the gateway to <br /><br></br>
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
               Digital Treasures
              </span>
            </h1>
          </>
        }
      />
    </div>
  );
}

export const users = [
  {
    "name": "Manu Arora",
    "collection": "Valyria",
    "image": "https://picsum.photos/id/10/300/300",
    "category": "Art"
  },
  {
    "name": "Sarah Singh",
    "collection": "Sarahsin",
    "image": "https://picsum.photos/id/11/300/300",
    "category": "Art"
  },
  {
    "name": "John Doe",
    "collection": "Songlist",
    "image": "https://picsum.photos/id/12/300/300",
    "category": "Art"
  },
  {
    "name": "Jane Smith",
    "collection": "Prosper",
    "image": "https://picsum.photos/id/13/300/300",
    "category": "Art"
  },
  {
    "name": "Robert Johnson",
    "collection": "Tiasco",
    "image": "https://picsum.photos/id/14/300/300",
    "category": "Art"
  },
  {
    "name": "Emily Davis",
    "collection": " DesignHub",
    "image": "https://picsum.photos/id/15/300/300",
    "category": "Art"
  },
  {
    "name": "Michael Miller",
    "collection": "FutureTech",
    "image": "https://picsum.photos/id/16/300/300",
    "category": "Art"
  },
  {
    "name": "Sarah Brown",
    "collection": "GoldenShutter",
    "image": "https://picsum.photos/id/17/300/300",
    "category": "Photography"
  },
  {
    "name": "James Wilson",
    "collection": "Arsito",
    "image": "https://picsum.photos/id/18/300/300",
    "category": "Art"
  },
  {
    "name": "Patricia Moore",
    "collection": "CryptoCharms",
    "image": "https://picsum.photos/id/19/300/300",
    "category": "Collectible"
  },
  {
    "name": "Richard Taylor",
    "collection": "PixelPursuit",
    "image": "https://picsum.photos/id/20/300/300",
    "category": "Collectible"
  },
  {
    "name": "Linda Anderson",
    "collection": "CodeCanvas",
    "image": "https://picsum.photos/id/21/300/300",
    "category": "Collectible"
  },
  {
    "name": "William Thomas",
    "collection": "NeonNostalgia",
    "image": "https://picsum.photos/id/22/300/300",
    "category": "Art"
  },
  {
    "name": "Elizabeth Jackson",
    "collection": "Dreamscape",
    "image": "https://picsum.photos/id/23/300/300",
    "category": "Art"
  },
  {
    "name": "David White",
    "collection": "BinaryBounty",
    "image": "https://picsum.photos/id/24/300/300",
    "category": "Collectible"
  },
  {
    "name": "Jennifer Harris",
    "collection": "NetNova",
    "image": "https://picsum.photos/id/25/300/300",
    "category": "Collectible"
  },
  {
    "name": "Charles Clark",
    "collection": "PixelPortraits",
    "image": "https://picsum.photos/id/26/300/300",
    "category": "Photography"
  },
  {
    "name": "Susan Lewis",
    "collection": "SnapshotSpectra",
    "image": "https://picsum.photos/id/27/300/300",
    "category": "Photography"
  },
  {
    "name": "Joseph Young",
    "collection": "ArtisanAuras",
    "image": "https://picsum.photos/id/28/300/300",
    "category": "Art"
  },
  {
    "name": "Margaret Hall",
    "collection": "LuminousLandscapes",
    "image": "https://picsum.photos/id/29/300/300",
    "category": "Photography"
  }
]

