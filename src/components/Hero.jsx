import React from "react";

const Hero = ({ img, title, description }) => {
  return (
    <div className="hero flex h-[calc(50vh - 80px)] flex-col items-center">
      <img src={img} className="lg:w-[50vw]" alt="" />
      <div className="text-black text-center py-5">
        <h1 className="lg:text-6xl text-2xl font-extrabold">{title}</h1>
        <p className="lg:text-4xl text-2xl py-8 lg:px-40">{description}</p>
      </div>
    </div>
  );
};

export default Hero;
