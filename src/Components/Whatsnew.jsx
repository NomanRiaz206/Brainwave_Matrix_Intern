import React, { useRef } from "react";

const Whatsnew = () => {
  const sliderRef = useRef(null);

  const slide = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 150;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container mx-auto flex items-center py-8">
      {/* Left Side Text */}
      <div className="w-1/4 pl-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          What's <br /> New
        </h2>
      </div>

      {/* Right Side Slider */}
      <div className="w-3/4 relative">
        {/* Slider Container */}
        <div
          ref={sliderRef}
          className="flex overflow-x-scroll space-x-4 scrollbar-hide"
        >
          {/* Slider Items */}
          {[
            { img: "./images/what1.avif", text: "Day To Day Winter" },
            
            { img: "./images/what2.avif", text: "Silky Unstitched Luxury" },
            { img: "./images/what3.avif", text: "Block Print Ready To Wear" },
            { img: "./images/what4.avif", text: "Kids Winter New Arrivals" },
            { img: "./images/what5.avif", text: "Daily Unstitched Winter '24" },
            { img: "./images/what6.avif", text: "Accessories New Arrivals" },
            { img: "./images/what7.avif", text: "Man Unstitched Winter '24" },
            { img: "./images/what8.avif", text: "Winter Bedding Sets Home" },
          ].map((item, index) => (
            <div className="text-center flex-shrink-0" key={index}>
              <img
                className="w-36 h-36 object-cover rounded-full mx-auto"
                src={item.img}
                alt={`Slide ${index + 1}`}
              />
              <p className="mt-2 text-sm">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={() => slide("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-800"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 14.707a1 1 0 010-1.414L8.414 9l4.293-4.293a1 1 0 10-1.414-1.414l-5 5a1 1 0 000 1.414l5 5a1 1 0 001.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => slide("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-800"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L11.586 9 7.293 4.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Whatsnew;
