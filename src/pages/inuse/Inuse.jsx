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
import ImageComponent from "../../components/ImageComponent";

const Inuse = () => {
  const imageStyle = { position: "relative", width: "100%", height: "100%" };
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];

  return (
    <div>
      <main className="inuse_main">
        <h1 className="inuse_main_header">
          <b>TOSHBOZOR</b> ning ish <br /> joyidagi namunalari <br /> bilan
          tanishing
        </h1>
        <img
          loading="lazy"
          className="inuse_main_logo_icon"
          src={LOGO_ICON}
          alt="logo"
        />
      </main>
      <section className="examples_main">
        <div className="grid_wrapper">
          {images.map((image, index) => (
            <div className="wide" key={index}>
              <ImageComponent
                imageStyle={{
                  width: " 100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "var(--br-16)",
                }}
                style={imageStyle}
                image={image}
                key={index}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Inuse;
