import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useHoteldata from "../utils/useHoteldata";

const ResInfo = () => {
  const { resid } = useParams();
  //   console.log(resid);

  const hoteldata = useHoteldata(resid);
  if (hoteldata === null) {
    return <Shimmer />;
  }
  const { name, costForTwoMessage } =
    hoteldata?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    hoteldata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card;
  //   console.log(itemCards);

  return (
    <div className="resinfo">
      <h1>{name}</h1>
      <h4>{costForTwoMessage}</h4>
      <h2>Menu</h2>
      {itemCards.map((item) => (
        <div key={item.card.info.id} className="menu-card">
          <h3 className="menu-name">{item.card.info.name}</h3>
          <h4 className="menu-price">
            ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </h4>
        </div>
      ))}
    </div>
  );
};
export default ResInfo;
