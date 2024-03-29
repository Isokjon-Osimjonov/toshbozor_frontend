import "./inuse.css";
import image1 from "../../assets/examples/1.jpg";
import image2 from "../../assets/examples/2.jpg";
import image3 from "../../assets/examples/3.png";
import image4 from "../../assets/examples/4.png";
import image5 from "../../assets/examples/5.png";
import image6 from "../../assets/examples/6.jpg";
import image7 from "../../assets/examples/7.png";
import image8 from "../../assets/examples/8.jpg";

import LOGO_ICON from "../../assets/images/logo_icon.svg";

const Inuse = () => {
  return (
    <div>
      <main className="inuse_main">
        <h1 className="inuse_main_header">
          <b>TOSHBOZOR</b> ning ish <br /> joyidagi namunalari <br /> bilan
          tanishing
        </h1>
        <img className="inuse_main_logo_icon" src={LOGO_ICON} alt="" />
      </main>
      <section className="examples_main">
        <div className="gird_wrapper">
          <div className="wide">
            <img className="examples_img" src={image1} alt="Image " />
          </div>
          <div className="big">
            <img className="examples_img" src={image2} alt="Image " />
          </div>
          <div className="ultra_wide">
            <img className="examples_img" src={image3} alt="Image " />
          </div>

          <div className="big">
            <img className="examples_img" src={image4} alt="Image " />
          </div>

          <div className="wide">
            <img className="examples_img" src={image5} alt="Image " />
          </div>
          <div className="ultra_wide">
            <img className="examples_img" src={image6} alt="Image " />
          </div>

          <div className="wide">
            <img className="examples_img" src={image7} alt="Image " />
          </div>
          <div className="big">
            <img className="examples_img" src={image8} alt="Image " />
          </div>
          {/* <div className="tall">
          <img
            className="examples_img"
            src="https://images.unsplash.com/photo-1705301766257-c0f31029fcc5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image "
          />
        </div>
        <div className="ultra_wide">
          <img
            className="examples_img"
            src="https://images.unsplash.com/photo-1705301766257-c0f31029fcc5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image "
          />
        </div>
        <div className="big">
          <img
            className="examples_img"
            src="https://images.unsplash.com/photo-1705301766257-c0f31029fcc5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image "
          />
        </div>

        <div className="wide">
          <img
            className="examples_img"
            src="https://images.unsplash.com/photo-1706661849307-9f0ff8155bc9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image "
          />
        </div>
        <div className="wide">
          <img
            className="examples_img"
            src="https://images.unsplash.com/photo-1706661849307-9f0ff8155bc9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Image "
          />
        </div> */}
        </div>
      </section>
    </div>
  );
};

export default Inuse;
