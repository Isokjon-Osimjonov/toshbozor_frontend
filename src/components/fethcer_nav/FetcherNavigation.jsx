/* eslint-disable react/prop-types */
import "./nav.css";
import { BGA_STATIC } from "../../static/STATIC_DATA";
const Nav = ({ activeProduct, setActiveProduct }) => {
  const handleProductTypeClick = (activeProduct) => {
    setActiveProduct(activeProduct);
  };
  return (
    <nav className="bga_nav">
      <ul>
        {BGA_STATIC.map((item) => (
          <li
            key={item.id}
            onClick={() => handleProductTypeClick(item.id)}
            className={activeProduct === item.id ? "bga_active" : ""}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
