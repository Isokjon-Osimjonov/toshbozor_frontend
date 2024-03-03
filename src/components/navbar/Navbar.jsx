//navbar.js
import { useState, useEffect } from "react";
import "./navbar.css";
import Logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import PHONE_ICON from "../../assets/icons/phone_icon.svg";
import B_MENU from "../../assets/icons/menu_burger.svg";
import CLOSE_ICON from "../../assets/icons/close_icon.svg";
import WHITE_LOGO from "../../assets/white_logo.svg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
   useEffect(() => {
     const body = document.querySelector("body");
     if (isOpen) {
       body.classList.add("no-scroll");
     } else {
       body.classList.remove("no-scroll");
     }
   }, [isOpen]);

  const NAV_TABS = [
    { id: 0, name: "Asosiy", path: "/" },
    { id: 1, name: "Mahsulotlar", path: "/products" },
    { id: 2, name: "Ish namunalari", path: "/examples" },
    { id: 3, name: "Katalog yuklash", path: "/catalog" },
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

      <button className="nav_order_btn "> Buyurtma berish</button>

      <div className="order_btn_burger_menu">
        <button
          onClick={() => console.log("prssed call")}
          className="nav_order_btn_mobile"
        >
          <img src={PHONE_ICON} alt="" />
        </button>

        <img
          onClick={toggleMenu}
          className="burger_menu_btn"
          src={B_MENU}
          alt=""
        />

        {isOpen && (
          <div className="burger_menu">
            <img
              className="menu_close_btn"
              onClick={toggleMenu}
              src={CLOSE_ICON}
              alt=""
            />
            <NavLink to={"/"}>
              <img className="menu_logo" src={WHITE_LOGO} alt="" />
            </NavLink>
            <ul className="menu_tabs">
              {NAV_TABS?.map((item) => (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "disabled"
                  }
                  to={item.path}
                  key={item.id}
                >
                  {item.name}
                </NavLink>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
