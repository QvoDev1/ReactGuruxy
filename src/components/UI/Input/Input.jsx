import styled from "styled-components";
import { TextField, Box } from "@mui/material";

const Input = styled(TextField)`
  background: #e6d9eb44;
  overflow: hidden;
  border: 1px solid gray;
  color: white;
  border: solid white 1px;
  margin-top: 15px;
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
        variant="filled"
      />
    </Box>
  );
};

export default InputText;
