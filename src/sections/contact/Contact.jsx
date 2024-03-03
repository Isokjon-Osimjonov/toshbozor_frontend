/* eslint-disable react/prop-types */
import "./contact.css";
const Contact = () => {
  const InputField = ({ label, name, placeholder }) => (
    <div className="input_field">
      <label htmlFor={name}>{label}</label>
      <input type="text" name={name} id={name} placeholder={placeholder} />
    </div>
  );

  const TextareaField = ({ label, name, placeholder }) => (
    <div className="input_field">
      <label htmlFor={name}>{label}</label>
      <textarea
        cols="30"
        rows="5"
        type="text"
        name={name}
        id={name}
        placeholder={placeholder}
      ></textarea>
    </div>
  );

  return (
    <section className="contact_section">
      <div className="conatct_text_wrapper">
        <div className="text_wrapper">
          <h1 className="form_text_title">
            <b>TOSHBOZOR</b> bilan tog’ri tanlov qiling !
          </h1>
          <p className="form_text_paragraph">
            Ma’lumotlaringizni qoldiring va sizga tez fursatda aloqaga chiqamiz
          </p>
        </div>
        {/* <div className="form_wrapper">
          <div className="form_inputs_wrapper">
            <div className="name_input">
              <label htmlFor="name">Ismingiz</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Ismingizni yozing"
              />
            </div>
            <div className="phone_input">
              <label htmlFor="phone">Telefon raqamingiz</label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="+998 90 123 45 67"
              />
            </div>
            <div className="message_input">
              <label htmlFor="message">Habaringiz</label>
              <textarea
                cols="30"
                rows="5"
                type="text"
                name="message"
                id="message"
                placeholder="Habaringizni yozing"
              ></textarea>
            </div>
          </div>
        </div> */}
        <div className="form_wrapper">
          <div className="form_inputs_wrapper">
            <InputField
              label="Ismingiz"
              name="name"
              placeholder="Ismingizni yozing"
              className="name_input"
            />
            <InputField
              label="Telefon raqamingiz"
              name="phone"
              placeholder="+998 90 123 45 67"
            />
            <TextareaField
              label="Habaringiz"
              name="message"
              placeholder="Habaringizni yozing"
            />
          </div>
          <button className="form_send_btn">Jo’natish</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
