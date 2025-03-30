import React from "react";

const Textarea = ({ label, name, placeholder, register, error }) => {
  return (
    <div className="py-2">
      {label && (
        <label
          className="text-sm mb-2 inline-block dark:text-darkTextMain"
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <textarea
        className={`outline-none focus:border-gray-400 w-full rounded-md border px-3 py-2 text-sm min-h-[100px] dark:border-darkBorder dark:bg-darkBgChild dark:text-darkTextMain ${
          error ? "border-red-500" : ""
        }`}
        id={name}
        name={name}
        placeholder={placeholder}
        {...register}
      ></textarea>
      {error && (
        <div className="text-red-500 text-sm mt-1">{error.message}</div>
      )}
    </div>
  );
};

export default Textarea;
 