'use client';

import { PuffLoader } from "react-spinners";

const MainLoader = () => {
  return ( 
    <div
    className="
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <PuffLoader
        size={100}
        color="#e91e63"
      />
    </div>
   );
}
 
export default MainLoader;