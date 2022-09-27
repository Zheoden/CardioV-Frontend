import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { Profile } from 'src/api/Interfaces';
import { updateProfile } from 'src/api/VideoService';
import { useContextState } from 'src/common/ContextState/ContextState';
import { ActionTypes } from 'src/common/ContextState/Interfaces';
import Layout from '../Layout/Layout';

const ProfileView = () => {
  const { contextState, setContextState } = useContextState();
  const [user, setUser] = useState<Profile>({
    firstName: '',
    lastName: '',
    birthdate: '',
    avatar: '',
  });

  useEffect(() => {
    console.log(contextState.user);
    setUser(contextState.user);
  }, [contextState.user]);

  const handleUpdateProfile = async () => {
    updateProfile(user)
      .then(response =>
        setContextState({
          type: ActionTypes.SetUser,
          value: response,
        }),
      )
      .catch(err => console.log(err));
    console.log('Debe seleccionar una imagen o un video para poder subirlo');
  };

  const handleUpdate = (field: string, value: string) => {
    setUser({
      ...user,
      [field]: value,
    });
  };

  return (
    <Layout>
      <div className='flex flex-col w-full mt-8'>
        <div className='flex flex-row mx-auto'>
          <TextField label='Nombre' variant='standard' value={user.firstName} onChange={value => handleUpdate('firstName', value.target.value)} />
          <div className='ml-8'>
            <TextField label='Apellido' variant='standard' value={user.lastName} onChange={value => handleUpdate('lastName', value.target.value)} />
          </div>
        </div>
        <div className='flex flex-row mt-4 mx-auto'>
          <TextField
            label='Fecha de Nacimiento'
            variant='standard'
            type='date'
            value={user.birthdate}
            sx={{ width: 200 }}
            onChange={value => handleUpdate('birthdate', value.target.value)}
          />
          <div className='ml-8'>
            <TextField label='Avatar' variant='standard' value={user.avatar} onChange={value => handleUpdate('avatar', value.target.value)} />
          </div>
        </div>
        <div className='flex flex-row mt-8 mx-auto'>
          <Button
            variant='outlined'
            onClick={handleUpdateProfile}
            disabled={
              contextState.user.firstName === user.firstName &&
              contextState.user.lastName === user.lastName &&
              contextState.user.birthdate === user.birthdate &&
              contextState.user.avatar === user.avatar
            }>
            Guardar
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default ProfileView;
