import styled from "styled-components";
import { TextField } from "@mui/material";

const FormContainer = styled.div`
  width: 650px;
  height: 750px;
  background-color: #63388f;
  border: 1px solid white;
  border-radius: 10px;
  z-index: 2;
  text-align: center;
  align-items: center;
  padding: 50px 100px;
  position: relative;

  & svg.user-circle {
    width: 128px;
    height: 128px;
    left: 261px;
    top: -80px;
    position: absolute;
  }
  & MuiFormControlLabel-root {
    color: white;
  }
`;

export { FormContainer };
