import React from "react";
// import home from "./home.jpg";
import "./ZillowHome.css";

function ZillowHome() {
  return (
    <div className="zillow__home">
      <div className="zillow__top">
        <h1 className="zillow__theme">Find it. Tour it. Own it.</h1>
        {/* <img className="zillow__homePic" src={home} alt="home picture" /> */}
        <form>
          <input
            type="text"
            className="zillow__input"
            placeholder="Enter an adress, neighbourhood, city, or ZIP code"
          />
        </form>
      </div>
      <div className="zillow__info"></div>
      <div className="zillow__footer"></div>
    </div>
  );
}

export default ZillowHome;
