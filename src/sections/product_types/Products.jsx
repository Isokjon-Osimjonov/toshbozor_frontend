import { NavLink } from "react-router-dom";
import "./products.css";
import nextIcon from "../../assets/icons/next_icon.svg";
import { scrollToTop } from "../../utils/useScrollToTop";
const Products = () => {
  return (
    <section className="producst_types_section">
      <div className="product_type_1">
        <NavLink
          onClick={scrollToTop}
          className="product_type_link"
          to="/products"
        >
          <h3>
            Bruschatka <br /> Bordyur
          </h3>
          <img src={nextIcon} alt="" />
        </NavLink>
      </div>

      <div className="product_type_2">
        <NavLink
          onClick={scrollToTop}
          className="product_type_link"
          to="/products"
        >
          <h3>Aglomerat</h3>
          <img src={nextIcon} alt="" />
        </NavLink>
      </div>

      <div className="product_type_3">
        <NavLink
          onClick={scrollToTop}
          className="product_type_link"
          to="/products"
        >
          <h3>Granit</h3>
          <img src={nextIcon} alt="" />
        </NavLink>
      </div>
    </section>
  );
};

export default Products;
