import styled from "styled-components";
import COLORS from "../../../resources/colors"

const UiButton = styled.button`
  background: ${secondary => secondary ? COLORS.secondary : COLORS.primary};
  width: ${block => block ? "100%": "auto"};
  border-radius: 20px;
  padding: 10px 0;
  margin: 15px auto;
  border: 1px solid ${secondary => secondary ? COLORS.primary : COLORS.secondary};
  color: ${secondary => secondary ? COLORS.primary : COLORS.secondary};
  font-weight: bold;
`;

const Button = (props) => {
  return <UiButton {...props}>Registrar</UiButton>;
};

export default Button;
