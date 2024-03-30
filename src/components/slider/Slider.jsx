/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.css";
import "swiper/css/autoplay";
import "swiper/css/keyboard";
import { EffectCards } from "swiper/modules";
import PlaceholdeImg from "../../assets/images/image.png";
import ImageComponent from "../ImageComponent";
const Slider = ({ images }) => {
  return images && images.length !== 0 ? (
    <Swiper
      navigation={true}
      slidesPerView={1}
      loop={true}
      autoplay={true}
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards, Navigation, Pagination, Autoplay]}
      className="swiper"
    >
      {images?.map((image, index) => (
        <SwiperSlide className="swiper_slide" key={index}>
          <ImageComponent
            style={{
              borderRadius: "var(--br-16)",
              position: "relative",
              width: "100%",
              height: "100%",
            }}
            imageClassName={"slider_image"}
            image={image.url}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  ) : (
    <img className="paceholer_image" src={PlaceholdeImg} />
  );
};

export default Slider;
