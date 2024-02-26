import { Box, Button ,styled} from "@mui/material"
import { ShoppingCart as Carts , FlashOn as Flash } from "@mui/icons-material"
import {useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
const LeftContainer = styled(Box)(({theme}) =>({
  minWidth:'40%',
  padding:'40px 5px 0 80px',
  [theme.breakpoints.down('lg')] : {
    padding:'20px 40px',
  }
}))

const Image = styled('img')(({theme})=>(
  {
    width:'95%',
   padding:'15px',
   [theme.breakpoints.down('md')] : {
    width:'90%'
   }, 
   [theme.breakpoints.down('sm')]: {
    width:'95%'
   }
}))

const StyleButton = styled(Button)(({theme}) =>({
  width:'50%',
  height:'50px',
  borderRadius:'2px',
  [theme.breakpoints.down('lg')]: {
    width:'46%'
  }
  ,
  [theme.breakpoints.down('xl')]: {
    width:'47%'
  }
  ,
  [theme.breakpoints.down('sm')] : {
    width:'47%',
    gap:'5px',
    padding:'2px'
  }
}))

const ActionItem = ({product})=>{

  const navigate = useNavigate(); 
  const {addToCart} = useCart();

  const addItemToCart=()=>{ 
  addToCart(product);
  navigate('/cart')
  };

  if(!product){
    return null;
  }
  const {detailUrl} = product;
  return(
    <>
    <LeftContainer>
      <Box style={{ padding:'15px 20px',border:'1px solid #f0f0f0' }}>
      <Image src={detailUrl} alt="product"/>
      </Box> 
     
      <StyleButton variant="contained" onClick={()=>addItemToCart()} style={{marginRight:10 , background:'#ff9f00'}}> <Carts/> Add to Cart</StyleButton>
      <StyleButton variant="contained" style={{background:'#fb541b'}}><Flash/> Buy Now </StyleButton>
    </LeftContainer>
    </>
  )
}

export default ActionItem;