import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useHoteldata from "../utils/useHoteldata";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const ResInfo = () => {
  const { resid } = useParams();
  //   console.log(resid);

  const hoteldata = useHoteldata(resid);
  const [toggele, settoggle] = useState(0);

  if (hoteldata === null) {
    return <Shimmer />;
  }
  const { name, costForTwoMessage, cuisines } =
    hoteldata?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    hoteldata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card;

  const actualobj =
    hoteldata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (e) =>
        e.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(actualobj);
  {
    // <div className="">
    //   {/* <h1>{name}</h1>
    //   <h4>{costForTwoMessage}</h4>
    //   <h2>Menu</h2>
    //   {itemCards.map((item) => (
    //     <div key={item.card.info.id} className="menu-card">
    //       <h3 className="menu-name">{item.card.info.name}</h3>
    //       <h4 className="menu-price">
    //         ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
    //       </h4>
    //     </div>
    //   ))} */}
    //   <div className="flex justify-center">
    //     <div className="">
    //       <h1 className="text-lg font-bold m-2">{name}</h1>
    //       <h3>{costForTwoMessage}</h3>
    //     </div>
    //   </div>
    //   <div className="flex justify-center ">
    //     <div className="">
    //       {actualobj.map((menu) => (
    //         <div>{menu.card.card.title}</div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  }
  return (
    <div className=" text-center">
      <h1 className="font-bold mt-5 mb-2 text-2xl">{name}</h1>
      <p className="font-bold ">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {actualobj.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category.card.card}
          showitems={toggele === index ? true : false}
          settoggele={() => settoggle(index)}
        />
      ))}
    </div>
  );
};
export default ResInfo;
