//navbar.js
import React from "react";
import "./navbar.css";
import Logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const NAV_TABS = [
    { id: 0, name: "Asosiy", path: "/" },
    { id: 1, name: "Mahsulotlar", path: "/mahsulotlar" },
    { id: 2, name: "Ish namunalari", path: "/namunalar" },
    { id: 3, name: "Katalog yuklash", path: "/katalog" },
  ];

  return (
    <nav className="nav_bar">
      <NavLink to={"/"}>
        <img className="nav_logo" src={Logo} alt="LLC Logo" />
      </NavLink>

      <ul>
        {NAV_TABS?.map((item) => (
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "disabled")}
            to={item.path}
            key={item.id}
          >
            {item.name}
          </NavLink>
        ))}
      </ul>

      <button className="nav_order_btn"> Buyurtma berish</button>
    </nav>
  );
};

export default Navbar;
