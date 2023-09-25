import React from "react";
import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader__wrapper">
        <span className="preloader__pulse"></span>
      </div>
    </div>
  );
};

export default Preloader
