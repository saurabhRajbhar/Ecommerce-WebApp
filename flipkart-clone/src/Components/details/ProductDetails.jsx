import { useParams } from "react-router-dom";
import { products } from "../../Constants/Data.js";
import { Typography, Box , styled , Grid} from "@mui/material";
import ActionItem from "./ActionItem";
import ProductItems from "./ProductItems.jsx";
// import { addToCart } from "../Cart/AddToCart.js";
const Component = styled(Box)(({
  background:'#F2F2F2',
  marginTop:'55px',
  }));
  
  const Container = styled(Grid)({
  background:'#FFFFFF',
  display:'flex',
  });
  
  const RightContainer = styled(Grid)(({theme})=>({
      marginTop:'50px',
      [theme.breakpoints.down('md')]:{
        marginLeft:25,
      }
  }));

const ProductDetails = ()=>{
const {id} = useParams();//useParams is a  hook, allows you to access the parameters from the URL 

// Find the product with the matching ID 
const selectedProduct = products.find((products => products.id ===id));

// const addToCart = (selectedProduct) 
//find() method in JavaScript is an array method used to retrieve the first element in an array that satisfies a specific condition
if(!selectedProduct){
  return(
    <Box>
      <Typography variant="h6">Product not found</Typography>
    </Box>
  );
};

// const addToCart = (product) => {
//   setCartItems([...cartItems, product]); 
// };
  return(
  <>

  <Component>             
  <Container container>
    <Grid item lg={4} md={4} sm={8} xs={12}>
    <ActionItem product={selectedProduct}/>
    </Grid>
    <RightContainer item lg={8} md={8} sm={8} xs={12}>
    <ProductItems product={selectedProduct}/>
    </RightContainer>
  </Container>
  </Component>
    </>
  );
};
export default ProductDetails;