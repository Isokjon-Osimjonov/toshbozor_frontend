/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./productsFetcher.css";
import Nav from "../fethcer_nav/FetcherNavigation";
import ProductsFetcher from "../../hooks/product-fetcher";
import { BGA_STATIC } from "../../static/STATIC_DATA";
import ProductCard from "../product_card/ProductCard";
import ModalForm from "../modal/Modal";
import { v4 as uuidv4 } from "uuid";

const ProductFetcher = () => {
  const [activeProduct, setActiveProduct] = useState("paving");
  const { products, error, status } = ProductsFetcher({
    endpoint: `/product/${activeProduct}`,
  });

  const activeProductData = BGA_STATIC.find(
    (item) => item.id === activeProduct
  );

  //modifying the name of the product
  let modifiedName = activeProductData.name;
  if (activeProduct === "paving") {
    const nameParts = activeProductData.name.split(" ");
    const and = <span className="and"> va </span>;

    modifiedName = [nameParts[0], and, nameParts[1]];
  }
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <ModalForm modalIsOpen={isModalOpen} closeModal={toggleModal} />
      <header className="bga_header">
        <Nav
          activeProduct={activeProduct}
          setActiveProduct={setActiveProduct}
        />
        <div className="bga_header_data_wrapper">
          <div className="bga_textinfo_wrapper">
            <div className="bag_product_title_div">
              <span key={uuidv4()} className="toshbozor">
                TOSHBOZOR dan
              </span>
              <br />
              <span key={uuidv4()} className="product_name">
                {modifiedName}
              </span>
            </div>

            <p className="bga_product_description">
              {activeProductData.description}
            </p>
          </div>

          <img
            className="bga_product_img"
            src={activeProductData.image}
            alt={activeProductData.name}
          />
        </div>
      </header>
      {/* =================== products cards==================== */}
      <section className="bga_products_wrapper">
        <h2 className="bga_title">{activeProductData.name}</h2>
        <div className="bga_products">
          <ProductCard props={{ products, error, status, activeProduct }} />
        </div>

        {activeProduct !== "paving" && (
          <div className="offer">
            <h3 className="offer_text">
              Biz sizning talablaringiz va hohishingizga o&apos;lchamingizga
              to&apos;liq javob beradigan mahsulotlarni ishlab chiqaramiz.
            </h3>
            <button onClick={toggleModal} className="offer_order_btn">
              Buyurtma berish
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default ProductFetcher;
