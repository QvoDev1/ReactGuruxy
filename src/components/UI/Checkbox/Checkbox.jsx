import { Checkbox as MuiCheckbox, FormControlLabel } from "@mui/material"

const Checkbox = (props) => {
    return (
        <FormControlLabel
          value={props.value}
          control={<MuiCheckbox color="primary" />}
          label={props.label}
          
        />
    )
}

export default Checkbox;