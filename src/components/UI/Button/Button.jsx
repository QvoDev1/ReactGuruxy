import styled from "styled-components";
import COLORS from "../../../resources/colors"

const UiButton = styled.button`
  background: ${bg => bg};
  width: ${block => (block ? "100%" : "auto")};
  border-radius: 20px;
  padding: 10px 0;
  margin: 15px auto;
  border: 1px solid ${text_color => text_color};
  color: ${text_color => text_color};
  font-weight: bold;
`;

// const divideColors = 

const findColors = ({ disabled, secondary }) => {
  if (disabled) {
    return { text: COLORS.text, bg: COLORS.secondary };
  }
  if (secondary) return { text: COLORS.primary, bg: COLORS.third }
  return { text: COLORS.secondary, bg: COLORS.primary }
}

const Button = (props) => {
  let color = findColors(props)
  console.log(color)
  return <UiButton {...props} bg={color.bg} text_color={color.text}>Registrar</UiButton>;
};

export default Button;
