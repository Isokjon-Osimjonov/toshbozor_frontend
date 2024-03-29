/* eslint-disable react/prop-types */
import closeIcon from "../../assets/icons/x_icon.svg";
import Logo from "../../assets/logo.svg";

import { useEffect, useRef, useState } from "react";
import "./modal.css";
import { Input } from "../../utils/input";
import { formatInputValue } from "../../utils/format-phone";
import { toast } from "sonner";
import { sendEmail } from "../../utils/email";
import toggleNoScroll from "../../utils/preventScrolling";

const ModalForm = ({ modalIsOpen, closeModal }) => {
  const formRef = useRef();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [inputValue, setInputValue] = useState("+998");
  const [message, setMessage] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !name ||
      name.length === 0 ||
      !phoneNumber ||
      phoneNumber.length < 13 ||
      !message ||
      message.length === 0
    ) {
      setError(true);
      return toast.error("Iltimos, barcha maydonlarni to'ldiring.", {
        duration: 1000,
        style: {
          padding: "20px",
          fontSize: "16px",
        },
      });
    }
    try {
      sendEmail({ name, phoneNumber, message });
      toast.success("Habaringiz jo‘natildi", {
        style: {
          padding: "20px",
          fontSize: "16px",
        },
      });
      setName("");
      setPhoneNumber("");
      setInputValue("998");
      setMessage("");
      setError(false);
    } catch (error) {
      toast.error("Xatolik yuzberdi habaringiz jo‘natildimadi", {
        style: {
          padding: "20px",
          fontSize: "16px",
        },
      });
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    if (!phoneNumber) {
      setPhoneNumber(formatInputValue(inputValue));
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!phoneNumber) {
      setInputValue("");
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;

    if (!value || !value.startsWith("+998")) {
      setInputValue("+998");
      return;
    }

    setInputValue(value);
    setPhoneNumber(formatInputValue(value));
  };

  useEffect(() => {
    toggleNoScroll(modalIsOpen);
  }, [modalIsOpen]);
  return (
    modalIsOpen && (
      <div className="overlay">
        <form
          id="modalForm"
          ref={formRef}
          onSubmit={handleSubmit}
          className={modalIsOpen ? "modal" : "closed_modal"}
        >
          <button onClick={closeModal} className="close_icon">
            <img src={closeIcon} alt="" />
          </button>
          <div className="modal_logo">
            <img src={Logo} alt="" />
          </div>
          <div className="modal_form">
            <Input
              className="modal_input"
              type="text"
              name="name"
              placeholder="Ismingiz"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={error ? { boxShadow: "0px 0px 1px 1px #ff6464" } : {}}
            />

            <Input
              className="modal_input"
              type="tel"
              name="phone_number"
              placeholder="+998 90 123 45 67"
              value={isFocused ? phoneNumber : phoneNumber}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
              style={error ? { boxShadow: "0px 0px 1px 1px #ff6464" } : {}}
            />

            <Input
              className="modal_input"
              name="message"
              placeholder="Mahsulot nomi,habar"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={error ? { boxShadow: "0px 0px 1px 1px #ff6464" } : {}}
            />
            <button type="submit" className="modal_send_btn">
              Jo’natish
            </button>
          </div>
        </form>
      </div>
    )
  );
};

export default ModalForm;
