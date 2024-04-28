/* eslint-disable react/prop-types */
import { useState } from "react";
import "./products.css";
import "../../components/products_fetcher/productsFetcher.css";
import Nav from "../../components/fethcer_nav/FetcherNavigation";
import ProductsFetcher from "../../hooks/product-fetcher";
import { BGA_STATIC } from "../../static/STATIC_DATA";
import ProductCard from "../../components/product_card/ProductCard";
import ModalForm from "../../components/modal/Modal";
import { v4 as uuidv4 } from "uuid";

const Products = () => {
  const [activeProduct, setActiveProduct] = useState(BGA_STATIC[0].id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //Fetches the data from the API
  const { products, error, status } = ProductsFetcher({
    endpoint: `/product/${activeProduct}`,
  });

  const activeProductData = BGA_STATIC.find(
    (item) => item.id === activeProduct
  );

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
          {/* product cards section  */}
          <ProductCard products={products} error={error} status={status} />
          {/* product cards section  */}
        </div>

        <div className="offer">
          <h3 className="offer_text">
            Biz sizning <i>buyurtmalaringiz</i> asosida mahsulatlarni tayyorlab
            beramiz!
          </h3>
          <button onClick={toggleModal} className="offer_order_btn">
            Buyurtma berish
          </button>
        </div>
      </section>
    </div>
  );
};

export default Products;
