import React from "react";

const CarouselItem = ({ img, width }) => {
  return (
    <div className="car-slide" style={{ width: width }}>
      <img src={img} alt="Project" />
    </div>
  );
};

export default CarouselItem;
