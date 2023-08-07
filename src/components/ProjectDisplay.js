import React from "react";
import NotFound from "../pages/NotFound";
import { useParams } from "react-router-dom";
// import barber from "../img/barber.png";
import projectList from "./projectList.json";

const ProjectDisplay = () => {
  const { slugProject } = useParams();
  const project = projectList[slugProject];
  if (!project) {
    return <NotFound />;
  }
  const { title, description, code, demo } = project;

  return (
    <div className="card custom-services-effect custom-container w-75 mt-4">
      {/* <img
        src={}
        className="card-img-top img img-fluid"
        alt="frontend bootcamp demo screenshot"
      /> */}

      <div className="card-body bg-light rounded-2 px-4 py-4 pb-5 pt-4">
        <i className="bi bi-code-slash fs-2"> </i>
        <h4 className="card-title mb-3 mt-3">{title}</h4>
        <p className="card-text p-3 custom-spacing">{description}</p>
        <div className="btn-group mt-3" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-outline-secondary">
            <a
              rel="noreferrer"
              target="_blank"
              className="text-dark project-urlBtn"
              href={code}
            >
              code
            </a>
          </button>
          <button type="button" className="btn btn-outline-secondary">
            <a
              rel="noreferrer"
              target="_blank"
              className="text-dark project-urlBtn"
              href={demo}
            >
              Demo
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
