import React from "react";
import NotFound from "../pages/NotFound";
import { useParams } from "react-router-dom";
import css from "../img/icons8-css3-48.png";
import js from "../img/icons8-javascript-48.png";
import sql from "../img//icons8-sql-48.png";
import serviceList from "./serviceList.json";
const ServiceDisplay = () => {
  const { slugService } = useParams();
  const service = serviceList[slugService];
  if (!service) {
    return <NotFound />;
  }
  const { title, description } = service;

  return (
    <div className="card custom-services-effect custom-container w-75 mt-4">
      <div className="card-body  bg-light rounded-2 p-4 ">
        <div className="mb-2">
          {(() => {
            switch (title) {
              case "Design":
                return <img src={css} alt="x" className="img img-fluid" />;

              case "Database":
                return <img src={sql} alt="x" className="img img-fluid" />;

              case "Development":
                return <img src={js} alt="x" className="img img-fluid" />;

              default:
                return <img src={js} alt="x" className="img img-fluid" />;
            }
          })()}
        </div>
        <div className=" mt-3">
          <h4 className="text-dark">{title}</h4>
        </div>
        <p className="card-text text-dark lead fs-5 p-3 custom-spacing">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceDisplay;
