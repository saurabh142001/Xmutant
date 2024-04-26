"use client";
import React, { useState, useEffect } from 'react';
import NFTCard from '../components/NFT_card'; // Assuming NFTCard is in the components directory
import Navbar from '../components/Navbar';

const NFTPage: React.FC = () => {
  // Dummy NFT data
  const [nftData, setNFTData] = useState<any>({
    id: 1,
    image: "https://via.placeholder.com/400x200 ",
    author: "Alice",
    currentPrice: "$100",
    highestBid: "$120",
    ownerProfilePic: "https://via.placeholder.com/50",
    category: "Art",
    features: "Feature 1, Feature 2, Feature 3" // Add your specific features here
  });

  const [details, setDetails] = useState<any>({
    contactAddress: "0x123456789",
    tokenStandard: "ERC-721",
    token: "MyToken",
    blockchain: "Ethereum"
  });

  const [activity, setActivity] = useState<any>([
    { id: 1, action: "Bought NFT from Alice", timestamp: "2024-03-28T10:00:00Z" },
    { id: 2, action: "Placed a bid on NFT", timestamp: "2024-03-27T15:30:00Z" },
  ]);

  const [activeTab, setActiveTab] = useState<'features' | 'details' | 'activity'>('features');

  return (
    <div>
      <Navbar />
      <div className="flex p-8 m-4">
        <img src={nftData.image} alt="NFT" className="w-1/2 h-auto mr-8" />
        <div className="w-1/2">
          <h2 className="text-3xl font-bold mt-4">NFT Title</h2>
          <p className="text-lg">Author: {nftData.author}</p>
          <p className="text-lg">Current Price: {nftData.currentPrice}</p>
          <p className="text-lg">Highest Bid: {nftData.highestBid}</p>
          <div className="mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 mr-2">Place Bid</button>
            <button className="bg-green-500 text-white px-4 py-2">Purchase NFT</button>
          </div>
        </div>
      </div>

      <div className='p-8 m-4 '>
        <div className="md:w-100  md:mt-0">
          <div className="flex justify-center">
            <button
              className={`mr-4 px-4 py-2 ${activeTab === 'features' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => setActiveTab('features')}
            >
              Features
            </button>
            <button
              className={`mr-4 px-4 py-2 ${activeTab === 'details' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => setActiveTab('details')}
            >
              Details
            </button>
            <button
              className={`px-4 py-2 ${activeTab === 'activity' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => setActiveTab('activity')}
            >
              Activity
            </button>
          </div>
          {activeTab === 'features' && (
            <div className="mt-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Features</h3>
              <p>{nftData.features}</p>
            </div>
          )}
          {activeTab === 'details' && (
            <div className="mt-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Details</h3>
              <p>Contact Address: {details.contactAddress}</p>
              <p>Token Standard: {details.tokenStandard}</p>
              <p>Token: {details.token}</p>
              <p>Blockchain: {details.blockchain}</p>
            </div>
          )}
          {activeTab === 'activity' && (
            <div className="mt-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Activity</h3>
              {activity.map((item: any) => (
                <div key={item.id}>
                  <p>{item.action}</p>
                  <p>{item.timestamp}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NFTPage;
