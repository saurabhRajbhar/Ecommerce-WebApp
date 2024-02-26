import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
import { bannerData } from "../../Constants/Data";
// import styled from "@emotion/styled";
import { styled } from "@mui/material";

const Image = styled('img')(({theme})=>({
width:'100%',
height:'230px',
margin:'10px 0 0 0',
[theme.breakpoints.down('lg')] : {
  objectFit:'cover',
  height:170,
},
[theme.breakpoints.down('md')] : {
  objectFit:'cover',
  height:100,
}
}))
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

const Banner=()=>{
    return(
        <>
            <Carousel 
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive= {responsive}
        // arrows={false
        //   ssr={true} // means to render carousel on server-side.
          autoPlay={true}
          infinite={true}
          slidesToSlide={1}
        //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
          >
          
          {bannerData.map(data=>{
            return (
                <Image src={data.url} alt="banner"/>
            )
          })}
            </Carousel>
        </>
    )
}

export default Banner;