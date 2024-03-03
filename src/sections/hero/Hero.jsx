import "./hero.css";
import PavingImg from "../../assets/images/hero_img_paving.svg";
import MarbleImg from "../../assets/images/hero_img_marble.svg";
const Hero = () => {
  return (
    <section className="hero_section">
      <div className="wrapper">
        <div className="left_side">
          <p>Sizga kerakli mahsulot albatta bor!</p>
          <h1>
            <b>TOSHBOZOR</b> bilan mukammal tashqi ko’rinishni kashf eting
          </h1>
          <button className="hero_order_btn">Narxlarni bilish</button>
        </div>
        <div className="right_side">
          <img className="hero_paving_img" src={PavingImg} alt="" />
          <img className="hero_marble_img" src={MarbleImg} alt="" />
        </div>
      </div>

      <button className="hero_order_btn_mobile">Narxlarni bilish</button>
    </section>
  );
};

export default Hero;
