import "./main.css";
import Hero from "../../sections/hero/Hero";
import Whytb from "../../sections/why_toshbozor/Whytb";
import TBpros from "../../sections/toshbozor_pros/TBpros";
import Products from "../../sections/product_types/Products";
import Faq from "../../sections/faq/Faq";
import Contact from "../../sections/contact/Contact";

const Main = () => {
  return (
    <div className="components_container">
      <Hero />,
      <Whytb />
      <TBpros />
      <Products />
      <Faq />
      <Contact />
    </div>
  );
};

export default Main;
