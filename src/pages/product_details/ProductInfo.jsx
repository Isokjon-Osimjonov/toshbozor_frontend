import { useLocation } from "react-router-dom";
import "./productinfo.css";
import Slider from "../../components/slider/Slider";
import { useState } from "react";
import ModalForm from "../../components/modal/Modal";

const ProductInfo = () => {
  const location = useLocation();
  const product = location.state.product;
  const images = product.image;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <main className="product_info">
      <ModalForm modalIsOpen={isModalOpen} closeModal={toggleModal} />

      <div className="product_details">
        <h1 className="product_detail_name"> {product.productname} </h1>
        <p className="product_details_description">
          {product.description}
        </p>
        <div className="product_details_price_size">
          <div className="price">
            <h3 className="pre_title">Narx </h3>
            <h1 className="price_title">
              {product.price} {product.type ? <span>UZS</span> : <span>$</span>}
            </h1>
          </div>
          <div className="size_wrapper">
            <div className="size">
              <h3 className="pre_title">Uzunlik</h3>
              <h1 className="size_title">{product.width}</h1>
            </div>
            <div className="size_devider"></div>
            <div className="size">
              <h3 className="pre_title">Balandlik</h3>
              <h1 className="size_title">{product.height}</h1>
            </div>
            <div className="size_devider"></div>
            <div className="size">
              <h3 className="pre_title">Kenglik</h3>
              <h1 className="size_title">{product.length}</h1>
            </div>
          </div>
        </div>
        <button onClick={toggleModal} className="order_btn">
          Buyurtma berish
        </button>
      </div>

      <Slider className="slider_img" images={images} />
    </main>
  );
};

export default ProductInfo;
