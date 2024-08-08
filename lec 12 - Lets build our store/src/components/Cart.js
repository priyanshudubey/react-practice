import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import Swal from "sweetalert2";
import { clearCart } from "../../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    Swal.fire({
      title: "Do you want to Clear the Cart?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clearCart());
      }
    });
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="w-full text-center text-2xl font-bold border-b-2 border-orange-700 mb-[30px]">
        Cart
      </h1>
      <button
        className="py-[3px] px-[10px] text-[1.2rem] text-[#fff] bg-orange-700 rounded-[8px] border-none hover:bg-[#016034]"
        onClick={() => handleClearCart()}>
        Clear Cart
      </button>
      <div className="w-6/12 m-autow-full shadow-md px-[20px] bg-gray-100 rounded-md py-[10px] my-[30px]">
        {cartItems.length === 0 && (
          <div className="text-center text-2xl font-bold">
            Ohh noooooo! your cart is empty! Add items to your cart.
          </div>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
