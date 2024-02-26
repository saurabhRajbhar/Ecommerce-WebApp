import { Badge, Box, Button,  Typography ,styled} from "@mui/material";
import React, { useContext, useState } from "react";
import {ShoppingCart} from '@mui/icons-material';
import LoginDialog from "../../Login/LoginDialog";
import { DataContext } from "../../context/DataProvider";
import Profile from "./profile";
import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Wrapper=styled(Box)(({theme}) =>({
    display:'flex',
    margin:'2px 3% 0 auto',
   '& > button, & > p , & > div':{
        marginRight:'45px',
        fontSize: '16px',
        alignItems:'center',
    }
    , [theme.breakpoints.down('md')]: {
        display:'block',
    },
}));


const Container = styled(NavLink)`
display:flex;
marginTop:'8px';
color:#FFFFFF;
text-decoration:none;
${'' /* text-decoration:underline; */}
&:hover {
    text-decoration: underline; /* Apply underline on hover */
  }
`;

const LoginButton = styled(Button)`
color: #2478f0;
background:#FFFFFF;
text-transform:none;
padding:2px 30px;
border-radius:2px;
box-shadow:none;
font-weight:600px;
margin:5px;
height:30px;
`;

// const CartTypography = styled(Typography)`
//   &:hover {
//     font-size: 18px; /* Define the font size you want on hover */
//   }
// `;
// const ShoppingCartIcon=styled(ShoppingCart)`


const CustomButtons=()=>{
    const {cartItems} = useCart();

const [open , setOpen] = useState(false);
const { account ,setAccount} = useContext(DataContext);
const OpenDialog=()=>{
    setOpen(true);
}
    return(
        <>
            <Wrapper>
            {
                account ? <Profile account = {account} setAccount={setAccount}/> 
                : 
                <LoginButton variant="contained"  onClick={()=>OpenDialog()} >Login</LoginButton>
            }
            <Typography style={{marginTop:7 , width:135}}>Become a Seller</Typography> 
            <Typography style={{marginTop:7  }}>More</Typography>
            
            <Container to='/cart' marginTop={1}> 
            <Badge badgeContent={cartItems.length} color="error" style={{marginTop:'3px'}}>
            <ShoppingCart style={{marginTop:'2px', marginRight:'5px'}}/>
            </Badge>
            <Typography marginTop={1}>Cart</Typography>
            </Container>

            <LoginDialog  open={open} setOpen={setOpen}/>
            </Wrapper>
        </>
    )
}

export default CustomButtons;