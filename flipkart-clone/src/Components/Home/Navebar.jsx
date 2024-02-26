import { Box , Typography ,styled} from "@mui/material";
import { navData } from "../../Constants/Data";
// import styled from "@emotion/styled";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
const Component= styled(Box)(({theme})=>({
    display: 'flex',
    margin: '40px 130px 0px 130px',
    justifyContent: 'space-between',
    overflow: 'hidden',
    padding:'15px',
    [theme.breakpoints.down('lg')]:{
        margin:0
    }  

}));

const Container=styled(Box)`
padding:19xp 8px;
text-align:center;
`;

const Text=styled(Typography)`
font-size:14px;
font-weight:600;
font-family:inherit;
height:10px;
margin:0px 10px 5px 10px
`;


const responsive = {
    desktop:{
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


const Navebar=()=>{
    return(
        <>
         <Carousel 
          responsive= {responsive}
          arrows={false}
          swipeable={true}
          swipeToSlide={true}
          draggable={true}
        //   showDots={false}
          ssr={true} // means to render carousel on server-side.
        //   autoPlay={true}
          infinite={true}
          slidesToSlide={1}
        //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
        //   autoPlaySpeed={3000}
          keyBoardControl={true}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
          >
          <Box style={{ backgroung:'fff' }}>
        <Component>
        {navData.map(data=>{
            return(
        <Container>
        <img src={data.url} alt="nav" style={{width:64}}/>
        <Text>{data.text}</Text>
         </Container>
        )}
        )}

       </Component>  
       </Box>
       </Carousel>
        </>
    )
}
export default  Navebar;