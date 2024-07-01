import React from "react";
import NavLink from "../atoms/NavLink";

const Navigation: React.FC = () => {
  return (
    <div className="flex ml-20">
      <NavLink label="Home" />
      <NavLink label="Home" />
      <NavLink label="Home" />
    </div>
  );
};

export default Navigation;
