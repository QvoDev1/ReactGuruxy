import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
// import { Button } from "@mui/material";
import { FormContainer } from "./Login.styled";
import InputText from "../../UI/Input/Input";
import Select from "../../UI/Select/Select";
import Checkbox from "../../UI/Checkbox/Checkbox";
import UserCircle from "../../../icons/UserCircle";
import Button from "../../UI/Button/Button";
import { useState } from "react";
import COLORS from "../../../resources/colors";

const Formx = (props) => {
  const [terms, setTerms] = useState({
    terms_and_conditions: false,
    data_policy: false,
  });

  const handleTermAndConditions = () => {
    setTerms({ ...terms, terms_and_conditions: !terms.terms_and_conditions });
  };
  const handleDataPolicy = () => {
    setTerms({ ...terms, data_policy: !terms.data_policy });
  };

  return (
    <FormContainer>
      <div className="">
        <h3 style={{ color: "#fec812" }}>INGRESAR</h3>
        <hr />
        <InputText label="Correo Electronico" required />
        <InputText label="Contraseña" required />

        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "column",
            margin: "20px 0",
          }}
        ></div>
        <Button block>INICIAR SESSION</Button>
        <b style={{ color: "#fec812" }}>¿No tienes un cuenta? <a href="../../../Register" style={{ color: "#fff",textDecoration:'none' }}>Registrate Aqui.</a></b>
      </div>
    </FormContainer>
  );
};

export default Formx;
