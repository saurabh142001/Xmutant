// Tabs.tsx
import React from 'react';

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center space-x-4 mt-4">
      <button
        className={`px-4 py-2 rounded ${
          activeTab === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
        }`}
        onClick={() => setActiveTab('all')}
      >
        All NFT
      </button>
      <button
        className={`px-4 py-2 rounded ${
          activeTab === 'art' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
        }`}
        onClick={() => setActiveTab('art')}
      >
        Art
      </button>
      <button
        className={`px-4 py-2 rounded ${
          activeTab === 'photography' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
        }`}
        onClick={() => setActiveTab('photography')}
      >
        Photography
      </button>
      <button
        className={`px-4 py-2 rounded ${
          activeTab === 'collectibles' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
        }`}
        onClick={() => setActiveTab('collectibles')}
      >
        Collectibles
      </button>
    </div>
  );
};

export default Tabs;
