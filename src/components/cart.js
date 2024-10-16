import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { emptycart } from "../utils/cartslice";
const Cart = () => {
  const dispatch = useDispatch();
  const handleclearcart = () => {
    dispatch(emptycart());
  };
  const cartitems = useSelector((store) => store.cart.items);
  return (
    <div className="">
      <h1 className="text-center font-bold text-2xl ">cart</h1>

      <div className="m-4 p-4 w-9/12 mx-auto">
        <Itemlist showbtn={false} items={cartitems} />
      </div>
      <div className="text-center">
        <button
          onClick={handleclearcart}
          className="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          clear cart
        </button>
      </div>
    </div>
  );
};
export default Cart;
