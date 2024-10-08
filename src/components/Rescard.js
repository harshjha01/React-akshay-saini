const Rescard = (props) => {
  const imglink =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  const { resdata } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, deliveryTime } =
    resdata;

  return (
    <div className="rescard">
      <img
        className="res-img"
        src={imglink + cloudinaryImageId}
        alt="res-img"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}⭐</h4>
      <h4>{deliveryTime}</h4>
      {/* <h3>Harsh food</h3>
      <h4>Fast food, snacks</h4>
      <h4>4.4⭐</h4>
      <h4>30 minuts</h4> */}
    </div>
  );
};

export default Rescard;
