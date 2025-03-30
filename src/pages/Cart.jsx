// React and external libraries
import React from "react";
import { motion } from "framer-motion";
import { FiShoppingCart } from "react-icons/fi";
import { BiGift } from "react-icons/bi";
import { CiShoppingBasket } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

// Components
import Helmet from "../components/Helmet/Helmet";
import Button from "../components/FormComponents/Button";
import Input from "../components/FormComponents/Input";
import CartProduct from "../components/Cart/CartProduct"; 

// Redux actions
import { removeItemFromCart } from "../redux/cartSlice";

// Data
import helmet from "../components/Helmet/data/helmet";

const Cart = () => {
  const dispatch = useDispatch(); // Initialize useDispatch hook to dispatch actions
  const { items } = useSelector((state) => state.cart); // Access cart items from the Redux store

  // Handle deleting a product from the cart
  const handleDelete = (id) => {
    dispatch(removeItemFromCart(id)); // Dispatch the remove action with the product ID
    toast.success("Product removed from your cart"); // Show a toast notification when the product is removed
  };

  let totalAmount = 0;

  // Calculate the total amount of items in the cart
  items &&
    items.forEach((item) => {
      totalAmount += item.price * item.quantity;
    });

  return (
    <>
      {/* Helmet component to set the page title and meta description */}
      <Helmet title={helmet.cart.title} desc={helmet.cart.desc} />

      {/* Motion wrapper for animations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"
      >
        {/* Cart product list */}
        <div
          className={`col-span-1 md:col-span-3 lg:col-span-2 ${
            items.length >= 1
              ? ""
              : "shadow rounded-lg bg-white p-4 space-y-4 dark:bg-darkBgMain "
          }`}
        >
          {items.length >= 1 ? (
            <div className="flex flex-col gap-4 max-h-[465px] overflow-y-auto">
              {items &&
                items.map((item, index) => (
                  <CartProduct
                    key={index}
                    product={item}
                    onClick={() => handleDelete(item.id)} // Handle product removal
                  />
                ))}
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center w-full h-full">
              <CiShoppingBasket
                size={240}
                className="text-gray-400 dark:text-darkTextChild"
              />
              <span className="text-lg text-gray-400 dark:text-darkTextChild">
                There are no items in your cart
              </span>
            </div>
          )}
        </div>

        {/* Order summary section */}
        <div className="col-span-1 md:col-span-3 lg:col-span-1 space-y-5">
          <div className="shadow rounded-lg bg-white p-4 space-y-4 dark:bg-darkBgMain">
            <h2 className="text-lg font-medium dark:text-darkTextMain">
              Order Summary ({items && items.length})
            </h2>
            <div className="grid gap-3">
              {/* Display subtotal, shipping, and discount */}
              <div className="flex items-center justify-between">
                <span className="text-gray-400 dark:text-darkTextChild">
                  Subtotal
                </span>
                <span className="font-medium dark:text-darkTextChild">
                  ${totalAmount}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 dark:text-darkTextChild">
                  Shipping
                </span>
                <span className="font-medium dark:text-darkTextChild">$0</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 dark:text-darkTextChild">
                  Discount
                </span>
                <span className="text-green-500 font-medium dark:text-darkTextChild">
                  -$0
                </span>
              </div>
              <hr className="mt-1 mb-2 dark:border-darkBorder" />
              <div className="flex items-center justify-between font-medium dark:text-darkTextChild">
                <span>Total</span>
                <span>${totalAmount}</span>
              </div>
            </div>
            {/* Checkout button */}
            <Button url="/checkout" className={`w-full`}>
              <FiShoppingCart /> Checkout
            </Button>
          </div>

          {/* Promo code section */}
          <div className="shadow rounded-lg bg-white p-4 dark:bg-darkBgMain">
            <h2 className="text-lg font-medium dark:text-darkTextMain">
              Promo Code
            </h2>
            <Input name="promecode" placeholder="Enter promo code" />
            <Button className={`w-full`}>
              <BiGift /> Apply Code
            </Button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Cart;