import styled from "@emotion/styled";
import { Box,  Typography } from "@mui/material";
import { useEffect, useState } from "react";

const  Header = styled(Box)(({
    padding:'15px 24px',
    background:'#fff',
    borderBottom:'1px solid #f0f0f0'
}));
const Heading = styled(Typography)(({
    color:'#878787',
}))

const Discount = styled(Typography)(({
    color:'green',
    fontWeight:'600',
    fontSize:'18px'
}))

const Container = styled(Box)(({
padding:'15px 24px',
background:'#fff',
'& > p' : {
    marginBottom:'20px',
    fontSize:'14px',
},
'& > h6' :{
marginBottom:'20px'
},
}))
const Price = styled(Box)(({
    float:'right',
}))

const TotalView = ({cartItems , count})=>{
    const [price , setPrice] = useState(0);
    const [disCount , setDiscount] = useState(0);
    
    useEffect(()=>{
        TotalAmount();
    } ,[cartItems , count]);
     

    const TotalAmount=()=>{
       let price = 0, disCount = 0;
        cartItems.forEach((item)=>{
            return(
                price +=item.price.mrp * count,
                disCount+=(item.price.mrp - item.price.cost) *count
            )
        });
        setPrice(price);
        setDiscount(disCount);
    }
    return(
  <>  
   <Box>
      <Header>
        <Heading>PRICE DETAILS</Heading>
      </Header> 
      <Container> 
        <Typography> Price ({cartItems?.length} item)   
          <Price component="span"> ₹{price}  </Price>  
        </Typography>  
        <Typography> Discount  
          <Price component="span"> -₹{disCount}  </Price> 
        </Typography> <Typography> Delivery Charges  
          <Price component="span"> ₹40 </Price>  
        </Typography>  
       <Typography fontSize={16} fontWeight="550" variant="h6"> Total Amount  
          <Price component="span"> ₹{price-disCount+40}</Price>
        </Typography> 
        <Discount>You will save ₹{disCount-40} on this order</Discount> 
      </Container> 
   </Box> 
  </>
    )
}
export default TotalView;