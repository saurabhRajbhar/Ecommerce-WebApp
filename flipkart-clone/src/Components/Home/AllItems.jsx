import { Box , Typography , Divider , Button} from "@mui/material"
import { products } from "../../Constants/Data";
import styled from "@emotion/styled";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Countdown from "react-countdown"
import { NavLink } from "react-router-dom";
const responsive = {
    desktop:{
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    }, 
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const Component = styled(Box)`
  margin-top:10px;
  background:#FFFFFF;
  `;

const Text = styled(Typography)`
font-size:14px;
margin-top:5px;
`;

const Dealtext = styled(Typography)`
font-size:22px;
font-weight:600;
margin-right:25px;
line-height:25px;
`;

const Deal = styled(Box)`
  padding: 15px 20px;
  display: flex;

  `;

const ViewAllButton = styled(Button)`
  margin-Left:auto;
  background-color:#2874f0;
  border-radius:2px;
  font-size:13px;
  font-weight:600;
  `;
  const Timer = styled(Box)`
  display: flex;
  margin-Left:10px;
  align-item:center;
  color:#7f7f7f;
  `;

const Image = styled(`img`)({
    width:'auto',
    height:140,
    // alignContent:'center'
    alignItems:'center'
  })

 
const AllItems = ()=>{
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const renderer = ({hours , minutes, seconds }) => {
        return <Box variant="span">{hours}: {minutes}: {seconds} Left </Box>;
      }
    return(
        <>
    <Component>
            <Deal> 

            {/* {
                products.map(data=>{
                    return(
                        <Dealtext>{data.tagline}</Dealtext>
                    )
                })
            } */}
           <Dealtext>Deal of the day</Dealtext>
        <Timer>
    <img src={timerURL} alt='timer' style={{width:24}}/>
    <Countdown date={Date.now() + 5.04e+7} renderer = {renderer }/> 
      </Timer>
      <ViewAllButton variant='contained' color='primary'>View All</ViewAllButton>
 </Deal>

    <Divider/>
      <Carousel
      responsive= {responsive}
          swipeable={false}
          draggable={false}
        //   ssr={true} // means to render carousel on server-side.
          autoPlay={true}
          infinite={true}
          slidesToSlide={1}
        //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          centerMode={true}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
      >

             {
                products.map(data=>{
                   return(
                    <NavLink to={`products/${data.id}`} style={{textDecoration:'none'}}>
                    <Box textAlign="center" style={{padding:'25px 10px'}}>
                    <Image src={data.url} alt="items"/>
                    <Text style={{fontWeight:600, color:'#212121'}}>{data.title.shortTitle} </Text>
                    <Text style={{color:'green'}}>{data.discount} </Text>
                    <Text style={{color:'#212121' , opacity:'.6'}}>{data.tagline} </Text>
                    </Box>
                    </NavLink>
                   ) 
                })
             }
             </Carousel>
            </Component>
        </>
    )
}

export default AllItems;