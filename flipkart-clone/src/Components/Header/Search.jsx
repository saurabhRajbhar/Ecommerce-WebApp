import React, { useState } from "react";
import styled from "@emotion/styled";
import { InputBase, Box, ListItem , List} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { products } from "../../Constants/Data";
import { NavLink } from "react-router-dom";

const SearchContainer = styled(Box)`
background: #fff;
width:38%;
border-radius: 2px;
margin-left:10px;
display:flex;`

const InputSearchBase = styled(InputBase)`
padding-left:20px;
width:100%;
font-size:unset;
`;

const SearchIconWrappre=styled(Box)`
color:#2874f0;
padding:5px;
height:10px;
display:flex;
`
const ListWrapper = styled(List)(({
    position:'absolute',
    background:'#FFFFFF',
    color:'#000',
    marginTop:'36px'
    
}))

const Search =()=>{
const [text , setText] = useState('');
      
    const getText = (text)=>{
        setText(text);     
    }
    return(
        <>
        <SearchContainer>
            <InputSearchBase placeholder="Search for products, brands and more" 
               onChange={(e)=>getText(e.target.value)} 
               value={text}
            />
                <SearchIconWrappre>
                    <SearchIcon/>
                </SearchIconWrappre>
                {
                    text && 
                    <ListWrapper>
                        {
                         products.filter(product=> product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>{
                           return(
                            <ListItem>
                            <NavLink to={`/products/${product.id}`}
                            onClick={() => setText('')}
                            style={{textDecoration:'none' , color:'inherit'}}
                        >
                            {product.title.longTitle}
                            </NavLink>
                            </ListItem>
                           )
                           
                         })
                        }
                    </ListWrapper>

                    
                }
        </SearchContainer>
        </>
    )
}
export default Search;