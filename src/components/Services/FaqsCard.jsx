import { useState } from "react";

const FaqsCard = ({ faqsList }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleOpenAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8 bg-white rounded-lg shadow py-12 dark:bg-darkBgMain">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl text-gray-800 font-semibold dark:text-darkTextMain">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto text-lg dark:text-darkTextChild">
          Answered all frequently asked questions. Still confused? Feel free to
          contact us.
        </p>
      </div>
      <div className="mt-14 max-w-2xl mx-auto">
        {faqsList.map((item, index) => (
          <div
            className="space-y-3 mt-5 overflow-hidden border-b dark:border-darkBorder"
            key={index}
          >
            <h4
              className="cursor-pointer flex items-center justify-between text-lg text-gray-700 font-medium dark:text-darkTextMain"
              onClick={() => handleOpenAnswer(index)}
            >
              {item.question}
              {openIndex === index ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 12H4"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              )}
            </h4>
            <div
              className={`transition-all duration-300 ${
                openIndex === index
                  ? "max-h-screen opacity-100"
                  : "max-h-0 opacity-0"
              }`}
              style={{ overflow: "hidden" }}
            >
              <div className="mb-4">
                <p className="text-gray-500 dark:text-darkTextChild">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqsCard;
