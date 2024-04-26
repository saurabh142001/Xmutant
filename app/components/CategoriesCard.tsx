// File: ItemCard.tsx

import React from "react";

interface Item {
  image: string;
  name: string;
  price: number;
  ranking: number;
}

export const ItemCard: React.FC<Item> = ({ image, name, price, ranking }) => {
  return (
    <div className="relative p-.5">
      <div className="bg-white rounded-md border border-gray-600 p-2">
        <div className="absolute top-1 left-2 h-12 w-12 bg-yellow-400 text-white rounded-full flex justify-center  text-normal items-center">
          {ranking}
        </div>
        <div className="flex justify-between items-center">
          <img src={image} alt={name} className="h-24 w-24 object-fit mb-4 rounded-full" />
          <div className="text-teal-900 font-bold mb-2">{name}</div>    
        </div>
        <div className="text-left text-sm font-bold">{`Price: $${price}`}</div>
      </div>
    </div>
  );
};
