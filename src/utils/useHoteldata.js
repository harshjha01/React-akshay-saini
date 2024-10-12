import { useState, useEffect } from "react";
const useHoteldata = (resid) => {
  const [hoteldata, sethoteldata] = useState(null);

  useEffect(() => {
    fetchhotel();
  }, []);
  const fetchhotel = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.71700&lng=75.83370&restaurantId=" +
        resid
    );
    const json = await data.json();
    // console.log(json);
    sethoteldata(json);
  };
  return hoteldata;
};

export default useHoteldata;
