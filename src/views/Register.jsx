import React from "react";
import Carousel from "../components/Carousel";
import Formx from "../components/Auth/Register/Form";
import "../assets/css/register.css";
import { Slider1, Slider2, Slider3, TextCabecera, SubCabecera } from "../resources/images"
// import NavBar from "./navRegister"


const items = [
  {
    alt: "Imagen 1",
    src: Slider1
  },
  {
    alt: "Imagen 2",
    src: Slider2
  },
  {
    alt: "IMagen 3",
    src: Slider3
  },
]

const Register = (props) => {
  return (
    <div>
      <div className="cabecera">
        <img src={TextCabecera} alt="Logo" width={"100%"} />
      </div>
      <img src={SubCabecera} alt="Logo" width={"100%"} />
      <Carousel items={items} />
      <form>
      <div style={{
        display: "flex",
        justifyContent: "flex-end",
        padding: "120px 50px"
      }}>
        <Formx />
        {/* <img id="imgB" src="src/elements/logos/body.jpg" alt="" /> */}
      </div>
      </form>
    </div>
  );
  
};
export default Register;
