import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/teachers"}>Teachers</NavLink>
      <NavLink to={"/favorites"}>Favorites</NavLink>
    </div>
  );
};
