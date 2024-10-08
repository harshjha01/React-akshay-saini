import { useEffect, useState } from "react";
import Rescard from "./Rescard";
import Shimmer from "./Shimmer";
const Body = () => {
  const apicall =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  const [restaurants, setrestaurants] = useState([]);
  const [filerrestaurants, setfilerrestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");
  const fetchdata = async () => {
    const data = await fetch(apicall);
    const datajson = await data.json();
    setrestaurants(
      datajson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilerrestaurants(
      datajson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  // fetchdata();
  useEffect(() => {
    fetchdata();
  }, []);
  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const fress = restaurants.filter((res) => {
                res.info.name.toLowerCase().includes(searchText.toLowerCase());
              });
              const fres = restaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setsearchText("");
              setfilerrestaurants(fres);
            }}
          >
            Search
          </button>
        </div>
        <div className="top-res">
          <button
            onClick={() => {
              let topresfl = restaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setfilerrestaurants(topresfl);
              console.log("filter");
            }}
          >
            Top rated restaurants
          </button>
        </div>
      </div>
      <div className="rescontainer">
        {filerrestaurants.map((restaurant) => (
          <Rescard key={restaurant.info.id} resdata={restaurant.info} />
        ))}
      </div>
    </div>
  );
};
export default Body;
