import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
// import { Button } from "@mui/material";
import { FormContainer } from "./Register.styled";
import InputText from "../../UI/Input/Input";
import Select from "../../UI/Select/Select";
import Checkbox from "../../UI/Checkbox/Checkbox";
import UserCircle from "../../../icons/UserCircle";
import Button from "../../UI/Button/Button";
import { useState } from "react";
import COLORS from "../../../resources/colors";

import Login from "../../../views/Login";

const idTypes = ["CC", "NIT", "CE", "TI", "PSP"];

const Formx = (props) => {

  const [terms, setTerms] = useState({
    terms_and_conditions: false,
    data_policy: false
  })

  const handleTermAndConditions = () => {
    setTerms({ ...terms, terms_and_conditions: !terms.terms_and_conditions })
  }
  const handleDataPolicy = () => {
    setTerms({ ...terms, data_policy: !terms.data_policy })
  }

  return (
    <FormContainer>
      <UserCircle color={COLORS.secondary} />
      <div className="">
        <InputText label="Nombres" required />
        <InputText label="Apellidos" required />
        <InputText label="Contraseña" required />
        <InputText label="Email" required />
        <InputText label="Celular" required />

        {/* <label htmlFor="demo-simple-select-filled">Tipo de documento:</label> */}
        <Select label="Tipo de documento:" required>
          <MenuItem selected>
            Seleccionar una opción
          </MenuItem>
          {idTypes.map((type) => (
            <MenuItem value={type} key={type}>
              {type}
            </MenuItem>
          ))}
        </Select>

        <InputText label="Numero de documento" required />

        <div style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "column",
          margin: "20px 0"
        }}>
          <Checkbox onClick={handleTermAndConditions} value={terms.terms_and_conditions} label="Acepto Terminos y Condiciones" />
          <Checkbox onClick={handleDataPolicy} value={terms.data_policy} label="Acepto Política de Tratamiento de datos" />
        </div>
        <Button block disabled={!(terms.data_policy && terms.terms_and_conditions)}>CREAR USUARIO</Button>
       
        <b style={{ color: "#fec812" }}>¿Ya tienes una cuenta? <a href='../../../Login'style={{ color: "#fff" ,textDecoration:'none'}}>Ingresa Aqui.</a></b>
      </div>
    </FormContainer>
  );
};

export default Formx;
