/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "../products_fetcher/productsFetcher.css";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../ui/loader";
import { scrollToTop } from "../../utils/useScrollToTop";
import { v4 as uuidv4 } from "uuid";
import ImageComponent from "../../components/ImageComponent";

const ProductCard = ({ products, error, status }) => {
  const navigate = useNavigate();
  const { productType, productId } = useParams();

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

  const getCategoryPrefix = (type) => {
    switch (type) {
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
  const productImageStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "var(--br-12)",
    objectFit: "fit",
  };
  return (
    <>
      {products.map((product) => (
        <div
          onClick={() => {
            const path = `/products/${product.productname}`;
            navigate(path, { state: { product } });
            scrollToTop();
          }}
          key={product._id}
          className="bga_card"
        >
          <div className="bga_product_image_wrapper">
            {product.image &&
              product.image.length > 0 &&
              product.image[0].url && (
                <ImageComponent
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                  imageStyle={productImageStyle}
                  image={product.image[0].url}
                />
              )}
          </div>

          <div className="bga_product_text_info">
            <div className="product_text_info_wrapper">
              {product.type === "curb" ? (
                <span className="pre_info">Bordyur:</span>
              ) : (
                <span className="pre_info">
                  {getCategoryPrefix(productType)}
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
                  {productType !== "paving" ? " $" : " UZS"}
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
