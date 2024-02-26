import { Button , ButtonGroup , styled } from "@mui/material"

const Component = styled(ButtonGroup)(({
marginTop:'20px'
}))

const StyleButton = styled(Button)(({
    borderRadius:'50%'
}))
const ButtonGroups =({ increamentCount, decreamentCount, count})=>{
    return(
        <> 
            <Component>
                <StyleButton onClick={decreamentCount}>-</StyleButton>
                <StyleButton disabled>{count}</StyleButton>
                <StyleButton onClick={increamentCount} >+</StyleButton>
            </Component>
        </>
    )
}
export default ButtonGroups; 