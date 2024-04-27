import {} from "react";
import "./contact.css";
import ContactForm from "./ContactForm";
import { sendEmail } from "../../utils/email";
import {  toast } from "sonner";

const Contact = () => {
  const handleSubmit = async ({ name, phoneNumber, message }) => {
    try {
      await sendEmail({ name, phoneNumber, message });
      toast.success("Habaringiz jo‘natildi", {
      
      });
    } catch (error) {
      toast.error("Xatolik yuzberdi habaringiz jo‘natildimadi", {
        style: {
          padding: "20px",
          fontSize: "16px",
        },
      });
    }
  };

  return (
    <section className="contact_section">
      <div className="conatct_text_wrapper">
        <div className="text_wrapper">
          <h1 className="form_text_title">
            <b>&quot;TOSHBOZOR&quot;</b> bilan tog’ri tanlov qiling !
          </h1>
          <p className="form_text_paragraph">
            Ma’lumotlaringizni qoldiring va sizga tez fursatda a&apos;loqaga
            chiqamiz.
          </p>
        </div>

        <ContactForm onSubmit={handleSubmit} />
      </div>
    </section>
  );
};

export default Contact;
