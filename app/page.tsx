import Image from "next/image";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Landingcomp from './components/Landingcomp';
import Categories from "./components/Categories";
import Workflow from "./components/Workflow";
import Cardcomp from "./components/InfiniteCardComp";
export default function Home() {
  return (
    <div >
      <Navbar />
      
    <Landingcomp/>
    <Landing />
    <Cardcomp/>
    <Categories/>
    <Workflow/>
     
  
    </div>
   
  );
}
