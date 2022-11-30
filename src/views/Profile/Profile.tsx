import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { Profile } from 'src/api/Interfaces';
import { updateProfile } from 'src/api/VideoService';
import { useContextState } from 'src/common/ContextState/ContextState';
import { ActionTypes } from 'src/common/ContextState/Interfaces';
import Layout from '../Layout/Layout';
import { Avatar, Card, CardContent, Divider } from '@mui/material';

const ProfileView = () => {
  const { contextState, setContextState } = useContextState();
  const [user, setUser] = useState<Profile>({
    firstName: '',
    lastName: '',
    birthdate: '',
    avatar: '',
    email: '',
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
      <div className='flex flex-row w-full mt-8 mb-1 font-mono'>
        <div className='flex flex-row mx-auto'>
          <Card>
            <div className='flex flex-col w-full mt-8'>
              <div className='flex flex-row mx-auto'>
                <Avatar
                  src={user.avatar}
                  sx={{
                    height: 64,
                    mb: 2,
                    width: 64,
                  }}
                />
              </div>
              <h2 className='flex mx-auto text-2xl h1'>Datos</h2>
              <Divider />
              <CardContent>
                <div className='flex flex-col w-full'>
                  <div className='flex flex-row mx-auto'>
                    <TextField
                      label='Nombre'
                      variant='outlined'
                      value={user.firstName}
                      margin='normal'
                      onChange={value => handleUpdate('firstName', value.target.value)}
                    />
                  </div>
                  <div className='flex flex-row mx-auto'>
                    <TextField
                      label='Apellido'
                      variant='outlined'
                      value={user.lastName}
                      margin='normal'
                      onChange={value => handleUpdate('lastName', value.target.value)}
                    />
                  </div>
                  <div className='flex flex-row mx-auto'>
                    <TextField disabled label='Email' variant='outlined' margin='normal' value={user.email} />
                  </div>
                </div>
              </CardContent>
              <Divider />
              <div className='flex p-2 mx-auto'>
                <Button
                  variant='outlined'
                  onClick={handleUpdateProfile}
                  disabled={contextState.user.firstName === user.firstName && contextState.user.lastName === user.lastName}>
                  Guardar
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default ProfileView;
