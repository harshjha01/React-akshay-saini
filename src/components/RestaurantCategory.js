import { useState } from "react";
import Itemlist from "./Itemlist";

const RestaurantCategory = ({ data, settoggele, showitems }) => {
  //   console.log(data);
  const handletoggle = () => {
    settoggele();
  };
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-200 rounded-lg shadow-lg p-4 ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handletoggle}
      >
        <span className="font-bold text-lg flex">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {showitems && <Itemlist items={data.itemCards} />}
    </div>
    //   {/* <div>

    //     <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
    //       <div
    //         className="flex justify-between cursor-pointer"
    //         onClick={handleClick}
    //       >
    //         <span className="font-bold text-lg">
    //           {data.title} ({data.itemCards.length})
    //         </span>
    //         <span>🔽</span>
    //       </div>

    //       {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
    //     </div>
    //   </div> */}
  );
};
export default RestaurantCategory;
