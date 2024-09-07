import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  removeFromCart,
} from "../../../redux/features/cart/cartSlice";
import { FaTrash } from "react-icons/fa";

const CheckOutPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Safely check for subtotal and total
  //   const subtotal = cart?.subtotal ? cart.subtotal.toFixed(2) : "0.00";
  const total = cart?.total ? cart.total.toFixed(2) : "0.00";

  return (
    <div className="container mx-auto mt-8">
      {/* Checkout Header */}
      <h1 className="text-3xl font-bold mb-6 text-center md:text-left">
        Checkout
      </h1>

      {/* If cart is empty */}
      {cart.items.length === 0 ? (
        <p className="text-center pb-10">Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5 md:px-0">
          {/* Cart Items Section */}
          <div className="md:col-span-1">
            {cart.items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-4"
              >
                {/* Product Image */}
                <img src={item.image} alt={item.title} className="w-20" />

                {/* Product Title */}
                <p>{item.title}</p>

                {/* Product Discount Price */}
                <p>€{item.discountPrice}</p>

                {/* Increment/Decrement Section */}
                <div className="flex items-center">
                  <button
                    onClick={() => dispatch(decrement(item.id))}
                    className="px-2 py-1 border rounded"
                  >
                    -
                  </button>
                  <span className="px-3">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(increment(item.id))}
                    className="px-2 py-1 border rounded"
                  >
                    +
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-600"
                >
                  <FaTrash></FaTrash>
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary Section */}
          <div className="md:col-span-1">
            <div className="p-6 bg-gray-50 rounded-md shadow-md max-w-sm">
              {/* Order Details Title */}
              <h2 className="text-lg font-bold mb-4">Order Summary</h2>

              {/* Subtotal */}
              <div className="mb-2 flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold text-gray-800">€{total}</span>
              </div>

              {/* Shipping */}
              <div className="mb-2 flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold text-gray-800">Free</span>
              </div>

              {/* Estimated Tax */}
              <div className="mb-2 flex justify-between">
                <span className="text-gray-600 flex items-center">
                  Estimated Tax{" "}
                  <span className="ml-1 text-gray-400 cursor-pointer">ⓘ</span>
                </span>
                <span className="font-semibold text-gray-800">€-</span>
              </div>

              {/* Total */}
              <div className="border-t pt-2 mt-2 flex justify-between">
                <span className="font-bold text-gray-800">Total</span>
                <span className="font-bold text-gray-800">€{total}</span>
              </div>

              {/* Checkout Button k */}
              <button className="mt-4 w-full px-4 py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-900">
                GO TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckOutPage;
