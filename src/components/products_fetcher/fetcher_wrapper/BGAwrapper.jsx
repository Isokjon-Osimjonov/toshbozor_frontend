import { useState } from "react";
import "./bga_wrapper.css";
import { v4 as uuidv4 } from "uuid";
import { BGA_STATIC } from "../../../static/STATIC_DATA";
import {
  BRUSCHATKA_BORDYUR,
  GRANIT,
  AGLOMERAT,
} from "../../../static/BGA_STATIC";
import Nav from "../fethcer_nav/Nav";

const BGAwrapper = () => {
  const [activeNav, setActiveNav] = useState("paving");

  const handleNavClick = (navOption) => {
    setActiveNav(navOption);
  };

  handleNavClick;
  const activeData = BGA_STATIC.find((item) => item.id === activeNav);

  let modifiedName = activeData.name;
  if (activeNav === "paving") {
    const nameParts = activeData.name.split(" ");
    const and = <span className="and"> va </span>;

    modifiedName = [nameParts[0], and, nameParts[1]];
  }

  const bgaActiveData = () => {
    if (activeNav === "paving") {
      return BRUSCHATKA_BORDYUR;
    } else if (activeNav === "granite") {
      return GRANIT;
    } else if (activeNav === "agglomerate") {
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
              <span key={uuidv4()} className="product_name">
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
            <div key={product.id} className="bga_card">
              <div className="bga_product_image_wrapper">
                <img className="bga_product_image" src={product.image} alt="" />
              </div>
              <div className="bga_product_text_info">
                <div className="product_text_info_wrapper">
                  <span className="pre_info">
                    {activeNav === "paving"
                      ? "Bruschatka:"
                      : activeNav === "granite"
                      ? "Granit:"
                      : activeNav === "agglomerate"
                      ? "Aglomerat:"
                      : ""}
                  </span>
                  <h1 className="bag_product_name">
                    &quot;{product.name}&quot;
                  </h1>
                </div>

                {product.size ? (
                  <div className="product_text_info_wrapper">
                    <span className="pre_info"> O’lcham:</span>
                    <h2 className="bga_product_size">
                      {product.size ? product.size.split(" ").join(" x ") : ""}
                    </h2>
                  </div>
                ) : (
                  ""
                )}

                <div className="product_text_info_wrapper">
                  <span className="pre_info"> Narx:</span>
                  <h2 className="bag_product_price">
                    {product.price}
                    {activeNav === "g" || activeNav === "a" ? (
                      <span className="dollar"> $</span>
                    ) : (
                      <span className="uzs"> UZS</span>
                    )}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
        {activeNav !== "b" && (
          <div className="offer">
            <h3 className="offer_text">
              Biz sizning talablaringiz va hohishingizga o&apos;lchamingizga
              to&apos;liq javob beradigan mahsulotlarni ishlab chiqaramiz.
            </h3>
            <button className="offer_order_btn">Buyurtma berish</button>
          </div>
        )}
      </section>
    </div>
  );
};

export default BGAwrapper;
