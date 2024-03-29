/* eslint-disable react/prop-types */
import { useState } from "react";
import "../products_fetcher/productsFetcher.css";
import Loader from "../../utils/loader";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../../utils/useScrollToTop";
import { v4 as uuidv4 } from "uuid";
import PlaceholdeImg from "../../assets/images/image.png";
const ProductCard = ({ props }) => {
  const { products, status, activeProduct } = props;
  const navigate = useNavigate();

  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  if (status === "loading") {
    return (
      <div className="product_loader">
        <Loader />
      </div>
    );
  }

  if (status === "error" || !Array.isArray(products) || products.length === 0) {
    return (
      <div key={uuidv4()} className="no_product_found">
        <h3>Toshbozor: Mahsulotlar tez orada joylanadi.</h3>
      </div>
    );
  }

  const activeProductPrefix = activeProduct;
  const getCategoryPrefix = (activeProductPrefix) => {
    switch (activeProductPrefix) {
      case "paving":
        return "Bruschatka:";
      case "marble":
        return "Granit:";
      case "agglomerate":
        return "Aglomerat:";
      default:
        return "";
    }
  };

  return (
    <>
      {products.map((product) => (
        <div
          onClick={() => {
            navigate(`/products/${product.productname}`, {
              state: { product },
            });
            scrollToTop();
          }}
          key={product._id}
          className="bga_card"
        >
          <div className="bga_product_image_wrapper">
            {product.image &&
              product.image.length > 0 &&
              product.image[0].url && (
                <>
                  {!loaded && (
                    <div>
                      <img
                        src={PlaceholdeImg}
                        className="bga_product_image"
                        alt=""
                      />
                    </div>
                  )}
                  <img
                    loading="lazy"
                    className={`bga_product_image ${loaded ? "loaded" : ""}`}
                    src={product.image[0].url}
                    alt={product.productname}
                    onLoad={handleImageLoad}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = PlaceholdeImg;
                    }}
                  />
                </>
              )}
          </div>

          <div className="bga_product_text_info">
            <div className="product_text_info_wrapper">
              {product.type === "curb" ? (
                <span className="pre_info">Bordyur:</span>
              ) : (
                <span className="pre_info">
                  {getCategoryPrefix(activeProductPrefix)}
                </span>
              )}

              <h1 className="bag_product_name">
                &quot;{product.productname}&quot;
              </h1>
            </div>
            <div className="product_text_info_wrapper">
              <span className="pre_info"> O’lcham:</span>
              <h2 className="bga_product_size">{product.width}</h2>
              <span className="x_devider">x</span>
              <h2 className="bga_product_size">{product.height}</h2>
            </div>
            <div className="product_text_info_wrapper">
              <span className="pre_info"> Narx:</span>
              <h2 className="bag_product_price">
                {product.price}
                <span className="uzs">
                  {activeProductPrefix !== "paving" ? " $" : " UZS"}
                </span>
              </h2>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
