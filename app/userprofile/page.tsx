"use client";import React, { useState, useEffect } from 'react';
import NFTCard from '../components/NFT_card';
import { FaFacebook, FaInstagram, FaTwitter, FaShare } from "react-icons/fa";
import { dummyData } from '../components/ui/dummydata';

const ProfilePage: React.FC = () => {
  const [userData, setUserData] = useState<any>({
    id: 1,
    coverImage: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg",
    profileImage: "https://img.freepik.com/free-photo/owl-bird-colorful-flowers-generative-ai_206725-745.jpg?size=626&ext=jpg&ga=GA1.1.871292554.1711705778&semt=sph",
    name: "Alice",
    walletAddress: "0x123456789kkmmoppko",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget libero sed libero efficitur suscipit. Nulla facilisi.",
    socialMedia: {
      instagram: "link",
      facebook: "link",
      twitter: "link",
      share: "link"
    }
  });

  const [activeTab, setActiveTab] = useState<'creations' | 'collections' | 'onSale' | 'ownedNFTs' | 'activity'>('creations');
  const [tabData, setTabData] = useState<any>({
    creations: [],
    collections: [],
    onSale: [],
    ownedNFTs: [], // Added new tab for owned NFTs
    activity: []
  });

  useEffect(() => {
    setTabData(dummyData);
  }, []);

  const disconnectWallet = () => {
    console.log("Wallet disconnected.");
  };

  const addWallet = () => {
    console.log("Wallet added.");
  };

  const editProfile = () => {
    console.log("Edit profile clicked.");
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="w-full h-1/2 relative text-center">
        <div className="w-100 h-60 relative">
          <img src={userData.coverImage} alt="Cover" className="w-full h-full object-cover" />
          <div className="absolute top-60 left-1/2 transform -translate-x-1/2">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white-rounded -mt-16">
              <img src={userData.profileImage} alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        
        <div className="border border-gray-100 rounded-lg p-12 max-w-md mx-auto pt-12 m-8">
          <div className="pt-8">
            <h2 className="text-3xl text-center font-bold">{userData.name}</h2>
          </div>
          <div className='flex'>
            <div className="border border-gray-900 rounded-xl p-2  m-2 ">
              <p className="text-lg">Wallet Address: {userData.walletAddress}</p>
              <button onClick={disconnectWallet} className="m-2 inline-flex items-center h-18  bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Disconnect 
              </button>
              <button onClick={addWallet} className="m-4 inline-flex items-center bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 m-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
                add wallet
              </button>
            </div>
          </div>
          <div className="border border-gray-900  rounded-xl p-4 mt-4">
            <p className="text-lg">{userData.description}</p>
          </div>
          <div className="flex justify-center mt-4">
            {userData.socialMedia.instagram && (
              <div className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full mr-4">
                <a href={userData.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
              </div>
            )}
            {userData.socialMedia.facebook && (
              <div className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full mr-4">
                <a href={userData.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                  <FaInstagram/>
                </a>
              </div>
            )}
            {userData.socialMedia.twitter && (
              <div className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full mr-4">
                <a href={userData.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter/>
                </a>
              </div>
            )}
            {userData.socialMedia.share && (
              <div className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full mr-4">
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer">
                  <FaShare/>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='p-8 m-4 '>
        <div className="md:w-100  md:mt-0">
          <div className="flex justify-center">
            <button
              className={`mr-4 px-4 py-2 ${activeTab === 'creations' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => setActiveTab('creations')}
            >
              Creations
            </button>
            <button
              className={`mr-4 px-4 py-2 ${activeTab === 'collections' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => setActiveTab('collections')}
            >
              Collections
            </button>
            <button
              className={`mr-4 px-4 py-2 ${activeTab === 'onSale' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => setActiveTab('onSale')}
            >
              On Sale
            </button>
            <button
              className={`mr-4 px-4 py-2 ${activeTab === 'ownedNFTs' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => setActiveTab('ownedNFTs')}
              >
                Owned NFTs
              </button>
              <button
                className={`px-4 py-2 ${activeTab === 'activity' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setActiveTab('activity')}
              >
                Activity
              </button>
            </div>
            {activeTab !== 'activity' && (
              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4">
                  {activeTab === 'creations'
                    ? 'Creations'
                    : activeTab === 'collections'
                    ? 'Collections'
                    : activeTab === 'onSale'
                    ? 'On Sale'
                    : 'Owned NFTs'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {tabData[activeTab].length > 0 ? (
                    tabData[activeTab].map((item: any) => (
                      <NFTCard key={item.id} data={item} />
                    ))
                  ) : (
                    <p>No {activeTab === 'creations'
                        ? 'creations'
                        : activeTab === 'collections'
                        ? 'collections'
                        : activeTab === 'onSale'
                        ? 'items on sale'
                        : 'owned NFTs'} found.</p>
                  )}
                </div>
              </div>
            )}
            {activeTab === 'activity' && (
              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4">Activity</h3>
                {tabData.activity.length > 0 ? (
                  tabData.activity.map((activityItem: any) => (
                    <div key={activityItem.id}>
                      <p>{activityItem}</p>
                    </div>
                  ))
                ) : (
                  <p>No activity found.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default ProfilePage;
  
