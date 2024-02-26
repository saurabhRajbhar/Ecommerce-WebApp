import { Box ,Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import { LocalOffer as Badge } from "@mui/icons-material";
import styled from "@emotion/styled";

const StyleBadge = styled(Badge)(({
    marginRight:'10px',
    color:'#00CC00',
    fontSize:'18px',
}))

const ColumnText = styled(TableCell)({
fontSize:'14px',
verticalAlign:'baseline',
    marginTop:'10px',
    border:'none',
})
const SmallText = styled(Typography)(({
    fontSize:'14px',
    verticalAlign:'baseline'
}))
const ProductItems =({product})=>{
const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
const fassured= 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
const date = new Date(new Date().getTime()+(5 * 24* 60* 60* 1000));
const formattedDate = date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    weekday: 'long',
  });
    return(
        <>
      <Typography>{product.title.longTitle} </Typography>
      <Typography style={{marginTop:5,color:'#878787' , fontSize:14}}> 
      18 Ratings & 2 Reviews 
       <Box component="span" > <img src={fassured} alt="FlipKartSure" style={{width:76,marginLeft:20}}/></Box> 
       </Typography>
       <Typography>
        <Box component="span" style={{fontSize:28}}> ₹{product.price.cost}  </Box>
        <Box component="span" style={{color:'#878787'}}>₹<strike>{product.price.mrp}</strike></Box>
        <Box component="span" style={{color:'#388E3C'}}> {product.price.discount} </Box>
       </Typography>
       <Typography marginTop={1}>Available offers</Typography>
       <Box marginTop={1.5}>
        <SmallText><StyleBadge/> <b> Bank Offer</b> 10% Instant Discount on SBI Credit Card Txns, up to ₹1500, on orders of ₹5,000 and aboveT&C</SmallText>
        <SmallText><StyleBadge/> <b>Bank Offer </b> 10% Instant Discount on SBI Credit Card EMI Txns, up to ₹1750, on orders of ₹5,000 and aboveT&C</SmallText>
        <SmallText><StyleBadge/> <b>Bank Offer </b>Extra ₹750 off on SBI Credit Card and Credit EMI Txns on Net Cart Value of ₹24,990 and aboveT&C</SmallText>
        <SmallText><StyleBadge/> <b> Special Price </b>Get extra  30% off (price inclusive of cashback/coupon)T&C</SmallText>
        <SmallText><StyleBadge/> <b>Partner Offer </b>Sign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹20,000*Know More</SmallText>
        <SmallText><StyleBadge/> <b>Bank Offer </b>Extra ₹1750 off on SBI Credit Card and Credit EMI Txns on Net Cart Value of ₹49,990 and aboveT&C</SmallText>
        <SmallText><StyleBadge/> <b>Bank Offer </b>5% Cashback on Flipkart Axis Bank CardT&C</SmallText>
       </Box>
       <Table>
        <TableBody>
            <TableRow>
                <ColumnText style={{color:'#878787'}}>Delivery</ColumnText>
                <ColumnText style={{fontWeight:'600'}}>Delivery by {formattedDate} | Free <strike> ₹40</strike>  </ColumnText>
            </TableRow>
            <TableRow>
                <ColumnText style={{color:'#878787'}}>Warranty</ColumnText>
                <ColumnText>No Warranty</ColumnText>
            </TableRow>
            <TableRow>
                <ColumnText style={{color:'#878787'}}>Seller</ColumnText>
                <ColumnText>
                    <Box component="span" color={'#2874f0'}>SuperComNet</Box>
                    <Typography>GST invoice Available</Typography>
                    <Typography>View more Sellers starting from  ₹{product.price.cost} </Typography>
                </ColumnText>
            </TableRow>
            <TableRow>
                <ColumnText colSpan={2} >
                    <img src={adURL} style={{width:300}} alt="flipkartpoints"/>
                </ColumnText>
            </TableRow>
            <TableRow>
                <ColumnText color="#878787">Description</ColumnText>
                <ColumnText> {product.description} </ColumnText>
            </TableRow>
        </TableBody>
       </Table>
        </>
    )
}
export default  ProductItems;