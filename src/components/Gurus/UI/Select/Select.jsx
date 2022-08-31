import styled from "styled-components"
import { Select as MuiSelect  } from "@mui/material"

const UISelect = styled(MuiSelect)`
    background: #e6d9eb44;
    overflow: hidden;
    border: 1px solid gray;
    color: white;
    margin-top: 15px; 
    border-radius: 20px;
    margin-top: 15px;
`

const Select = (props) => {
    return <UISelect {...props} fullWidth variant="filled">
        {props.children}
    </UISelect>
}

export default Select;