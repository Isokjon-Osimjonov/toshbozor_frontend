// AppLayout.js
import "./applayout.css";
import Navbar from "../../layout/navbar/Navbar";
import Footer from "../../layout/footer/Footer";
import { Outlet } from "react-router-dom";
import ModalForm from "../../components/modal/Modal";
import { useState } from "react";
import phoneIcon from "../../assets/phone_animation.json";
import Lottie from "lottie-react";
import { Toaster } from "sonner";
const AppLayout = () => {
  const animationData = phoneIcon;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div>
      <Toaster duration={2000} closeButton richColors position="top-right" />

      <Navbar openModal={toggleModal} />
      <main className="main_content_conttainer">
        <Outlet />
        <button
          onClick={() => {
            window.location.href = "tel:+998 90 050 02 62";
          }}
          className="phone_animation"
        >
          <Lottie animationData={animationData} />
        </button>
      </main>
      <Footer />
      <ModalForm modalIsOpen={isModalOpen} closeModal={toggleModal} />
    </div>
  );
};

export default AppLayout;
