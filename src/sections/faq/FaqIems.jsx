/* eslint-disable react/prop-types */
import { useRef } from "react";
import plusIcon from "../../assets/icons/plus_icon.svg";
import minusIcon from "../../assets/icons/minus_icon.svg";

export const FaqItem = ({ faq, onClick, isOpen }) => {
  const itemRef = useRef(null);

  return (
    <li className="faq">
      <div className="question_wrapper">
        <h3 className="question">{faq.question}</h3>
        {isOpen ? (
          <button className="open_close_btn" onClick={() => onClick()}>
            <img src={minusIcon} alt="" />
          </button>
        ) : (
          <button className="open_close_btn" onClick={() => onClick()}>
            <img src={plusIcon} alt="" />
          </button>
        )}
      </div>

      <div
        className="collapse"
        style={
          isOpen ? { height: itemRef.current.scrollHeight } : { height: "0px" }
        }
      >
        <div className="answer" ref={itemRef}>
          {faq.answer}
        </div>
      </div>
    </li>
  );
};
