/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

const ImageComponent = ({ image, style, imageStyle }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = image;
  }, [image]);

  return (
    <div style={style}>
      {!imageLoaded && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <Blurhash
            hash="LCOfiN_NnhtRtRofbHWBban%kCaK"
            width="100%"
            height="100%"
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        </div>
      )}
      {imageLoaded && <img style={imageStyle} src={image} alt="image" />}
    </div>
  );
};

export default ImageComponent;
