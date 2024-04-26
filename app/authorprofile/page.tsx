"use client";"use client";
import { useState, useEffect } from 'react';
import NFTCard from '../components/NFT_card'; // Assuming NFTCard is in the components directory
import Navbar from '../components/Navbar';
import { FaFacebook, FaInstagram, FaTwitter, FaShare } from "react-icons/fa";


const ProfilePage: React.FC = () => {
  const [authorData, setAuthorData] = useState<any>({
    id: 1,
    coverImage: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg",
    profileImage: "https://img.freepik.com/free-photo/owl-bird-colorful-flowers-generative-ai_206725-745.jpg?size=626&ext=jpg&ga=GA1.1.871292554.1711705778&semt=sph",
    name: "Alice",
    contractAddress: "0x123456789kkmmoppko",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget libero sed libero efficitur suscipit. Nulla facilisi.",
    socialMedia: {
      instagram: "link",
      facebook: "link",
      twitter: "link",
      share: "link"
    }
  });

  const [activeTab, setActiveTab] = useState<'creations' | 'collections' | 'onSale'>('creations');
  const [tabData, setTabData] = useState<any>({
    creations: [],
    collections: [],
    onSale: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const creationsDataResponse = await fetch("api/creations");
        if (!creationsDataResponse.ok) {
          throw new Error('Failed to fetch creations data');
        }
        const creationsData = await creationsDataResponse.json();

        const collectionsDataResponse = await fetch("api/collections");
        if (!collectionsDataResponse.ok) {
          throw new Error('Failed to fetch collections data');
        }
        const collectionsData = await collectionsDataResponse.json();

        const onSaleDataResponse = await fetch("api/onSale");
        if (!onSaleDataResponse.ok) {
          throw new Error('Failed to fetch on sale data');
        }
        const onSaleData = await onSaleDataResponse.json();

        setTabData({
          creations: creationsData,
          collections: collectionsData,
          onSale: onSaleData
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="w-full h-1/2 relative text-center">
        <div className="w-100 h-60 relative">
          <img src={authorData.coverImage} alt="Cover" className="w-full h-full object-cover" />
          <div className="absolute top-60 left-1/2 transform -translate-x-1/2">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white-rounded -mt-16">
              <img src={authorData.profileImage} alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <div className="border border-gray-100 rounded-lg p-12 max-w-md mx-auto ">
          <div className="pt-12">
            <h2 className="text-3xl text-center font-bold">{authorData.name}</h2>
          </div>
          <div className="border border-gray-900 rounded-xl p-2 mt-4">
            <p className="text-lg">Contract Address: {authorData.contractAddress}</p>
          </div>
          <div className="border border-gray-900  rounded-xl p-4 mt-4">
            <p className="text-lg">{authorData.description}</p>
          </div>

          {/* Social media icons wrapped in small circular divs */}
          <div className="flex justify-center mt-4">
            {authorData.socialMedia.instagram && (
              <div className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full mr-4">
                <a href={authorData.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                <FaFacebook />
                </a>
              </div>
            )}
            {authorData.socialMedia.facebook && (
              <div className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full mr-4">
                <a href={authorData.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
               <FaInstagram/>
                </a>
              </div>
            )}
            {authorData.socialMedia.twitter && (
              <div className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full mr-4">
                <a href={authorData.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter/>
                </a>
              </div>
            )}
            {/* Share profile icon */}
            {authorData.socialMedia.share && (
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
              className={`px-4 py-2 ${activeTab === 'onSale' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => setActiveTab('onSale')}
            >
              On Sale
            </button>
          </div>
          {/* Render content based on active tab */}
          {activeTab === 'creations' && (
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">Creations</h3>
                            {/* Render creations data */}
                            {tabData.creations.length > 0 ? (
                tabData.creations.map((creation: any) => (
                  <NFTCard key={creation.id} data={creation} />
                ))
              ) : (
                <p>No creations found.</p>
              )}
            </div>
          )}
          {activeTab === 'collections' && (
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">Collections</h3>
              {/* Render collections data */}
              {tabData.collections.length > 0 ? (
                tabData.collections.map((collection: any) => (
                  <NFTCard key={collection.id} data={collection} />
                ))
              ) : (
                <p>No collections found.</p>
              )}
            </div>
          )}
          {activeTab === 'onSale' && (
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">On Sale</h3>
              {/* Render on sale data */}
              {tabData.onSale.length > 0 ? (
                tabData.onSale.map((item: any) => (
                  <NFTCard key={item.id} data={item} />
                ))
              ) : (
                <p>No items on sale right now.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

             
