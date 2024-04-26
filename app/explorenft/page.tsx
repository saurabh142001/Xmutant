
"use client";
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Tabs from '../components/Tabs';
import NFTCard from '../components/NFT_card';
import { debounce } from 'lodash';

const Explore: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'art' | 'photography' | 'collectibles'>('all');
  const [sortedAsc, setSortedAsc] = useState<boolean>(true);
  const [filteredNFTs, setFilteredNFTs] = useState<any[]>([]);

  const nfts = [
    { id: 1, image: 'https://media.istockphoto.com/id/490506050/photo/living-painting-young-woman-completely-covered-with-thick-paint.jpg?s=1024x1024&w=is&k=20&c=Xcs1_tRpcxHDEF-t4ZawbgC6aOdHmDJ6CWOdFJfJ5wo=', author: 'John Doe', price: '1.23 ETH', category: 'art', ownerProfilePic: 'https://cdn-icons-png.flaticon.com/128/2202/2202112.png' },
    { id: 2, image: 'https://media.istockphoto.com/id/181080008/photo/close-up-photo-of-beautiful-woman-with-colorful-painted-face.jpg?s=612x612&w=0&k=20&c=GyJDE_2WabHyVTnjJR20arANAIwIVlHf6b0JtxJAKho=', author: 'Jane Smith', price: '2.45 ETH', category: 'photography', ownerProfilePic: 'https://cdn-icons-png.flaticon.com/128/6997/6997662.png' },
    { id: 3, image: 'https://cdn.pixabay.com/photo/2015/05/27/15/49/monkey-786858_1280.png', author: 'Alice Johnson', price: '3.67 ETH', category: 'collectibles', ownerProfilePic: 'https://cdn-icons-png.flaticon.com/128/2202/2202112.png' },
    { id: 4, image: 'https://cdn.pixabay.com/photo/2022/10/11/06/35/alien-7513483_1280.jpg', author: 'Bob Williams', price: '4.89 ETH', category: 'art', ownerProfilePic: 'https://cdn-icons-png.flaticon.com/128/6997/6997662.png' },
    { id: 5, image: 'https://cdn.pixabay.com/photo/2019/04/06/06/44/astronaut-4106766_1280.jpg', author: 'Emma Davis', price: '5.67 ETH', category: 'photography', ownerProfilePic: 'https://cdn-icons-png.flaticon.com/128/6997/6997662.png' },
    { id: 6, image: 'https://cdn.pixabay.com/photo/2024/02/21/15/04/ai-generated-8587880_1280.jpg', author: 'Michael Brown', price: '7.89 ETH', category: 'collectibles', ownerProfilePic: 'https://cdn-icons-png.flaticon.com/128/6997/6997662.png' },
    { id: 7, image: 'https://v5.airtableusercontent.com/v3/u/27/27/1711029600000/exo7VxsEmjQxc3uCY8weLQ/xHB8K2D1HNlnow6BzjTm6PkSW7cHflBB7w-RAtt5lZWS-gSKDMzO8N0rfV_MUMo5aLi2Vx89eLWC0nKtOxjmzgfZEH80FH34w1EEtje7NhWka76fboyWDXzajp-iAmxN5kJk5QUqaUs-tewmA3QLTg/9fLfQcZUs74bhSRTnBkJZPUtCz6AUEtcLobrdvS4u78', author: 'Sophia Wilson', price: '8.91 ETH', category: 'art', ownerProfilePic: 'https://cdn-icons-png.flaticon.com/128/6997/6997662.png' },
    { id: 8, image: 'https://v5.airtableusercontent.com/v3/u/27/27/1711029600000/gMQ7kpJRnfgIlPGNIDi5sg/EopcsH61uvqjJTnFkRMakEzh3M2Z5vuVaZsDbt6NB5nlAZRu2VNdrit5SfocaQLTBbgqLViO4gnk_iJJkQzJuZD_LnsmANEPsLxSeMNaYT8rkG5RH0y-DRiIlpkf9UBGInlJrSjz-6DsDX2-LHtwNQ/b5ZT66ipW9w7OjI4DtR8olfOy0yhY4ZyMfi0BCi6efo', author: 'William Lee', price: '9.01 ETH', category: 'photography', ownerProfilePic: 'https://cdn-icons-png.flaticon.com/128/2202/2202112.png' },
    { id: 9, image: 'https://v5.airtableusercontent.com/v3/u/27/27/1711029600000/JYXJLTBZXfqrMdvU4pFMRg/5iJ-icqmOTXonkN48Nugp5HpPyaHsCGUheTGuFCNch7dQzBdrZoH3kH3SPpiYkgbbSjAAPijIPDwv-cUAx9nz8X2jynk2yo7KkB4nxc7IRawv39c1XcmPAXUGG_RJhtN8YLsVuY6UKuwcugbwKp0Ig/mBrxfvac43ncQJPkiIoN8m2r3O7mdTkFDsuGhx3G_ac', author: 'Olivia Taylor', price: '10.12 ETH', category: 'collectibles', ownerProfilePic: 'https://cdn-icons-png.flaticon.com/128/2202/2202112.png' },
    { id: 10, image: 'https://media.istockphoto.com/id/490506050/photo/living-painting-young-woman-completely-covered-with-thick-paint.jpg?s=1024x1024&w=is&k=20&c=Xcs1_tRpcxHDEF-t4ZawbgC6aOdHmDJ6CWOdFJfJ5wo=', author: 'David Brown', price: '11.23 ETH', category: 'art', ownerProfilePic: 'https://cdn-icons-png.flaticon.com/128/6997/6997662.png '},
    { id: 11, image: 'https://media.istockphoto.com/id/181080008/photo/close-up-photo-of-beautiful-woman-with-colorful-painted-face.jpg?s=612x612&w=0&k=20&c=GyJDE_2WabHyVTnjJR20arANAIwIVlHf6b0JtxJAKho=', author: 'Sarah Johnson', price: '11.23 ETH', category: 'art', ownerProfilePic: 'https://cdn-icons-png.flaticon.com/128/6997/6997662.png' },
    { id: 12, image: 'https://cdn.pixabay.com/photo/2022/10/11/06/35/alien-7513483_1280.jpg', author: 'Bob Williams', price: '4.89 ETH', category: 'art', ownerProfilePic: 'https://cdn-icons-png.flaticon.com/128/6997/6997662.png' },
  ];
  

  // Function to sort NFTs by price with debounce
  const sortNFTs = debounce((ascending: boolean, data: any[]) => {
    const sortedNFTs = [...data].sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);
      return ascending ? priceA - priceB : priceB - priceA;
    });
    setFilteredNFTs(sortedNFTs);
  }, 200); // Adjust debounce timing for smoother transition

  useEffect(() => {
    const filtered = activeTab === 'all' ? nfts : nfts.filter(nft => nft.category === activeTab);
    sortNFTs(sortedAsc, filtered);
  }, [activeTab, nfts, sortedAsc]);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mt-8">Explore NFT</h1>
        <div className="flex justify-end my-4">
          <select
            className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
            value={sortedAsc ? 'asc' : 'desc'}
            onChange={(e) => setSortedAsc(e.target.value === 'asc')}
          >
            <option value="asc">Sort Low to High</option>
            <option value="desc">Sort High to Low</option>
          </select>
        </div>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {filteredNFTs.map(nft => (
            <NFTCard
              key={nft.id}
              image={nft.image}
              author={nft.author}
              price={nft.price}
              ownerProfilePic={nft.ownerProfilePic}
              category= {nft.category} // Pass owner's profile picture URL
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
