import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Button } from "@mui/material";
import { FormContainer } from "./Register.styled";
import InputText from "../../UI/Input/Input";
import Select from "../../UI/Select/Select";
import Checkbox from "../../UI/Checkbox/Checkbox";
import UserCircle from "../../../../elements/logos/UserCircle"

const idTypes = ["CC", "NIT", "CE", "TI", "PSP"];

const Formx = (props) => {
  return (
    <FormContainer>
      <UserCircle color="#fec812" />
      <div class="">
        <InputText label="Nombres" required />
        <InputText label="Apellidos" required />
        <InputText label="Contraseña" required />
        <InputText label="Email" required />
        <InputText label="Celular" required />

        {/* <label htmlFor="demo-simple-select-filled">Tipo de documento:</label> */}
        <Select label="Tipo de documento:" value={props.value} required>
          <MenuItem value="" selected>
            Seleccionar una opción
          </MenuItem>
          {idTypes.map((type) => (
            <MenuItem value={type} key={type}>
              {type}
            </MenuItem>
          ))}
        </Select>


        <InputText label="Numero de documento" required />
        <Checkbox value={1} label="Acepto Terminos y Condiciones" />
        <Checkbox value={1} label="Acepto Política de Tratamiento de datos" />
        <Button variant="contained" color="warning" disableElevation>
          CREAR USUARIO
        </Button>
      </div>
    </FormContainer>
  );
};

export default Formx;
