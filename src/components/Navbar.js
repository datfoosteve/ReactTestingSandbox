import React from "react";
import ReactIcon from "../images/react-icon-small.png";

export default function Navbar() {
  return (
    <>
      <nav>
        <img className="ReactIcon" src={ReactIcon} alt="ReactIcon" />{" "}
        <h3> ReactFacts </h3>
        <h4> React Course - Project 1 </h4>{" "}
      </nav>
    </>
  );
}
