import styled from "styled-components";

const FormContainer = styled.div`
  width: 400px;
  background-color: #63388f;
  border: 1px solid white;
  border-radius: 10px;
  z-index: 2;
  text-align: center;
  align-items: center;
  padding: 20px;
  padding-top: 100px;
  position: relative;

  & svg.user-circle {
    width: 128px;
    height: 128px;
    left: 136px;
    top: -80px;
    position: absolute;
  }
  & MuiFormControlLabel-root {
    color: white;
  }
`;

export { FormContainer };
