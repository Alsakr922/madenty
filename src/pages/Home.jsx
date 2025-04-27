import React from "react";
import { Hero, Project } from "../components";
import { HERO_DATA, PROJECTS_DATA } from "../constants";

const Home = () => {
  return (
    <div>
      <div className="container m-auto">
        {<Hero
          img={HERO_DATA.img}
          title={HERO_DATA.title}
          description={HERO_DATA.description}
        />}
        {
          PROJECTS_DATA.map((project, index) => (
            <Project
              key={index}
              href={project.href}
              img={project.img}
              title={project.title}
              description={project.description}
              reverse={project.reverse}
              rounded={project.rounded}
            />
          ))
        }
    
      </div>
    </div>
  );
};

export default Home;
