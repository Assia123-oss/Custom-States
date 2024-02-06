import React from "react";
import { FaReact } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav>
        <FaReact className="img" style={{ fontSize: "3rem" }} />
        <h3>React Facts</h3>
        <h4>React Course - Project 1</h4>
      </nav>
    </div>
  );
};

export default Navbar;
