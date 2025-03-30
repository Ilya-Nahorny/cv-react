import React, { useState, useRef, useEffect } from "react";

import { Link } from "react-router-dom";

import { FaLink } from "react-icons/fa";

import { dots, image } from "../MySetup/data/mysetup";

const MySetupCard = () => {
  const [selectedDot, setSelectedDot] = useState(null);
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,

    height: 0,
  });

  const [popupStyles, setPopupStyles] = useState({});

  const imageRef = useRef(null);

  const popupRef = useRef(null);

  useEffect(() => {
    const updateImageDimensions = () => {
      if (imageRef.current) {
        setImageDimensions({
          width: imageRef.current.clientWidth,
          height: imageRef.current.clientHeight,
        });
      }
    };

    updateImageDimensions();

    window.addEventListener("resize", updateImageDimensions);
    return () => {
      window.removeEventListener("resize", updateImageDimensions);
    };
  }, []);

  useEffect(() => {
    if (popupRef.current && selectedDot !== null) {
      const dot = dots[selectedDot];

      const left = dot.x * 100 + "%";
      const top = dot.y * 100 + "%";

      setPopupStyles({
        top: `calc(${top} + 15px)`,

        left: `calc(${left} + 15px)`,

        zIndex: 101,
      });
    }
  }, [selectedDot, imageDimensions]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        handleClosePopup();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getDotPosition = (dot) => {
    const left = dot.x * 100 + "%";
    const top = dot.y * 100 + "%";

    return {
      left: `calc(${left})`,
      top: `calc(${top})`,
    };
  };

  const handleDotClick = (index) => {
    setSelectedDot(index);
  };

  const handleClosePopup = () => {
    setSelectedDot(null);
  };

  const handleMouseMove = (event) => {
    if (imageRef.current) {
      const { left, top, width, height } =
        imageRef.current.getBoundingClientRect();
      const x = event.clientX - left;

      const y = event.clientY - top;

      const xPercentage = (x / width) * 100;
      const yPercentage = (y / height) * 100;

      setMouseCoords({
        x: xPercentage,
        y: yPercentage,
      });
    }
  };
  return (
    <div className="relative">
      <div className="relative" onMouseMove={handleMouseMove}>
        <img
          src={image}
          alt="Setup"
          ref={imageRef}
          onLoad={() =>
            setImageDimensions({
              width: imageRef.current.clientWidth,
              height: imageRef.current.clientHeight,
            })
          }
          className="w-full h-auto block rounded-lg"
        />

        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg z-48" />

        {/* <div
          className="absolute px-2 py-1 bg-white text-black text-xs rounded transform -translate-x-1/2 -translate-y-full whitespace-nowrap"
          style={{
            top: `${mouseCoords.y}%`,
            left: `${mouseCoords.x}%`,
          }}
        >
          X: 0.{mouseCoords.x.toFixed(0)}, Y: 0.{mouseCoords.y.toFixed(0)}
        </div> */}
      </div>

      {dots.map((dot, index) => (
        <div
          key={index}
          className="absolute cursor-pointer w-4 h-4 rounded-full bg-white z-49 animate-pulse"
          style={{
            ...getDotPosition(dot),
          }}
          onClick={() => handleDotClick(index)}
        />
      ))}

      {selectedDot !== null && (
        <div
          ref={popupRef}
          style={popupStyles}
          className="bg-gray-800 text-white rounded-lg p-2 md:px-6 md:py-4 absolute text-sm font-medium max-h-60 max-w-xs overflow-y-auto shadow-lg border border-gray-700"
        >
          <Link
            to={dots[selectedDot].url}
            className="flex flex-col gap-2"
          >
            <p className="text-sm md:text-lg font-semibold">
              {dots[selectedDot]?.content}
            </p>

            <div className="flex items-center gap-2 text-gray-300 hover:text-gray-100 transition-colors">
              <FaLink className="text-blue-400" />

              <span className="text-sm">Product View</span>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MySetupCard;