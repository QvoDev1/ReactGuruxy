import React from "react";
import Footer from "../components/Footer";
import Formx from "../components/Auth/Login/Form";
import "../assets/css/register.css";
import { TextCabecera } from "../resources/images";

const Register = (props) => {
  return (
    <div>
      <div className="cabecera">
        <img src={TextCabecera} alt="Logo" width={"100%"} />
      </div>

      <center>
        <form>
          <div
            style={{
              display: "relative",
              justifyContent: "flex-center",
              padding: "120px 50px",
              background: "#fff",
            }}
          >
            <Formx />
          </div>
        </form>
      </center>

      <Footer />
    </div>
  );
};
export default Register;
