import { useDispatch } from "react-redux";
import { additem } from "../utils/cartslice";

const Itemlist = ({ items, showbtn = true }) => {
  // console.log(items);

  const dispatch = useDispatch();
  const handleitem = (item) => {
    dispatch(additem(item));
  };
  return (
    <div className="">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-400 text-left"
        >
          <div className="">
            <span className="font-semibold mr-3">{item.card.info.name}</span>
            <span>
              - ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
          </div>
          <div className="">
            <p>{item.card.info.description}</p>
          </div>
          <div className="">
            {showbtn && (
              <button
                onClick={() => handleitem(item)}
                className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Add item
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
    // {
    //     // <div>
    //     // {items.map((item) => (
    //     //   <div
    //     //     key={item.card.info.id}
    //     //     className="p-2 m-2 border-b-2 text-left flex justify-between"
    //     //   >
    //     //     <div className="w-9/12">
    //     //       <div className="py-2">
    //     //         <span>{item.card.info.name}</span>
    //     //         <span>
    //     //           - ₹
    //     //           {item.card.info.price
    //     //             ? item.card.info.price / 100
    //     //             : item.card.info.defaultPrice / 100}
    //     //         </span>
    //     //       </div>
    //     //       <p className="text-xs">{item.card.info.description}</p>
    //     //     </div>
    //     //     <div className="w-3/12 p-4">
    //     //       <div className="absolute">
    //     //         <button className="p-2 ml-6 mt-[70px] rounded-lg bg-black text-white shadow-lg hover:bg-white  hover:text-black transition-all duration-[.3s]">
    //     //           Add +
    //     //         </button>
    //     //       </div>
    //     //       <img
    //     //         src={CDN_URL + item.card.info.imageId}
    //     //         alt={item.card.info.name}
    //     //         className="w-full rounded-md"
    //     //       />
    //     //     </div>
    //     //   </div>
    //     // ))}
    //     // </div>
    // }
  );
};
export default Itemlist;
