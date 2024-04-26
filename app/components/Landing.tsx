
import Styledbutton from "./Styledbutton"
import React from 'react';
import GridBox from "./ui/Grid_nft";


const LandingPage: React.FC = () => {
  return (
    <div className="items-center justify-center min-h-screen text-gray-200 landing">
    <div>
      <h1 className="text-6xl  text-center pt-16 font-serif font-bold  mb-6">Trending Collections</h1>
      <GridBox /> 
    </div>
  </div>
  

  );
};

export default LandingPage;
