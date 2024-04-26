// components/NFTTile.tsx

import React from 'react';

interface NFTTileProps {
  image: string;
  name: string;
  volumeChange: number;
  floorPrice: number;
}

const NFTTile: React.FC<NFTTileProps> = ({ image, name, volumeChange, floorPrice }) => {
  return (<div className='grid-row '>
    <div className="nft-tile rounded-lg shadow-md p-4 flex flex-col">
      <img src={image} alt={name} className="w-full h-auto rounded-lg mb-4 flex-row" /></div>
      <div className="tile-content flex flex-col">
        <div>
        <div className="attribute mb-2">
          <h3 className="text-lg font-semibold">{name}</h3>
        </div></div>
        <div className="attribute mb-2">
          <p className={`text-sm ${volumeChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            Volume Change: {volumeChange}%
          </p>
        </div>
        <div className="attribute">
          <p className="text-sm">Floor Price: {floorPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default NFTTile;
