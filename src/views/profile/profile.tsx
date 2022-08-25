import { TextField } from '@mui/material';

const Profile = () => {
  return (
    <div className='fixed top-0 flex-col'>
      <div className='flex flex-row mt-4'>
        <TextField label='Nombre' variant='standard' />
        <div className='ml-8'>
          <TextField label='Apellido' variant='standard' />
        </div>
      </div>
      <div className='flex flex-row mt-4'>
        <TextField label='Fecha de Nacimiento' variant='standard' />
        <div className='ml-8'>
          <TextField label='Avatar' variant='standard' />
        </div>
      </div>
    </div>
  );
};

export default Profile;
