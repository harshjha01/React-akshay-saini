import { useContext, useEffect, useState } from "react";
import Rescard from "./Rescard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineUser from "../utils/useOnlineUser";
import usercontext from "../utils/usercontext";
const Body = () => {
  const apicall =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  const [restaurants, setrestaurants] = useState([]);
  const [filerrestaurants, setfilerrestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");
  const activestatus = useOnlineUser();
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

  const { username, setuser } = useContext(usercontext);

  if (activestatus == false) {
    return <h1>Seems like youre not connected to internet</h1>;
  }
  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box border border-black mr-1"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
            className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
          {/* <div className="search m-4 p-4 flex items-center"> */}
          <label htmlFor="name">User Name: </label>
          <input
            id="name"
            className="border border-black p-2"
            onChange={(e) => setuser(e.target.value)}
          />
          {/* </div> */}
        </div>
      </div>
      <div className="rescontainer">
        {filerrestaurants.map((restaurant) => (
          <Link
            style={{
              textDecoration: "none",
              color: "#000",
            }}
            key={restaurant.info.id}
            to={"/res/" + restaurant.info.id}
          >
            <Rescard resdata={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
