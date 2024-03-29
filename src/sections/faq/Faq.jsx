import { useState } from "react";
import "./faq.css";
import { FAQ_STATIC } from "../../static/FAQ_STATIC";
import { FaqItem } from "./FaqItems";

const Faq = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="faq_section">
      <h1 className="faq_title_text">FAQ:Bilim bazasi</h1>
      <div className="devider"></div>

      <ul className="faq_wrapper">
        {FAQ_STATIC.map((faq, id) => {
          return (
            <FaqItem
              key={id}
              onClick={() => (id === openId ? setOpenId(null) : setOpenId(id))}
              isOpen={id === openId}
              faq={faq}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Faq;
