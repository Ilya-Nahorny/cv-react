// React and external libraries
import React from "react";
import { useForm } from "react-hook-form";  
import { motion } from "framer-motion"; 
import { FiShoppingCart } from "react-icons/fi";  
import { useSelector } from "react-redux";  
import toast from "react-hot-toast";  

// Components
import Helmet from "../components/Helmet/Helmet";  
import ContactButton from "../components/FormComponents/ContactButton";   
import Input from "../components/FormComponents/Input";  

// Data
import helmet from "../components/Helmet/data/helmet";  
import Textarea from "../components/FormComponents/Textarea";  
import Button from "../components/FormComponents/Button";  

const Checkout = () => {
  const { items } = useSelector((state) => state.cart);  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm(); // React Hook Form setup

  let totalAmount = 0;
  items &&
    items.forEach((item) => {
      totalAmount += item.price * item.quantity; // Calculate total amount
    });

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    toast.success("Checkout Successful!"); // Display success message
    reset(); // Reset the form
  };

  return (
    <>
      {/* Helmet component to set the page title and meta description */}
      <Helmet title={helmet.checkout.title} desc={helmet.checkout.desc} />

      {/* Motion wrapper for animations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"
      >
        {/* User Information Form */}
        <div className="col-span-1 md:col-span-3 lg:col-span-2 shadow rounded-lg bg-white p-4 space-y-2 dark:bg-darkBgMain">
          <h2 className="text-lg font-medium dark:text-darkTextMain">
            Billing Information
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* First and Last Name Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="First Name"
                name="firstName"
                placeholder="John"
                register={register("firstName", {
                  required: "First name is required.",
                })}
                error={errors.firstName}
              />
              <Input
                label="Last Name"
                name="lastName"
                placeholder="Doe"
                register={register("lastName", {
                  required: "Last name is required.",
                })}
                error={errors.lastName}
              />
            </div>

            {/* Email and Phone Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Email Address"
                name="email"
                placeholder="john.doe@example.com"
                register={register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Email is invalid.",
                  },
                })}
                error={errors.email}
              />
              <Input
                label="Phone Number"
                name="phone"
                placeholder="+1 234 567 890"
                register={register("phone", {
                  required: "Phone number is required.",
                })}
                error={errors.phone}
              />
            </div>

            {/* Billing Address */}
            <Textarea
              label="Billing Address"
              name="billingAddress"
              placeholder="123 Main St"
              register={register("billingAddress", {
                required: "Billing address is required.",
              })}
              error={errors.billingAddress}
            />

            {/* City, Postal Code, and Country Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                label="City"
                name="city"
                placeholder="New York"
                register={register("city", {
                  required: "City is required.",
                })}
                error={errors.city}
              />
              <Input
                label="Postal Code"
                name="postalCode"
                placeholder="10001"
                register={register("postalCode", {
                  required: "Postal code is required.",
                })}
                error={errors.postalCode}
              />
              <Input
                label="Country"
                name="country"
                placeholder="United States"
                register={register("country", {
                  required: "Country is required.",
                })}
                error={errors.country}
              />
            </div>

            {/* Submit button */}
            <ContactButton className={`w-full mt-2`} type="submit">
              <FiShoppingCart /> Proceed to Payment
            </ContactButton>
          </form>
        </div>

        {/* Order Summary */}
        <div className="col-span-1 md:col-span-3 lg:col-span-1 space-y-5">
          <div className="shadow rounded-lg bg-white p-4 space-y-4 dark:bg-darkBgMain">
            <h2 className="text-lg font-medium dark:text-darkTextMain">
              Order Summary ({items && items.length})
            </h2>
            <div className="grid gap-3">
              {/* Subtotal, Shipping, and Discount */}
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
            <Button className={`w-full`}>
              <FiShoppingCart /> Checkout
            </Button>
          </div>

          {/* Promo Code */}
          <div className="shadow rounded-lg bg-white p-4 dark:bg-darkBgMain">
            <h2 className="text-lg font-medium dark:text-darkTextMain">
              Promo Code
            </h2>
            <Input name="promecode" placeholder="Enter promo code" />
            <Button className={`w-full`}>Apply Code</Button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Checkout;