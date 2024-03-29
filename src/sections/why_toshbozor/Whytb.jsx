import "./whytb.css";
import LOGO_BC from "../../assets/images/logo_img.svg";
// import LOGO_MOBILE from '../../../assets/images/logo_bc_mobile.png'
const Whytb = () => {
  return (
    <section className="why_toshbozor">
      <div className="toshbozor_text">
        <div>
          <h1 className="text_title">
            Nima uchun aynan <b>TOSHBOZOR !</b>
          </h1>
          <p className="text_paragraph">
            Bizningning kompaniyadan mashsulotlarnin tez sifatli va qulay <br />
            narhlarda harid qiling!
          </p>
        </div>

        <button className="see_catalog_btn">Katalog bilan tanishish</button>
      </div>
      <img className="toshbozor_logo_img" src={LOGO_BC} alt="" />
    </section>
  );
};

export default Whytb;
