import React from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Formx from "../components/Auth/Register/Form";
import { BgImg } from "../components/Auth/Register/Bg.styled";
import "../assets/css/register.css";
import { Slider1, Slider2, Slider3, TextCabecera, SubCabecera,BackBodys } from "../resources/images"
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
      <BgImg>
      <form>
      <div style={{
        display: "flex",
        justifyContent: "flex-end",
        padding: "120px 50px"
      }}>
        <Formx />
   
      </div>
      </form>
      </BgImg>
<Footer/>
    </div>
  );
  
};
export default Register;
