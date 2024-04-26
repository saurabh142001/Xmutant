"use client";
import React from 'react';

interface NFTCardProps {
  image: string;
  author: string;
  total_NFT: string;
  ownerProfilePic: string;
  category: string; // Add category prop
}

const NFTCard: React.FC<NFTCardProps> = ({ image, author, total_NFT, ownerProfilePic, category }) => {
  return (
    <div className="nft-card-wrapper relative">
      <div className="nft-card border border-white border-2 shadow-2xl bg-white rounded-lg overflow-hidden relative">
        <img src= {image} alt="NFT" className="w-full h-44 object-cover" />
        <div className="absolute bottom-16 left-1  ml-2 mb-2">
          <img src={ownerProfilePic} alt="" className="w-12 h-12 border-xl border-2 border-white object-cover rounded-full" />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold">{author}</h3>
          <p className="text-gray-500">{total_NFT}</p>
        </div>
      </div>
      <div className='absolute top-2 right-2 rounded-full text-xs font-bold bg-white px-2 py-1'>{category}</div>
    </div>
  );
};

export default NFTCard;
