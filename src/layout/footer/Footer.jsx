import "./footer.css";
import footerLogo from "../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import telegramIcon from "../../assets/icons/telegram.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import facebookIcon from "../../assets/icons/Facebook.svg";
import { scrollToTop } from "../../utils/useScrollToTop";
const Footer = () => {
  return (
    <section className="footer">
      <div className="footer_up">
        <div className="footer_left">
          <Link onClick={scrollToTop} to="/">
            <img className="footer_left_logo" src={footerLogo} alt="" />
          </Link>
          <h3 className="footer_phone">+998 90 050 02 62</h3>
          <p className="footer_address">Namangan viloyati</p>
        </div>

        <div className="footer_right">
          <div className="footer_product_types">
            <h4 className="ptoduct_types_title">Mahsulot turlari</h4>
            <ul className="footer_links">
              <NavLink
                onClick={scrollToTop}
                to="/products"
                className="footer_link"
              >
                Bruschatka <br /> Bordyur
              </NavLink>
              <NavLink
                onClick={scrollToTop}
                to="/products"
                className="footer_link"
              >
                Granit
              </NavLink>
              <NavLink
                onClick={scrollToTop}
                to="/products"
                className="footer_link"
              >
                Aglomerat
              </NavLink>
            </ul>
          </div>

          <div className="footer_sm">
            <h4 className="sm_title">Ijtimoiy tarmoqlar</h4>
            <div className="sm_icons">
              <NavLink className="sm_icon" to="https://t.me/toshbozor_uz">
                <img className="footer_sm_icon" src={telegramIcon} alt="" />
              </NavLink>
              <NavLink
                className="sm_icon"
                to="https://www.instagram.com/toshbozor_uz/"
              >
                <img className="footer_sm_icon" src={instagramIcon} alt="" />
              </NavLink>
              <NavLink
                className="sm_icon"
                to="https://www.facebook.com/profile.php?id=61555959114986"
              >
                <img className="footer_sm_icon" src={facebookIcon} alt="" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="footer_down">
        <div className="footer_devider"></div>
        <p className="footer_copyright">
          © Toshbozor 2024.
        </p>
      </div>
    </section>
  );
};

export default Footer;
