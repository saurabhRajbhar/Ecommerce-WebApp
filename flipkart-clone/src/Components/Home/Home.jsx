import React, { useEffect } from "react";
import Navebar from "./Navebar";
import Banner from "./Banner";
import styled from "@emotion/styled";
import { Box} from "@mui/material";
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch  , useSelector} from "react-redux";
import Slide from "./Slide";
import AllItems from "./AllItems";
import MidSection from "./MidSection";
import Footers from "./Footer";
import MidSlide from "./MidSlide";

const Wrapper  = styled(Box)`
padding:20px 20px;
`;
const Component = styled(Box)`
background: #F2F2F2;
height:8px;
width:'100%';
overflow:'hidden';
`;

const Home=()=>{
  const {products} =  useSelector(state=> state.getProducts);
  console.log(products);
  
const dispatch = useDispatch();
    
    useEffect(()=> {
       dispatch(getProducts());
    }, [dispatch]);

    return(
        <>
    <Navebar/>
    <Component>
    <Wrapper>

         <Banner/>
        <AllItems/>
        <MidSection/>
        <AllItems/>
        <AllItems/>
</Wrapper>
        <Footers/>       
    
        {/* <MidSlide products={products} title="Deal of the Day" timer={true} />
        <Slide products={products} title="Discounts for you" timer={false}/>
        <Slide products={products} title="Top Selection" timer={false}/>
        <Slide products={products} title="Recommended Items" timer={false} />
        <Slide products={products} title="Trending Offers" timer={false} />
        <Slide products={products} title="Top Deals on Accessories" timer={false} />
       <Footers/> */}
    </Component>
        </>
    )
}
export default Home;