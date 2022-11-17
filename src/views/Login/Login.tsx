import LoginButton from 'src/components/Session/LoginButton';
import GoogleIcon from '@mui/icons-material/Google';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = () => {
  return (
    <div className='flex flex-row h-screen w-screen'>
      <img src='https://media.istockphoto.com/vectors/heart-ultrasound-concept-in-flat-style-vector-vector-id1126809074?k=20&m=1126809074&s=612x612&w=0&h=TxjzEj0Bm_yMxQUVDzzhHi1204DeghXxMtZH7wKY2XI=' />
      <div className='flex-1 p-16 bg-slate-50 shadow-2xl'>
        <div className='flex flex-col h-full'>
          <div className='flex flex-col my-auto'>
            <div className='flex mx-auto'>
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
            </div>
            <h1 className='mx-auto mb-8 text-2xl'>Log in</h1>
            <div className='flex flex-row bg-cyan-500 hover:bg-cyan-700 rounded-full py-2 px-4'>
              <GoogleIcon />
              <LoginButton text='Iniciar Sesion' className='ml-3' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
