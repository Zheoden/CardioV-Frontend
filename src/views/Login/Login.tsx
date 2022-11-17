import LoginButton from 'src/components/Session/LoginButton';
import GoogleIcon from '@mui/icons-material/Google';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const Login = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component='main' sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              'url(https://media.istockphoto.com/vectors/heart-ultrasound-concept-in-flat-style-vector-vector-id1126809074?k=20&m=1126809074&s=612x612&w=0&h=TxjzEj0Bm_yMxQUVDzzhHi1204DeghXxMtZH7wKY2XI=)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: t => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 12,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5' align='center'>
              Sign in
            </Typography>
            <Box component='form' sx={{ mt: 1 }}>
              <div className='flex flex-row bg-cyan-500 hover:bg-cyan-700 rounded-full py-2 px-4'>
                <GoogleIcon />
                <LoginButton text='Iniciar Sesion' className='ml-3' />
              </div>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

/* const Login = () => {
  return (
    <div className='flex flex-col h-screen'>
      <div className='flex flex-col my-auto p-16 bg-slate-50 shadow-2xl'>
        <h1 className='mx-auto mb-8 text-2xl font-bold font-mono'>Login</h1>
        <div className='flex flex-row bg-cyan-500 hover:bg-cyan-700 rounded-full py-2 px-4'>
          <GoogleIcon />
          <LoginButton text='Iniciar Sesion' className='ml-3' />
        </div>
      </div>
    </div>
  );
};
'url(https://previews.123rf.com/images/tastycat/tastycat2107/tastycat210700027/171625457-medical-ultrasound-procedure-concept-vector-flat-healthcare-illustration-cardiology-and-heart-diagno.jpg)' */

export default Login;
