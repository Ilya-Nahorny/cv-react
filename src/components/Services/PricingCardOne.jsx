// React and external libraries
import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

// Redux actions
import { addItemToCart } from "../../redux/cartSlice";

const PricingCardOne = ({ servicesData }) => {
  const dispatch = useDispatch();
  const handleAddCart = (item) => {
    dispatch(addItemToCart(item));
    toast.success("Product added to your cart");
  };

  return (
    <section className="flex flex-col justify-center antialiased text-gray-600" >
      <div className="h-full">
        {/* Pricing tabs */}
        <div className="grid grid-cols-3 gap-6">
          {servicesData.pricing.map((plan, index) => (
            <div
              key={index}
              className="relative col-span-full lg:col-span-1 bg-white shadow-md rounded-sm border border-gray-200 dark:bg-darkBgMain dark:border-darkBorder"
            >
              <div
                className={`absolute top-0 left-0 right-0 h-0.5 ${plan.color3}`}
                aria-hidden="true"
              ></div>
              <div className="px-5 pt-5 pb-6 border-b border-gray-200">
                <header className="flex items-center mb-2">
                  <div
                    className={`w-6 h-6 rounded-full flex-shrink-0 bg-gradient-to-tr mr-3 ${plan.color1} ${plan.color2}`}
                  >
                    <svg
                      className="w-6 h-6 fill-current text-white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17a.833.833 0 01-.833-.833 3.333 3.333 0 00-3.334-3.334.833.833 0 110-1.666 3.333 3.333 0 003.334-3.334.833.833 0 111.666 0 3.333 3.333 0 003.334 3.334.833.833 0 110 1.666 3.333 3.333 0 00-3.334 3.334c0 .46-.373.833-.833.833z" />
                    </svg>
                  </div>
                  <h3 className="text-lg text-gray-800 font-semibold dark:text-darkTextMain">
                    {plan.title}
                  </h3>
                </header>
                <div className="text-sm mb-2 dark:text-darkTextChild">
                  {plan.description}
                </div>
                {/* Price */}
                <div className="text-gray-800 font-bold mb-4">
                  <span className="text-2xl dark:text-darkTextMain">$</span>
                  <span className="text-3xl dark:text-darkTextMain">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 font-medium text-sm dark:text-darkTextChild">
                    /mo
                  </span>
                </div>
                {/* CTA */}
                <button
                  onClick={() =>
                    handleAddCart({
                      imageUrl: servicesData.image,
                      productName: servicesData.name,
                      price: plan.price,
                      id: servicesData.id,
                      summary: servicesData.summary,
                      quantity: 1,
                    })
                  }
                  className={`font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-gray-200 hover:border-gray-300 text-gray-600 rounded leading-5 shadow-sm transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2 w-full dark:border-darkBorder dark:text-darkTextMain dark:hover:bg-darkBgChild`}
                >
                  <TiShoppingCart className="mr-1" />
                  Add to cart
                </button>
              </div>
              <div className="px-5 pt-4 pb-5">
                <div className="text-xs text-gray-800 font-semibold uppercase mb-4 dark:text-darkTextMain">
                  What's included
                </div>
                {/* List */}
                <ul>
                  {plan.included.map((item, idx) => (
                    <li key={idx} className="flex items-center py-1">
                      <svg
                        className={`w-3 h-3 flex-shrink-0 fill-current ${plan.color4} mr-2`}
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                      </svg>
                      <div className="text-sm dark:text-darkTextChild">
                        {item}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCardOne;
