/* eslint-disable react/prop-types */
//navbar.js
import { useState, useEffect } from "react";
import "./navbar.css";
import Logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import PHONE_ICON from "../../assets/icons/phone_icon.svg";
import B_MENU from "../../assets/icons/menu_burger.svg";
import CLOSE_ICON from "../../assets/icons/close_icon.svg";
import WHITE_LOGO from "../../assets/logo.svg";
import { scrollToTop } from "../../utils/useScrollToTop";

const Navbar = ({ openModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 25) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    scrollToTop();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // toggleNoScroll(!isOpen);
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
    // { id: 3, name: "Katalog yuklash", path: "/catalog" },
  ];

  return (
    <nav
      className={scrolled ? "nav_bar scrolled" : "nav_bar"}
      // className="nav_bar"
    >
      <NavLink onClick={scrollToTop} to={"/"}>
        <img className="nav_logo" src={Logo} alt="LLC Logo" />
      </NavLink>

      <ul>
        {NAV_TABS?.map((item) => (
          <NavLink
            onClick={scrollToTop}
            className={({ isActive }) => (isActive ? "active" : "disabled")}
            to={item.path}
            key={item.id}
          >
            {item.name}
          </NavLink>
        ))}
      </ul>

      <button onClick={openModal} className="nav_order_btn ">
        Buyurtma berish
      </button>

      <div className="order_btn_burger_menu">
        <button onClick={openModal} className="nav_order_btn_mobile">
          <img src={PHONE_ICON} alt="" />
        </button>

        <img
          onClick={toggleMenu}
          className="burger_menu_btn"
          src={B_MENU}
          alt=""
        />

        {isOpen && (
          <div className="overlay">
            <div className="burger_menu">
              <img
                className="menu_close_btn"
                onClick={toggleMenu}
                src={CLOSE_ICON}
                alt=""
              />
              <div className="menu_logo_div">
                <NavLink to={"/"}>
                  <img className="menu_logo" src={WHITE_LOGO} alt="" />
                </NavLink>
              </div>
              <ul className="menu_tabs">
                {NAV_TABS?.map((item) => (
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "active sidebar_links_active "
                        : "disabled sidebar_links_disabled"
                    }
                    to={item.path}
                    key={item.id}
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
