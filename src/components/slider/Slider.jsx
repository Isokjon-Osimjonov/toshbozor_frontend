/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slider.css";
import "swiper/css/autoplay";
import "swiper/css/keyboard";
import { EffectCards } from "swiper/modules";
import PlaceholdeImg from "../../assets/images/image.png";

const Slider = ({ images }) => {
  return images && images.length !== 0 ? (
    <Swiper
      navigation={true}
      slidesPerView={1}
      loop={true}
      autoplay={true}
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards, Navigation, Pagination]}
      className="mySwiper"
    >
      {images?.map((image, index) => (
        <SwiperSlide key={index}>
          <img loading="lazy" className="slider_image" src={image.url} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  ) : (
    <img className="paceholer_image" src={PlaceholdeImg} />
  );
};

export default Slider;
