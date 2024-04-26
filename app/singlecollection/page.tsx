"use client";

import React, { useState, useEffect } from 'react';
import NFTCard from '../components/NFT_card'; // Assuming NFTCard is in the components directory
import Navbar from '../components/Navbar';
const CollectionPage: React.FC = () => {
  // Dummy collection data
  const [collectionData, setCollectionData] = useState<any>({
    name: " Collection",
    author: "John Doe",
    totalItemsMinted: 10,
    image: "https://via.placeholder.com/400x200",
    nfts: [
      {
        id: 1,
        image: "https://via.placeholder.com/200",
        author: "Alice",
        price: "$100",
        ownerProfilePic: "https://via.placeholder.com/50",
        category: "Art"
      },
      {
        id: 2,
        image: "https://via.placeholder.com/200",
        author: "Bob",
        price: "$150",
        ownerProfilePic: "https://via.placeholder.com/50",
        category: "Photography"
      },
      {
        id: 2,
        image: "https://via.placeholder.com/200",
        author: "Bob",
        price: "$150",
        ownerProfilePic: "https://via.placeholder.com/50",
        category: "Photography"
      },
      // Add more dummy NFTs if needed
    ]
  });

  const [details, setDetails] = useState<any>({
    contactAddress: "0x123456789",
    tokenStandard: "ERC-721",
    token: "MyToken",
    blockchain: "Ethereum"
  });

  const [activity, setActivity] = useState<any>([
    { id: 1, action: "Bought NFT from Alice", timestamp: "2024-03-28T10:00:00Z" },
    { id: 2, action: "Bought NFT from Bob", timestamp: "2024-03-27T15:30:00Z" },
  ]);

  const [activeTab, setActiveTab] = useState<'allNFT' | 'details' | 'activity'>('allNFT');

  useEffect(() => {
    const fetchData = async () => {
      // You can fetch collection data, details, and activity here from your backend
    };

    fetchData();
  }, []);

  return (
   <div >
    <Navbar />
      <div className="flex p-8 m-4">
      <img src={collectionData.image} alt="Collection" className="w-1/2 h-auto mr-8" />
      <div className="w-1/2">
        <h2 className="text-3xl font-bold mt-4">{collectionData.name}</h2>
        <p className="text-lg">Author: {collectionData.author}</p>
        <p className="text-lg">Total Items Minted: {collectionData.totalItemsMinted}</p>
        <div className="mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 mr-2">Place Bid</button>
          <button className="bg-green-500 text-white px-4 py-2">Purchase Collection</button>
        </div>
      </div>
    
        </div>

        <div className='p-8 m-4 '>
        <div className="md:w-100  md:mt-0">
          <div className="flex justify-center">
            <button
              className={`mr-4 px-4 py-2 text-center ${activeTab === 'allNFT' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => setActiveTab('allNFT')}
            >
              All NFTs
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
          {activeTab === 'allNFT' && (
            <div className="mt-8 text-center">
              <h3 className="text-2xl font-bold mb-4">All NFTs</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {collectionData.nfts.map((nft: any) => (
                  <NFTCard
                    key={nft.id}
                    image={nft.image}
                    author={nft.author}
                    price={nft.price}
                    ownerProfilePic={nft.ownerProfilePic}
                    category={nft.category}
                  />
                ))}
              </div>
            </div>
          )}
          {activeTab === 'details' && (
            <div className="mt-8 text-center">
            <h3 className="text-2xl font-bold mb-4"> Details</h3>
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

export default CollectionPage;
