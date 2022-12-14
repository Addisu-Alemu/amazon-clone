import React from "react";
import logo from "./Zillow_logo.png";
import "./ZillowHeader.css";
import { NavLink } from "react-router-dom";

function ZillowHeader() {
  return (
    <div className="zillow__container">
      <div className="zillow__optionLeft">
        <ul className="zillow__optionContainer">
          <NavLink>
            <li className="zillow__optionList">Buy</li>
          </NavLink>
          <NavLink>
            <li className="zillow__optionList">Rent</li>
          </NavLink>
          <NavLink>
            <li className="zillow__optionList">Sell</li>
          </NavLink>
          <NavLink>
            <li className="zillow__optionList">Home Loans</li>
          </NavLink>
          <NavLink>
            <li className="zillow__optionList">Agent Finder</li>
          </NavLink>
        </ul>
      </div>
      <div>
        <NavLink to="/">
          <img className="zillow__logo" src={logo} alt="zillow logo" />
        </NavLink>
      </div>
      <div className="zillow__optionRight">
        <ul className="zillow__optionContainer">
          <NavLink>
            <li className="zillow__optionList">Manage Rentals</li>
          </NavLink>
          <NavLink>
            <li className="zillow__optionList">Advertise</li>
          </NavLink>
          <NavLink>
            <li className="zillow__optionList">Help</li>
          </NavLink>
          <NavLink>
            <li className="zillow__optionList">Sign in</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default ZillowHeader;
