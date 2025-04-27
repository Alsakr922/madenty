import React from "react";
import Hero from "./../components/Hero";
import { SILIA } from "../constants/ProjectsData";
import { Project } from "../components";

const SingleProject = () => {
  const product = SILIA;
  return (
    <div className="container m-auto">
      <Hero
        title={product.hero.title}
        description={product.hero.desription}
        img={product.hero.img}
      />
      {product.sections.map((section, index) => (
        <Project
          key={index}
          img={section.img}
          reverse={!section.reverse}
          title={section.title}
          description={section.description}
        />
      ))}
    </div>
  );
};

export default SingleProject;
