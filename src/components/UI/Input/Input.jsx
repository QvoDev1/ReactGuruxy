import styled from "styled-components";
import { TextField, Box } from "@mui/material";
import COLORS from "../../../resources/colors";

const Input = styled(TextField)`
  background: ${COLORS.input_back_color};
  overflow: hidden;
  border: 1px solid gray;
  color: ${COLORS.white};
  border: solid white 1px;
  border-radius: 20px;
  margin: 10px 0;
`;

const inputProps = {
  underline: {
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
  },
  disableUnderline: true,
};

const inputLabelProps = {
  style: { color: "#ddd" },
};

const InputText = (props) => {
  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: "2px auto" },
      }}
    >
      <Input
        {...props}
        InputProps={inputProps}
        InputLabelProps={inputLabelProps}
        fullWidth
        size="small"
        variant="filled"
      />
    </Box>
  );
};

export default InputText;
