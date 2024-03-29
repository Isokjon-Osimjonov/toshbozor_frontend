import emailjs from "@emailjs/browser";
import { envVariable } from "../env/env-variables";

export const sendEmail = async ({ name, phoneNumber, message }) => {
  const templateParams = {
    name: name,
    phone_number: phoneNumber,
    message: message,
  };

  await emailjs.send(
    envVariable.SERVICE_ID,
    envVariable.TEMPLATE_ID,
    templateParams,
    envVariable.PUBLIC_KEY
  );
};
