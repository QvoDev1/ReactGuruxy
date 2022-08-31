import { Checkbox as MuiCheckbox, FormControlLabel } from "@mui/material"
import styled from "styled-components";
import COLORS from "../../../resources/colors";


const Label = styled(FormControlLabel)`
  color: ${COLORS.white};
  width: 100%;
`

const Checkbox = ({onClick, value, label}) => {
  return (
    <Label
      control={<MuiCheckbox style={{
        color: COLORS.white
      }} value={value} onChange={onClick} />}
      label={label}
    />
  )
}

export default Checkbox;