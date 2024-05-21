"use client";
import { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";

export default function NFTTable() {
  const [users, setUsers] = useState([
    { id: 1, name: "User h", imgUrl: "img/nft-aggregator/item-1.jpg", rewards: 1000, walletAddress: "0x123456789..." },
    { id: 2, name: "User j", imgUrl: "img/nft-aggregator/item-2.jpg", rewards: 2000, walletAddress: "0x987654321..." },
    { id: 3, name: "User b", imgUrl: "img/nft-aggregator/item-3.jpg", rewards: 1500, walletAddress: "0xabcdef123..." },
    { id: 4, name: "User d", imgUrl: "img/nft-aggregator/item-4.jpg", rewards: 1800, walletAddress: "0xfedcba321..." },
    { id: 5, name: "User p", imgUrl: "img/nft-aggregator/item-5.jpg", rewards: 2200, walletAddress: "0x13579ace..." },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filterType, setFilterType] = useState('all');

  // Sort users based on rewards in ascending order
  useEffect(() => {
    const sortedUsers = [...users].sort((a,b) =>  b.rewards- a.rewards );
    setUsers(sortedUsers);
    setFilteredUsers(sortedUsers); // Initialize filtered users with sorted users
  }, []);

  // Filter users based on search term and filter type
  useEffect(() => {
    let filtered = users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    switch (filterType) {
      case '30d':
        // Logic to filter users based on rewards earned in the last 30 days
        break;
      case '7d':
        // Logic to filter users based on rewards earned in the last 7 days
        break;
      case '24h':
        // Logic to filter users based on rewards earned in the last 24 hours
        break;
      default:
        // No additional filtering required for 'all' filter type
        break;
    }
    
    setFilteredUsers(filtered);
  }, [searchTerm, users, filterType]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  const gradientStyle = {
    background: 'linear-gradient(270deg, #ff7356, #ff59e2 25.52%, #52ddf6 50%, #eadf4e 76.04%, #ff7356)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'gradient-animation 6s linear infinite',
  };

  return (
    <div>
      <Navbar />
      <div className="m-8">
        <h1 className="font-display text-center text-5xl font-bold text-jacarta-700 dark:text-white lg:text-6xl xl:text-7xl bg-clip-text text-transparent" style={gradientStyle}>
          The 
          <span className="animate-gradient"> Leaderboard</span>
        </h1>
      </div>
      <div className="leaderboard-tables m-8 rounded-t-xl border border-gray-300 bg-white text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white">
        <div className="flex flex-col justify-between gap-4 rounded-xl border-b border-jacarta-100 bg-jacarta-50 p-4 dark:border-jacarta-600 dark:bg-jacarta-800 md:flex-row md:items-center md:gap-6">
          <div className="relative flex w-full flex-1">
            <form className="relative w-full md:w-2/3">
              <input
                type="search"
                className="h-10 w-full rounded-lg border border-jacarta-100 py-2 px-4 pl-10 text-jacarta-700 placeholder-jacarta-500 focus:ring-accent dark:border-transparent dark:bg-white/[.15] dark:text-white dark:placeholder-white"
                placeholder="Search collections"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <span className="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="h-4 w-4 fill-jacarta-500 dark:fill-white">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path>
                </svg>
              </span>
            </form>
          </div>
          <div className="flex flex-shrink-0 items-center text-xs font-medium text-jacarta-500 dark:text-jacarta-300 sm:text-sm">
            <div
              className={`flex h-10 w-full cursor-pointer items-center whitespace-nowrap border border-r-0 border-accent bg-accent p-3 text-white first:rounded-l-lg last:rounded-r-lg hover:border-transparent hover:bg-accent hover:text-white sm:px-4 sm:py-2 ${filterType === 'all' ? 'bg-violet-500' : ''}`}
              onClick={() => handleFilterChange('all')}
            >
              All Time
            </div>
            <div
              className={`flex h-10 w-full cursor-pointer items-center whitespace-nowrap border border-r-0 border-jacarta-100 bg-white p-3 first:rounded-l-lg last:rounded-r-lg hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 sm:px-4 sm:py-2 ${filterType === '30d' ? 'bg-violet-500' : ''}`}
              onClick={() => handleFilterChange('30d')}
            >
              30d
            </div>
            <div
              className={`flex h-10 w-full cursor-pointer items-center whitespace-nowrap border border-r-0 border-jacarta-100 bg-white p-3 first:rounded-l-lg last:rounded-r-lg hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 sm:px-4 sm:py-2 ${filterType === '7d' ? 'bg-violet-500' : ''}`}
              onClick={() => handleFilterChange('7d')}
            >
              7d
            </div>
            <div
              className={`flex h-10 w-full cursor-pointer items-center whitespace-nowrap border border-jacarta-100 bg-white p-3 first:rounded-l-lg last:rounded-r-lg hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 sm:px-4 sm:py-2 ${filterType === '24h' ? 'bg-violet-500' : ''}`}
              onClick={() => handleFilterChange('24h')}
            >
              24h
            </div>
          </div>
        </div>
        <div className="flex items-center bg-gray-100 border border-gray-300 dark:border-gray-600 py-5 px-4 text-gray-700 dark:bg-gray-800 dark:text-gray-100">
          <div className="w-1/12 text-left">Rank</div>
          <div className="w-5/12 text-left">User</div>
          <div className="w-6/12 flex items-center justify-end text-blue-500">Rewards</div>
        </div>
        {filteredUsers.map((user, index) => (
          <div key={user.id} className="flex  border-t border-gray-300 py-2 px-4 transition-shadow hover:shadow-lg dark:border-gray-600dark:border-gray-600 dark:bg-gray-900">
            <div className="w-1/12 text-left">{index + 1}</div>
            <div className="flex w-5/12 items-center">
              <figure className="relative mr-5 w-8 shrink-0 self-start lg:w-10">
                <img src={user.imgUrl} alt={user.name || user.walletAddress} className="rounded-2xl" loading="lazy" />
                <div className="absolute -right-3 top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green-500 dark:border-gray-600" title="Verified Collection">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="h-3.5 w-3.5 fill-white">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
                  </svg>
                </div>
              </figure>
              <span className="text-sm text-gray-700 dark:text-white">{user.name || user.walletAddress}</span>
            </div>
            <div className="w-6/12 flex items-center justify-end">
              <span>{user.rewards}</span>
              <span title="ETH">
                <img src="/img/chains/eth-icon.svg" alt="ETH" className="ml-0.5 h-4 w-4" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

