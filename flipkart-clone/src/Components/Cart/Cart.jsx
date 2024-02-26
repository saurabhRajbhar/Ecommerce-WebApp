import { Grid, Typography, Box , Button ,styled} from "@mui/material";

//Components 
import CartItem from "./CartItem";
import TotalView from "./TotalView";
import { useCart } from "../../context/CartContext";
import EmptyCart from "./EmptyCart";
import { useState } from "react";
const LeftComponent = styled(Grid)(({theme})=>({
paddingRight :'15px',

[theme.breakpoints.down('md')]: {
    marginBottom:'15px'
}

}))


const Container = styled(Grid)(({theme})=>({
    padding:"30px 130px",
    
    [theme.breakpoints.down('md')]:{
        padding:'15px'
    }
}));

const Header = styled(Box)(({
    padding:'15px 24px',
    background:'#fff'
}));

const ButtonWrapper = styled(Box)(({
    padding:'16px 22px',
    background:'#fff',
    boxShadow:'0 -2px 10px 0 rgb(0 0 0 / 10%)' ,
    borderTop:'1px solid #f0f0f0'
}));
 
const StyleButton= styled(Button)(({
    display:'flex',
    marginLeft:'auto',
    background:'#fb641b',
    color:'#fff',
    width:'235px',
    height:'40px',
    borderRadius:'2px',
    fontWeight:'bold',
    marginRight:'5px'
}))
const Cart =()=>{
const {cartItems , removeItem ,count} = useCart();
// const [items,setItems] =useState(cartItems);
// const  [count , setCount] = useState(1);

// const updateItem = (updatedItem, updatedCount)=>{
//     const updatedItems = items.map((item)=>{
//       if (item.id === updatedItem.id){
//         return {...item, count: updatedCount};
//       }
//       return item; 
//     });
//     setItems(updatedItems);
//   };
return(
    <>
      {   
       cartItems && cartItems.length >0 ? (
    <Container container>
    <LeftComponent item lg={9} md={9} sm={12} xs={12} > 
    <Header>
        <Typography> My Cart  ({cartItems.length}) </Typography>
    </Header>
    {
        cartItems.map((item , index)=>{
            return(
               <CartItem key={index} item={item} removeItem={removeItem}/>
            )
        })
    }
    <ButtonWrapper>
        <StyleButton>Place Order</StyleButton>
    </ButtonWrapper>
    </LeftComponent>

{/* for right container */}
   <Grid item lg={3} md={3} sm={12} xs={12}>
   <TotalView cartItems={cartItems} count={count}/>

   </Grid>
    </Container> )
        : 
    <EmptyCart/>
      }
    </>
    )
    }
export default Cart;

