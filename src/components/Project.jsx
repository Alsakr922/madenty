import React from "react";
import { Link } from "react-router-dom";

const Project = ({ img, title, description , reverse,href,rounded }) => {
  return (
    <div
      className={`flex bg-gray items-center ${
        reverse ? "flex-row-reverse bg-white" : ""
      }`}>
      <img
        src={img}
        className={`sm:w-1/2  ${
          rounded
            ? rounded === "l"
              ? "rounded-l-full"
              : "rounded-r-full"
            : "rounded-none"
        }`}
        alt=""
      />
      <div className="text-black text-center">
        <p className="lg:text-4xl text-xl">
          <Link to={`/${href}`}>
            <span className="lg:text-3xl text-2xl block p-2 lg:p-10">
              {title}
            </span>
          </Link>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Project;
