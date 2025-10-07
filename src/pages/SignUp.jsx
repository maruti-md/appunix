// src/pages/SignUp.jsx
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import GoogleIcon from '@mui/icons-material/Google';
import ComputerIcon from '@mui/icons-material/Computer'; // logo/icon
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";


// Styled Card
const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  borderRadius: '16px',
  backgroundColor: '#1e1e1e',
  boxShadow: '0px 8px 30px rgba(0,0,0,0.5)',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
}));

// Full-width wrapper
const SignUpContainer = styled(Box)(() => ({
  width: '98vw',
  minHeight: '100vh',   // ✅ was height, now minHeight so page scrolls if needed
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // background: "linear-gradient(135deg, #182428ff 0%, #204339ff 50%, #2c644fff 100%)",
  background: "radial-gradient(circle at 20% 30%, #204339ff, #06545479 80%)",
  color: 'white',
  overflowY: 'auto',    // ✅ allow vertical scrolling
  padding: '2rem 1rem', // ✅ some breathing space so footer doesn't overlap
}));


export default function SignUp() {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [nameError, setNameError] = React.useState(false);
  const [nameErrorMessage, setNameErrorMessage] = React.useState('');

  const validateInputs = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const name = document.getElementById('name');

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    if (!name.value || name.value.length < 1) {
      setNameError(true);
      setNameErrorMessage('Name is required.');
      isValid = false;
    } else {
      setNameError(false);
      setNameErrorMessage('');
    }

    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateInputs()) return;

    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <>
      <CssBaseline />
      <SignUpContainer>
        <Card variant="outlined">
          <Typography
            component="h1"
            variant="h4"
            sx={{ fontWeight: 700, textAlign: 'center', mb: 2, color: "#d0dcddf9" }}
          >
            Sign up
          </Typography>

          {/* Form */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            <FormControl>
              <FormLabel htmlFor="name">Full name</FormLabel>
              <TextField
                autoComplete="name"
                name="name"
                required
                fullWidth
                id="name"
                placeholder="Jon Snow"
                error={nameError}
                helperText={nameErrorMessage}
                color={nameError ? 'error' : 'primary'}
                InputProps={{ style: { color: 'white' } }}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                required
                fullWidth
                id="email"
                placeholder="your@email.com"
                name="email"
                autoComplete="email"
                variant="outlined"
                error={emailError}
                helperText={emailErrorMessage}
                color={emailError ? 'error' : 'primary'}
                InputProps={{ style: { color: 'white' } }}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                required
                fullWidth
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="new-password"
                variant="outlined"
                error={passwordError}
                helperText={passwordErrorMessage}
                color={passwordError ? 'error' : 'primary'}
                InputProps={{ style: { color: 'white' } }}
              />
            </FormControl>

            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="success" />}
              label="I want to receive updates via email."
            />

            <Button type="submit" fullWidth variant="contained" 
            sx={{ 
              mt: 2, bgcolor: "#00ff88ff", color: "#000", 
              fontWeight: "bold", 
              borderRadius: "30px",
              py: 1.5,
              "&:hover": { bgcolor: "#0c8c5dff" } 
              }}>
              Sign up
            </Button>
          </Box>

          {/* Divider */}
          <Divider sx={{ my: 2 }}>
            <Typography sx={{ color: 'gray' }}>or</Typography>
          </Divider>

          {/* Google Sign up */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
  {/* ✅ Google Sign-In button */}

  {/* 
  (alias) function GoogleLogin({ onSuccess, onError, useOneTap, 
  promptMomentNotification, type, theme, 
  size, text, shape, logo_alignment, width, locale, 
  click_listener, containerProps, ...props }
  */}
  <GoogleLogin
    onSuccess={(credentialResponse) => {
  const decoded = jwtDecode(credentialResponse.credential);
  console.log("Google User:", decoded);
}}
    onError={() => {
      console.log("Google Sign In Failed");
    }}
    theme='filled_blue'
    size='large'
    text='continue_with'
    shape='circle'
    width='100%'
    logo_alignment='left'
  />

  {/* Existing Sign in link */}
  <Typography sx={{ textAlign: "center" }}>
    Already have an account?{" "}
    <Link href="/signin" variant="body2" sx={{ color: "#00e5ff" }}>
      Sign in
    </Link>
  </Typography>
</Box>
        </Card>
      </SignUpContainer>
    </>
  );
}
