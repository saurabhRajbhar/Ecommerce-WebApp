import styled from "@emotion/styled";
import { Typography , Box, Button,} from "@mui/material";
import { addEllipsis } from "../../Util/CommonUtil";
import ButtonGroups from "./ButtonGroup";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
//import ButtonGroups from "./ButtonGroup";
const Container = styled(Box)(({
    borderTop:'1px solid #f0f0f0',
    display:'flex',
    background:'#fff',
}))

const LeftContainer= styled(Box)(({
    margin:'20px',
    display:'flex',
    flexDirection:'column',
}))
const SmallText = styled(Typography)(({
    color:'#878787',
    fontSize:'14px',
    marginTop:'10px',
}))
const Remove =styled(Button)(({
    marginTop:'15px',
    fontSize:'14px',
    color:'#000',
    fontWeight:'600',
}))
const CartItem = ({item,removeItem})=>{   
const {increamentCount,decreamentCount,count} = useCart();
const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
const handleRemove=()=>{
    removeItem(item);
}
    return(
    <>
    <Container>
        <LeftContainer>
            <img src={item.url} alt="product" style={{height:110 ,width:110}}/>
            <ButtonGroups increamentCount={increamentCount} decreamentCount={decreamentCount} count={count} />
        </LeftContainer>
        <Box style={{margin:'20px'}}>
            <Typography>{addEllipsis(item.title.longTitle)} </Typography>
            <SmallText>Seller:RetailNet 
             <Box component='span'> <img src={fassured} alt="flipkart" style={{width:50,marginLeft:10}}/> </Box>
             </SmallText>
        <Typography style={{margin:'20px 0 '}}>
        <Box component="span" style={{fontWeight:600,fontSize:18}}> ₹{item.price.cost*count}  </Box>
        <Box component="span" style={{color:'#878787'}}>₹<strike>{item.price.mrp}</strike></Box>
        <Box component="span" style={{color:'#388E3C'}}>{item.price.discount} </Box>
       </Typography>
       <Remove onClick={handleRemove}>Remove</Remove>
        </Box>
    </Container>
    </>
    )
}

export default CartItem;