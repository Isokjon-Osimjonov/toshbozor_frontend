import "./whytb.css";
import LOGO_BC from "../../assets/images/logo_img.svg";
// import LOGO_MOBILE from '../../../assets/images/logo_bc_mobile.png'
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../../utils/useScrollToTop";
const Whytb = () => {
  const navigate = useNavigate();
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

        <button
          onClick={() => {
            navigate("/examples");
            scrollToTop();
          }}
          className="see_catalog_btn"
        >
          Ish namunalari
        </button>
      </div>
      <img className="toshbozor_logo_img" src={LOGO_BC} alt="" />
    </section>
  );
};

export default Whytb;
