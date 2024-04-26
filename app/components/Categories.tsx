// File: ItemGridPage.tsx

import React from "react";
import { ItemCard } from "../components/CategoriesCard";

const dummyItems = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
 
    name: "Dummy Item 1",
    price: 19.99,
    ranking: 1,
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",

    name: "Dummy Item 2",
    price: 29.99,
    ranking: 2,
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150",
  
    name: "Dummy Item 3",
    price: 24.99,
    ranking: 3,
  },
  {
    id: 4,
    image: "https://via.placeholder.com/150",
    
    name: "Dummy Item 3",
    price: 24.99,
    ranking: 4,
  },

  {
    id: 5,
    image: "https://via.placeholder.com/150",
 
    name: "Dummy Item 1",
    price: 19.99,
    ranking: 5,
  },
  {
    id: 6,
    image: "https://via.placeholder.com/150",
  
    name: "Dummy Item 2",
    price: 29.99,
    ranking: 6,
  },
  {
    id: 7,
    image: "https://via.placeholder.com/150",
  
    name: "Dummy Item 3",
    price: 24.99,
    ranking: 7,
  },
  {
    id: 8,
    image: "https://via.placeholder.com/150",
    
    name: "Dummy Item 3",
    price: 24.99,
    ranking:8,
  },
 
];

const ItemGridPage: React.FC = () => {
  return (
    <div className="itemgrid py-4 pt-20 pb-20 font-serif font-bold text-center text-2xl  text-teal-80 m-8">
      <h1 className="mb-8 text-orange-100 text-4xl ">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {dummyItems.map((item) => (
          <ItemCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ItemGridPage;
