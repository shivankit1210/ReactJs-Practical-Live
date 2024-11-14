import React, { useState } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import carouselData from "../data/CarouselData";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [currentCarousel, setCurrentCarousel] = useState(false);

  const prevImg = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((currentIndex) =>
        currentIndex === 0 ? carouselData.length - 1 : currentIndex - 1
      );
      setFade(false);
    }, 500);
  };

  const nxtImg = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((currentIndex) =>
        currentIndex === carouselData.length - 1 ? 0 : currentIndex + 1
      );
      setFade(false);
    }, 500);
  };

  const handleCarousel1 = () => {
    setCurrentCarousel(true);
  };

  const handleCarousel2 = () => {
    setCurrentCarousel(false);
  };

  return (
    <div className="bg-gray-900 w-[100vw] h-[91.5vh] md:h-auto pb-6 overflow-x-hidden flex flex-col place-content-center items-center">
      <div className="flex flex-col md:flex-row gap-2 mt-10 md:mt-2">
        <button
          className="bg-white p-2 rounded-md shadow-sm font-semibold shadow-white hover:bg-gray-200"
          onClick={handleCarousel1}
        >
          Using transform
        </button>
        <button
          className="bg-white p-2 rounded-md shadow-sm font-semibold shadow-white hover:bg-gray-200"
          onClick={handleCarousel2}
        >
          Using transition
        </button>
      </div>

      {currentCarousel ? (
        <div className="flex place-content-center items-center md:gap-5 ">
          <GrPrevious className="text-white" size={30} onClick={prevImg} />
          {/* start */}
          <div className="flex  w-[80vw]  rounded-lg overflow-hidden">
            <div
              className="flex transition-transform duration-500  "
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {carouselData.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="w-[100%] h-full flex-shrink-0 flex justify-center items-center overflow-hidden mt-3"
                  >
                    <img
                      src={image.url}
                      alt=""
                      className="md:w-[80vw] md:h-[80vh] w-full h-full object-cover rounded-lg"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          {/* end */}
          <GrNext className="text-white" size={30} onClick={nxtImg} />
        </div>
      ) : (
        <div className="flex place-content-center items-center ">
          <GrPrevious className="text-white size-20 md:size-10" size={30} onClick={prevImg} />
          <div className="flex place-content-center items-center mt-5 mb-5 rounded-lg overflow-hidden">
            <img
              src={carouselData[currentIndex].url}
              alt=""
              className={`md:w-[80vw] md:h-[80vh] w-full h-full object-cover rounded-lg transition-opacity duration-500 ${
                fade ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>

          <GrNext className="text-white size-20 md:size-10" size={30} onClick={nxtImg} />
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
