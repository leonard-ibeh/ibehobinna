import React from "react";
import image from "../images/main_header.png";

import { Link } from "react-router-dom";
function MainHeader() {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#1000DaysOfworkOut</h4>
          <h1>Join the legends of the fitness world </h1>
          <p>
            The aim of trading is to get money , i am coding to be a very good
            programmer , so help me God.
          </p>
          <Link to="/plans" className="btn lg">
            Get Started
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={image} alt="Main Header" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
