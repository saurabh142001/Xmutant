"use client";

import React, { useState } from 'react';

const CreateNFT = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [supply, setSupply] = useState('');
  const [selectedCollection, setSelectedCollection] = useState('');
  const [selectedBlockchain, setSelectedBlockchain] = useState('');

  const handleSupplyChange = (e) => {
    const newValue = e.target.value < 1 ? 1 : e.target.value;
    setSupply(newValue);
  };

  const handleCreateNFT = () => {
    console.log('Creating NFT...');
  };

  // Dummy data for collections and blockchains
  const dummyCollections = ['Collection 1', 'Collection 2', 'Collection 3'];
  const dummyBlockchains = ['Ethereum', 'Binance Smart Chain', 'Polygon'];

  return (
    <div className='maindiv text-center font-serif p-8'>
      <h2 className="text-xl font-semibold m-8 ">Create NFT</h2>
      <div className="flex flex-row h-screen">
        <div className="flex-1 p-8 text-center relative">
          <div className="border border-gray-900 border-2 border-dotted bg-white w-full h-80 rounded-xl p-4 flex justify-center items-center relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg><br></br>
            
            <p className='text-gray-400'> Image, audio, video, or 3D models.<br></br>Drag or choose the files to upload</p>
          </div>
        </div>

        <div className="flex-1 p-8">
          <div className='text-start text-gray-700 font-semibold'>Name</div>
          <input
            type="text"
            placeholder="Item Name"
            className="border border-gray-200 rounded-md p-2 mb-4 w-full transition-all duration-300 hover:border-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <div className='text-start text-gray-700 font-semibold'>Description</div>
          <textarea
            placeholder="Provide a detailed description of your item"
            className="border border-gray-200 rounded-md p-2 mb-4 w-full h-24 resize-none transition-all duration-300 hover:border-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
    
          <div className='text-start text-gray-700 font-semibold'>Supply</div>
          <input
            type="number"
            placeholder="Total supply of the item"
            className="border border-gray-200 rounded-md p-2 mb-4 w-full transition-all duration-300 hover:border-blue-500"
            value={supply}
            onChange={handleSupplyChange}
            min="1"
          />

          <div className='text-start text-gray-700 font-semibold'>Select Collection</div>
          <select
            className="border border-gray-200 rounded-md p-2 mb-4 w-full text-gray-400 transition-all duration-300 hover:border-blue-500"
            value={selectedCollection}
            onChange={(e) => setSelectedCollection(e.target.value)}
          >
            <option value="">Select Collection</option>
            {dummyCollections.map((collection, index) => (
              <option key={index} value={collection}>
                {collection}
              </option>
            ))}
          </select>

          <div className="flex items-center mb-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-900 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M11 2a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3H8a1 1 0 0 1 0-2h3V2z"
                  clipRule="evenodd"
                />
              </svg>
              Create New Collection
            </button>
          </div>

          <div className='text-start text-gray-700 font-semibold'>Select Blockchain</div>
          <select
            className="border border-gray-200 rounded-md p-2 mb-4 w-full  text-gray-400 transition-all duration-300 hover:border-blue-500"
            value={selectedBlockchain}
            onChange={(e) => setSelectedBlockchain(e.target.value)}
          >
            <option value="">Select Blockchain</option>
            {dummyBlockchains.map((blockchain, index) => (
              <option key={index} value={blockchain}>
                {blockchain}
              </option>
            ))}
          </select>

          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-900"
            onClick={handleCreateNFT}
          >
            Create NFT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNFT;
