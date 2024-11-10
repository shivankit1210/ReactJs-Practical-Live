import React from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import carouselData from "../data/CarouselData";

const ImageCarousel = () => {
  return (
    <div className="bg-gray-900 w-[100vw] h-[91.5vh] flex place-content-center items-center">
      <GrPrevious className="text-white" size={30} />
      {carouselData.map((image) => {
        return (
          <div className="flex place-content-center items-center m-5 rounded-lg overflow-hidden">
            <img
              src={image.url}
              alt=""
            />
          </div>
        );
      })}

      <GrNext className="text-white" size={30} />
    </div>
  );
};

export default ImageCarousel;
