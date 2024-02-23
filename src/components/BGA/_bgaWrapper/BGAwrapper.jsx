import { useState } from "react";
import "./bga_wrapper.css";
import { BGA_STATIC } from "../../../static/STATIC_DATA";
import {
  BRUSCHATKA_BORDYUR,
  GRANIT,
  AGLOMERAT,
} from "../../../static/BGA_STATIC";
import Nav from "../_nav/Nav";
const BGAwrapper = () => {
  const [activeNav, setActiveNav] = useState("b");

  const handleNavClick = (navOption) => {
    setActiveNav(navOption);
  };
  handleNavClick;
  const activeData = BGA_STATIC.find((item) => item.id === activeNav);

  let modifiedName = activeData.name;
  if (activeNav === "b") {
    const nameParts = activeData.name.split(" ");
    const and = <span className="and"> va </span>;

    modifiedName = [nameParts[0], and, nameParts[1]];
  }
  const bgaActiveData = () => {
    if (activeNav === "b") {
      return BRUSCHATKA_BORDYUR;
    } else if (activeNav === "g") {
      return GRANIT;
    } else if (activeNav === "a") {
      return AGLOMERAT;
    }
    return BRUSCHATKA_BORDYUR;
  };
  const products = bgaActiveData();

  return (
    <div>
      <header className="bga_header">
        <Nav activeNav={activeNav} setActiveNav={setActiveNav} />
        <div className="bga_header_data_wrapper">
          <div className="bga_textinfo_wrapper">
            <div className="bag_product_title_div">
              <span className="toshbozor">TOSHBOZOR dan </span>
              <br />
              <span key={activeData.id} className="product_name">
                {modifiedName}
              </span>
            </div>
            <p className="bga_product_description">{activeData.description}</p>
          </div>

          <img
            className="bga_product_img"
            src={activeData.image}
            alt={activeData.name}
          />
        </div>
      </header>
      {/* =================== products cards==================== */}
      <section className="bga_produts_wrapper">
        <h2 className="bga_title">{activeData.name}</h2>

        <div className="bga_products">
          {products?.map((product) => (
            <div className="bga_card">
              <div className="bga_product_image_wrapper">
                <img className="bga_product_image" src={product.image} alt="" />
              </div>
              <div className="bga_product_text_info">
                <h1 className="bag_product_name">
                  {activeNav === "b"
                    ? "Bruschatka"
                    : activeNav === "g"
                    ? "Granit"
                    : activeNav === "a"
                    ? "Aglomerat"
                    : ""}
                  {product.name}
                </h1>

                {product.size ? (
                  <h2 className="bga_product_size">
                    O’lcham:
                    {product.size ? product.size.split(" ").join(" x ") : ""}
                  </h2>
                ) : (
                  ""
                )}

                <h2 className="bag_product_price">
                  Narx:{product.price}
                  {activeNav === "g" || activeNav === "a" ? (
                    <span> $</span>
                  ) : (
                    <span> UZS</span>
                  )}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BGAwrapper;
