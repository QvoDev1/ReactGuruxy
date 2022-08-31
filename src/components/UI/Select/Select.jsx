import styled from "styled-components"
import { Select as MuiSelect } from "@mui/material"
import { makeStyles } from "@mui/styles"
import COLORS from "../../../resources/colors"

const UISelect = styled(MuiSelect)`
    background: #e6d9eb44;
    border-radius: 20px;
    & .MuiSelect-select {
        overflow: hidden;
        color: ${COLORS.white};
    }
`

const useStyles = makeStyles({
    customOutline: {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "white"
      }
    }
  });

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

const Select = (props) => {

    const classes = useStyles()

    return <UISelect {...props} fullWidth variant="filled" classes={{ root: classes.customOutline }} size="small">
        {props.children}
    </UISelect>
}

export default Select;