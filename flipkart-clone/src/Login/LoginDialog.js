import styled from "@emotion/styled"
import{Box, Button, Dialog, TextField, Typography, } from "@mui/material"
import { useContext, useState } from "react";
import { authenticateSignup , authenticateLogin } from "../Service/api";
import { DataContext } from "../context/DataProvider";

const Component = styled(Box)`
height:70vh;
width:98vh;
`;

const Image = styled(Box)`
background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
height: 80%;
width: 38%;
padding: 45px 35px;
&> p, &> h5{
    color:#FFFFFF;
    font-weight: 500;
}
`;

const Wrapper=styled(Box)`
display:flex;
flex-direction:column;
padding:25px 35px;
flex:1;
& > div, & > button, & > p {
margin-Top:8px;
}`;

const LoginButton = styled(Button)`
text-transform: none;
background: #FB641B;
background-color:#FB641B;
color: #fff;
height: 40px;
${'' /* border-radius: 2px; */}
&:focus,
  &:active {
    background: #FB641B;
  }
`;
     
const RequestOtp = styled(Button)`
text-transform: none;
background: #fff;
color: #2874f0;
height: 38px;
border-radius: 2px;
box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%)
`;

const Text=styled(Typography)`
font-size :12px;
color: #878787;
`
const CreateAccount=styled(Typography)`
font-size:14px;
textAlign:center;
color: #2874f0;
fontWeight:600;
cursor:pointer;
`;

const Error = styled(Typography)`
font-size:10px;
color:#ff6161;
line-height: 0;
margin-top:10px;
font-weight:600;
`;
const accountInitialValue={
    login:{
       view: 'login',
       heading: 'Login',
       subHeading: "Get access to your Orders, Wishlist and Recommendations"

    },
    signup:{
        view: 'sighup',
        heading: "Looks like you're new here!",
        subHeading: "Sign up with your mobile number to get started"
        
    }
    }

    const signupInitialValue ={
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        phone: '',
    };

    const loginInitialValue = {
        username:'',
        password:'',
    };
const LoginDialog=({open , setOpen})=>{

const [account,toggleAccount] = useState(accountInitialValue.login);
const [signup , setSignup] = useState(signupInitialValue);
const [login , setLogin]  = useState(loginInitialValue);
const [error , setError] = useState(false);

const{setAccount} = useContext(DataContext);

const handleClose=()=>{ 
    setOpen(false);
    toggleAccount(accountInitialValue.login);
    setError(false);
}
const toggleSignup=()=>{
    toggleAccount(accountInitialValue.signup);
}

const onInputChange=(e)=>{
    setSignup({...signup,[e.target.name]: e.target.value});
    // console.log(signup);

}

const signupUser= async ()=>{
   let response=  await authenticateSignup(signup);
   if(!response) return;
   handleClose();
   setAccount(signup.username);
}

  const onValueChange=(e)=>{
    setLogin({...login, [e.target.name]: e.target.value});
  } 

const loginUser= async ()=>{
   let response =await authenticateLogin(login);
   console.log(response)
   if(response.status===200){
    handleClose();
    setAccount(response.data.data.firstname)
   } else{
     setError(true);
   }
}


    return(
        <>
    <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth: 'unset'}}}>
    <Component>
    <Box style={{display:'flex' , height:'100%'}}>
        <Image>
            <Typography variant="h5" style={{fontWeight:'600'}}>{account.heading}</Typography>
            <Typography style={{marginTop:'20px'}}>{account.subHeading}</Typography>
        </Image>
        {
            account.view==='login' ? 
            <Wrapper>
               
             <TextField variant="standard" autoComplete="off" onChange={(e)=> onValueChange(e)} name="username"     label="Enter Username" id="standard-basic"/>
            
              {error && <Error>Invalid username or password</Error> }

                <TextField variant="standard" autoComplete="off" onChange={(e)=> onValueChange(e)} name="password"  label="Enter Password" id="standard-basic"/>
                <Text>By Continuing, you are agree to Flipkart's Terms of Use and privacy Policy.</Text>
                <LoginButton onClick={()=>loginUser()}>Login</LoginButton> 
                <Typography style={{textAlign:'center'}}>OR</Typography>
                <RequestOtp>Request OTP</RequestOtp>
                <CreateAccount onClick={()=>toggleSignup()}>New to Flipkart? create an account</CreateAccount>
                </Wrapper>
        : 
        <Wrapper>
                <TextField variant="standard" autoComplete="off"  onChange={(e)=> onInputChange(e)} label="Enter FirstName" id="standard-basic"  name="firstname"/>
                <TextField variant="standard" autoComplete="off"  onChange={(e)=> onInputChange(e)} label="Enter LastName" id="standard-basic"  name="lastname"/>
                <TextField variant="standard" autoComplete="off"  onChange={(e)=> onInputChange(e)} label="Enter UserName" id="standard-basic"  name="username"/>
                <TextField variant="standard" autoComplete="off"  onChange={(e)=> onInputChange(e)} label="Enter Email address" id="standard-basic"  name="email"/>
                <TextField variant="standard" autoComplete="off"  onChange={(e)=> onInputChange(e)} label="Enter Password" id="standard-basic"  name="password"/>
                <TextField variant="standard" autoComplete="off"  onChange={(e)=> onInputChange(e)} label="Enter Phone Number" id="standard-basic"  name="phone"/>
                <LoginButton onClick={()=>signupUser()} >Continue</LoginButton> 
                </Wrapper>
        }
        </Box>
    </Component>
    </Dialog>    
        </>
    )
} 
export default LoginDialog;