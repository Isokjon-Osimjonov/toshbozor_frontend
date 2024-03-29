/* eslint-disable react/prop-types */
import "./nav.css";
import { BGA_STATIC } from "../../static/STATIC_DATA";
// eslint-disable-next-line react/prop-types
const Nav = ({ activeProduct, setActiveProduct }) => {
  const handleClick = (product) => {
    setActiveProduct(product);
  };

  return (
    <nav className="bga_nav">
      <ul>
        {BGA_STATIC.map((item) => (
          <li
            key={item.id}
            onClick={() => handleClick(item.id)}
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
