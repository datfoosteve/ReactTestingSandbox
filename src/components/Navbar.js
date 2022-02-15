import React from "react";
import ReactIcon from "../images/react-icon-small2.png";
import "../styles/App.css";

export default function Navbar() {
  return (
    <>
      <nav className="nav">
        <img className="ReactIcon" src={ReactIcon} alt="ReactIcon" />{" "}
        <h3 className="nav-title"> React Navigation bar </h3>
        <h4 className="nav-logo_texts">
          {" "}
          React Course : Project 1 : Navigation Bar{" "}
        </h4>{" "}
      </nav>
    </>
  );
}
