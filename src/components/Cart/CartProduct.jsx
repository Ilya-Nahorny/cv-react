// React and external libraries
import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { RiDeleteBin7Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

// Redux actions
import { updateCartItemQuantity } from "../../redux/cartSlice";

const CartProduct = ({ product, onClick }) => {
  const { productName, imageUrl, summary, quantity, id } = product;

  const dispatch = useDispatch();

  const handleUpdate = (id, newQuantity) => {
    dispatch(updateCartItemQuantity({ id: id, quantity: newQuantity }));
  };
  return (
    <div className="shadow rounded-lg bg-white p-4 flex justify-between items-center relative dark:bg-darkBgMain">
      <div className="flex items-center gap-4">
        <div className="h-28 w-28">
          <Link to={`/service-detail/${id}`}>
            <img
              src={imageUrl}
              alt={productName}
              className="w-full h-full object-cover rounded-lg border border-gray-200 dark:border-darkBorder"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-1">
          <Link
            to={`/service-detail/${id}`}
            className="font-medium dark:text-darkTextMain"
          >
            {productName}
          </Link>
          <span className="text-sm text-gray-400 dark:text-darkTextChild">
            {summary}
          </span>
          <div className="flex items-center mt-1">
            <button
              onClick={() => {
                handleUpdate(id, Number(quantity) - 1);
              }}
              disabled={quantity === 1}
              className="inline-flex items-center cursor-pointer hover:bg-gray-300 bg-gray-200 justify-center border border-gray-300 rounded-l-md text-gray-700 text-[10px] h-7 w-8 dark:border-darkBorder dark:bg-darkBgMain dark:text-darkTextMain dark:hover:bg-darkBgChild"
            >
              <FaMinus />
            </button>
            <span className="text-[14px] flex justify-center items-center font-medium bg-gray-50 h-7 w-8 border border-gray-300 dark:border-darkBorder dark:bg-darkBgMain dark:text-darkTextMain">
              {quantity}
            </span>
            <button
              onClick={() => {
                handleUpdate(id, Number(quantity) + 1);
              }}
              className="inline-flex items-center cursor-pointer hover:bg-gray-300 bg-gray-200 justify-center border border-gray-300 rounded-r-md text-gray-700 text-[10px] h-7 w-8 dark:border-darkBorder dark:bg-darkBgMain dark:text-darkTextMain dark:hover:bg-darkBgChild"
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={onClick}
        className="inline-flex items-center cursor-pointer hover:bg-gray-50 justify-center gap-2 border border-gray-300 rounded-md text-gray-700 text-[14px] h-8 w-8 absolute top-4 right-4 dark:border-darkBorder dark:text-darkTextMain dark:hover:bg-darkBgChild"
      >
        <RiDeleteBin7Line />
      </button>
    </div>
  );
};

export default CartProduct;
