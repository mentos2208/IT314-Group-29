import login_photo from './login_photo.jpg'
import './App.css';
import { TextField, Typography, createTheme } from '@mui/material/';
import { ThemeProvider } from '@mui/material/';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const theme = createTheme({
  palette:{
    primary:{main:"#CEB014"},
    secondary:green
  }
})

function SignUp() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{backgroundImage:`url(${login_photo})`,height:"100vh",backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center',display:'flex',justifyContent:'right'}}>
        <div className='signIn' style={{width:"334px",height:"498px",background:"rgba(90,90,90,0.5)",borderRadius:'30px',marginTop:'137px',marginRight:'130px'}}> 
          <Typography style={{color:'#FFFFFF',fontWeight:'bolder',fontSize:'30px',marginTop:'30px'}}>Sign Up</Typography>
          <TextField id="outlined-basic" label="Email" variant="outlined" style={{background:"rgba(250,249,246,0.1)",borderRadius:"5px",marginBottom:'30px',marginTop:'35px'}}/>
          <TextField id="outlined-basic" label="Password" variant="outlined" style={{background:"rgba(250,249,246,0.1)",borderRadius:"5px",marginBottom:'30px'}}/>
          <TextField id="outlined-basic" label="Confirm Password" variant="outlined" style={{background:"rgba(250,249,246,0.1)",borderRadius:"5px",marginBottom:'30px'}}/>
          <Button variant="contained" sx={{fontWeight:"bolder",width:'220px',height:'50px',fontSize:'20px',textTransform:'none',marginBottom:'30px'}} disableElevation>Sign Up</Button>
          <NavLink to='/' style={{textDecoration:'none'}}>
            <div style={{display:'flex',justifyContent:'center'}}>
              <Typography style={{color:'white'}}>Already have an account?</Typography><Typography style={{color:'#CEB014'}}> Sign in here</Typography>
            </div>
          </NavLink>
          
          
          
        </div>
      </div>
    </ThemeProvider>
  );
}

export default SignUp;