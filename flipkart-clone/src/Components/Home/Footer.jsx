import {  Grid,  Typography , styled,Box,} from "@mui/material";
import Carousel from "react-multi-carousel";
import { Link  , NavLink} from 'react-router-dom';
const Heading = styled(Typography)(({
fontSize:'12px',
marginTop:30,
color:'#878787',
}))
const FooterWords = styled(Typography)(({
 fontSize:'12px',
 color:'#FFFFFF',
//  marginRight:'10px',
//  gap:'5px'
})) 

const Links = styled(NavLink)(({
  color: '#FFFFFF',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const Containers = styled(Grid)({
    width:'100%',
    display: 'flex',
    flexDirection: 'column',
    minHeight:'50vh', 
    marginTop:"20px",
    // marginRight:'0px',
    backgroundColor:'#333333',

  });

const SetFooter = styled(Box)(({
display:'flex',
justifyContent:'space-evenly',
}))

  const IconImage = styled(Grid)(({
    display:"flex",
    gap:'5px',
    // fontWeight:'10px',
    // // padding:'5px',
    // marginLeft:'80px',
    marginTop:'20px',
    // justifyContent:'space-evenly',
    // padding:'15px 20px'
  }))
      

  
  const IconWords = styled(Typography)(({
    color:'white',
    fontSize:'11px',
    marginTop:'10px',
  }))
  
  // const Image = styled('img')(({ theme }) => ({ 3
  //   // display: 'flex',
  //   marginLeft: '80px',
  //   // padding:'20px 20px',
  //   // height:'30vh',
  //   justifyContent: 'space-between',
  //   // width: '100%',
  //   [theme.breakpoints.down('md')]: {
  //       objectFit: 'cover',
  //       height: 100,
  //   }
// }));
const Image = styled('img')(({theme})=>({
    marginLeft:'80px',
    [theme.breakpoints.down("xs")]: {
      objectFit:'cover',
      // height:'100'
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
const Footers = ()=>{
    const img1= 'https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-image-866c0b.svg'
    const img = 'https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/sell-image-9de8ef.svg'
    const img2 = "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/gift-cards-image-d7ff24.svg"
    const img3 = "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/help-centre-image-c4ace8.svg"
    const img4 = "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg"
    
return(
    <>
    <Carousel 
    responsive={responsive}>

    <Grid >
   <Containers>
    <SetFooter container spacing={1}>
    <Grid item xs={12} sm={6} md={4} lg={2}>
     <Heading variant="h6"> ABOUT </Heading>
    <FooterWords> <Links to='/'> Contact  Us </Links>  </FooterWords>
    <FooterWords variant="h6">  <Links>About Us </Links>  </FooterWords>
     <FooterWords variant="h6"> <Links> Careers</Links> </FooterWords>
     <FooterWords variant="h6"> <Links>Flipkart Stories</Links>  </FooterWords>
     <FooterWords variant="h6"> <Links>Press</Links></FooterWords>
     
     <FooterWords variant="h6"> <Links>Flipkart Wholesale      </Links>  </FooterWords>
     <FooterWords variant="h6"> <Links>Cleartrip               </Links>  </FooterWords>
     <FooterWords variant="h6"> <Links>Corporation Information </Links>  </FooterWords>
    </Grid>

    <Grid item xs={12} sm={6} md={4} lg={2}>
     <Heading variant="h6"> HELP </Heading>
     <FooterWords variant="h6"><Links> Payments               </Links> </FooterWords>
     <FooterWords variant="h6"><Links> Shipping               </Links> </FooterWords>
     <FooterWords variant="h6"><Links> Cancellation & Returns </Links> </FooterWords>
     <FooterWords variant="h6"><Links> FAQ                    </Links> </FooterWords>
     <FooterWords variant="h6"><Links> Report Information     </Links> </FooterWords>
    </Grid>
    
    <Grid item xs={12} sm={6} md={4} lg={2}>
     <Heading variant="h6"> CONSUMER POLICY </Heading>
     <FooterWords variant="h6"> <Links> Cancellation & Returns </Links> </FooterWords>
     <FooterWords variant="h6"> <Links> Term Of use            </Links> </FooterWords>
     <FooterWords variant="h6"> <Links> Security               </Links> </FooterWords>
     <FooterWords variant="h6"> <Links> Privacy                </Links> </FooterWords>
     <FooterWords variant="h6"> <Links> Sitemap                </Links> </FooterWords>
     <FooterWords variant="h6"> <Links> Grievance Redressal    </Links> </FooterWords>
     <FooterWords variant="h6"> <Links> EPR Compliance         </Links> </FooterWords>
    </Grid>    
     
    <Grid item xs={12} sm={6} md={4} lg={2}>
     <Heading variant="h6">     SOCIAL </Heading>
     <FooterWords variant="h6"> <Links> FaceBook </Links> </FooterWords>
     <FooterWords variant="h6"> <Links> Twitter  </Links> </FooterWords>
     <FooterWords variant="h6"> <Links> YouTube  </Links> </FooterWords>
    </Grid>
     

      <Box
        sx={{
          width: '1px', // Adjust the width as needed
          height: '180px', // Adjust the height as needed
          backgroundColor : '#878787', 
          marginTop: '30px',
          marginLeft:'80px'
        }}>
        </Box> 
        
    <Grid  item xs={12} sm={6} md={4} lg={2}>
     <Heading     variant="h6">  Mail Us </Heading>
     <FooterWords variant="h6"> Flipkart Internet Private Limited,  </FooterWords>
     <FooterWords variant="h6"> Buildings Alyssa, Begonia &         </FooterWords>
     <FooterWords variant="h6"> clove Embassy Tech Village,         </FooterWords>
     <FooterWords variant="h6"> Outer Ring Road, Devarabeesanhalli  Village,</FooterWords>
     <FooterWords variant="h6"> Bengaluru, 560103,                   </FooterWords>
     <FooterWords variant="h6"> Karnataka, India                     </FooterWords>
    </Grid>
     

    <Grid item xs={12} sm={6} md={4} lg={2}>
     <Heading variant="h6">Registered Office Address </Heading>
     <FooterWords variant="h6"> Flipkart Internet Private Limited, </FooterWords>
     <FooterWords variant="h6"> Buildings Alyssa, Begonia &  </FooterWords>
     <FooterWords variant="h6"> clove Embassy Tech Village, </FooterWords>
     <FooterWords variant="h6"> Outer Ring Road, Devarabeesanhalli Village, </FooterWords>
     <FooterWords variant="h6"> Bengaluru, 560103, </FooterWords>
     <FooterWords variant="h6"> Karnataka, India </FooterWords>
     <FooterWords variant="h6"> U51109KA2012PTC066107 </FooterWords>
     <FooterWords variant="h6"> Telephone: 044-45614700 </FooterWords>
    
    </Grid>
    </SetFooter>
    <br/>
    <Box style={{width:'100%'}}>
         <hr style={{borderColor:'#878787'}}/>
         </Box>
      <br/>
    
    <Grid  style={{display:'flex'}} container spacing={4}>

    <IconImage  lg={12} sm={10} md={10} xs={12} container>
        <Image src={img} alt="sellerImgae"/>
        <IconWords >Become a Seller</IconWords>
        <Image src={img1} alt="add" />
        <IconWords> Advertise</IconWords>
        <Image src={img2} alt="gift" />
        <IconWords>Gift cards</IconWords>
        <Image src={img3} alt="help"/>
        <IconWords>Help centre</IconWords>
        {/* <Link to ='/'> Hello sellerImgae</Link> */}
        <IconWords marginLeft={8}>© 2022- 2023 Flipkart.com</IconWords>
        <Grid  item xs={12} sm={8} md={4} lg={4} marginTop={1}>
        <Image  src={img4} alt="payments" />
        </Grid>
      </IconImage>
      </Grid>
   </Containers>
   </Grid>
   </Carousel>
  </>
)
}
export default Footers;