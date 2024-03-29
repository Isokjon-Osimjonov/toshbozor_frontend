/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import "./contact.css";
import { Input, TextAreaInput } from "../../utils/input";
import { formatInputValue } from "../../utils/format-phone";
import { toast } from "sonner";

const ContactForm = ({ onSubmit }) => {
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
        style: {
          padding: "20px",
          fontSize: "16px",
        },
      });
    }

    onSubmit({ name, phoneNumber, message, inputValue });
    setName("");
    setPhoneNumber("");
    setInputValue("998");
    setMessage("");
    setError(false);
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

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="form_wrapper">
      <div className="form_inputs_wrapper">
        <Input
          className="input_field"
          label="Ismingiz"
          type="text"
          name="name"
          placeholder="Ismingizni yozing"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={error ? { boxShadow: "0px 0px 1px 1px #ff6464" } : {}}
        />

        <Input
          className="input_field"
          label="Telefon raqamingiz"
          type="tel"
          name="phone_number"
          placeholder="+998 90 123 45 67"
          value={isFocused ? phoneNumber : phoneNumber}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          style={error ? { boxShadow: "0px 0px 1px 1px #ff6464" } : {}}
        />

        <TextAreaInput
          className="input_field"
          label="Habaringiz"
          name="message"
          placeholder="Habaringizni yozing"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={error ? { boxShadow: "0px 0px 1px 1px #ff6464" } : {}}
        />
      </div>
      <button type="submit" className="form_send_btn">
        Jo’natish
      </button>
    </form>
  );
};

export default ContactForm;
