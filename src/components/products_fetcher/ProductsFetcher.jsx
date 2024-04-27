/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./productsFetcher.css";
import Nav from "../fethcer_nav/FetcherNavigation";
import ProductsFetcher from "../../hooks/product-fetcher";
import { BGA_STATIC } from "../../static/STATIC_DATA";
import ProductCard from "../product_card/ProductCard";
import ModalForm from "../modal/Modal";
import { v4 as uuidv4 } from "uuid";

const ProductFetcher = () => {
  const { productType } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  //Fetches the data from the API
  const { products, error, status } = ProductsFetcher({
    endpoint: `/product/${productType}`,
  });

  const activeProductData = BGA_STATIC.find((item) => item.id === productType);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // useEffect(() => {}, [productType]);

  return (
    <div>
      <ModalForm modalIsOpen={isModalOpen} closeModal={toggleModal} />
      <header className="bga_header">
        <Nav activeProduct={productType} setActiveProduct={() => {}} />
        <div className="bga_header_data_wrapper">
          <div className="bga_textinfo_wrapper">
            <div className="bag_product_title_div">
              <span key={uuidv4()} className="toshbozor">
                TOSHBOZOR dan
              </span>
              <br />
              <span key={uuidv4()} className="product_name">
                {activeProductData.name}
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
          <ProductCard products={products} error={error} status={status} />
        </div>

        <div className="offer">
          <h3 className="offer_text">
            Biz sizning
            <strong>
              <i> talablaringiz hohishingiz va o&apos;lchamingizga </i>
            </strong>
            to&apos;liq javob beraoladigan mahsulotlarni ishlab chiqaramiz.
          </h3>
          <button onClick={toggleModal} className="offer_order_btn">
            Buyurtma berish
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductFetcher;
