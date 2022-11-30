import { useState } from 'react';
import { Modal, Button, TextField, InputLabel, MenuItem, Select, FormControl } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import UploadIcon from '@mui/icons-material/Upload';
import { uploadVideo } from 'src/api/VideoService';
import Spinner from '../Spinner/Spinner';
import { VideoRequestBody } from 'src/api/Interfaces';

interface VideoUploadModalProps {
  openModal: boolean;
  handleModalState: () => void;
}

const VideoUploadModal = (props: VideoUploadModalProps) => {
  const { openModal, handleModalState } = props;
  const [videoUpload, setVideoUpload] = useState<VideoRequestBody>({
    currentFile: undefined,
    title: '',
    patology: '',
    description: '',
    scale: '',
    age: NaN,
    gender: '',
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleClose = () => {
    setVideoUpload({ ...videoUpload, currentFile: undefined });
    handleModalState();
  };

  const handleVideoSelecction = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event?.target?.files[0];
    const fileExtensions = file?.name.split('.') ?? [];
    const fileExtension = fileExtensions[fileExtensions.length - 1];
    if (fileExtension === 'jpg' || fileExtension === 'jpeg' || fileExtension === 'png' || fileExtension === 'mp4' || fileExtension === 'avi') {
      setVideoUpload({ ...videoUpload, currentFile: file ?? undefined });
    } else {
      window.alert('Solo se soportan archivos de tipo jpg, jpeg, png, mp4 o avi');
    }
  };

  const handleUploadVideo = async () => {
    setLoading(true);
    if (videoUpload.currentFile) {
      uploadVideo(videoUpload)
        .then(res => {
          setLoading(false);
          handleClose();
        })
        .catch(err => {
          setLoading(false);
        });
    } else {
      console.log('Debe seleccionar una imagen o un video para poder subirlo');
    }
  };

  return (
    <Modal open={openModal} onClose={handleClose}>
      <div className='absolute top-1/2 left-1/2 m-auto w-5/12 h-min bg-white border-teal-800 border-2 upload-video'>
        <div className='flex flex-col p-4'>
          <div className='flex flex-row justify-between'>
            <span className='font-bold text-xl'>Subir un Archivo/video</span>
            <div className='cursor-pointer' onClick={handleClose}>
              <CloseIcon />
            </div>
          </div>
          {loading ? (
            <Spinner show />
          ) : (
            <>
              <div className='flex flex-col w-full'>
                <TextField
                  type='text'
                  variant='outlined'
                  label='Paciente'
                  margin='normal'
                  value={videoUpload.title}
                  onChange={e => setVideoUpload({ ...videoUpload, title: e.target.value })}
                />
                <TextField
                  type='text'
                  variant='outlined'
                  label='Patologia'
                  margin='normal'
                  value={videoUpload.patology}
                  onChange={e => setVideoUpload({ ...videoUpload, patology: e.target.value })}
                />
                <TextField
                  type='number'
                  variant='outlined'
                  label='Escala (Candidad de pixeles que reprecentan 1 centimetro)'
                  value={videoUpload.scale}
                  margin='normal'
                  onChange={e => setVideoUpload({ ...videoUpload, scale: e.target.value })}
                />
                <div className='flex flex-row mt-2'>
                  <TextField
                    type='number'
                    variant='outlined'
                    label='Edad'
                    value={videoUpload.age}
                    onChange={e => setVideoUpload({ ...videoUpload, age: Number(e.target.value) })}
                  />
                  <div className='w-full ml-3'>
                    <FormControl fullWidth>
                      <InputLabel id='demo-simple-select-label'>Sexo</InputLabel>
                      <Select
                        labelId='demo-simple-select-label'
                        id='demo-simple-select'
                        value={videoUpload.gender}
                        label='Sexo'
                        onChange={e => setVideoUpload({ ...videoUpload, gender: e.target.value })}>
                        <MenuItem value='MALE'>Masculino</MenuItem>
                        <MenuItem value='FEMALE'>Femenino</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <TextField
                  label='Descripción'
                  variant='outlined'
                  value={videoUpload.description}
                  margin='normal'
                  multiline={true}
                  rows={3}
                  onChange={e => setVideoUpload({ ...videoUpload, description: e.target.value })}
                />
              </div>
              <div className='w-full mt-2'>
                {videoUpload.currentFile ? (
                  <div className='flex flex-row'>
                    <span>{videoUpload.currentFile.name}</span>
                    <div className='cursor-pointer' onClick={() => setVideoUpload({ ...videoUpload, currentFile: undefined })}>
                      <CloseIcon />
                    </div>
                  </div>
                ) : (
                  <label className='flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none'>
                    <span className='flex items-center space-x-2'>
                      <UploadIcon />
                      <span className='font-medium text-gray-600'>Haga clic para subir un archivo</span>
                    </span>
                    <input type='file' className='hidden' accept='.jpg, .jpeg, .png, .mp4, .avi' onChange={handleVideoSelecction} />
                  </label>
                )}
              </div>
              <div className='flex flex-wrap mx-auto mt-8'>
                <div className='mr-4'>
                  <Button
                    variant='outlined'
                    onClick={handleUploadVideo}
                    disabled={
                      !videoUpload.currentFile ||
                      !videoUpload.title ||
                      !videoUpload.description ||
                      !videoUpload.patology ||
                      !videoUpload.age ||
                      !videoUpload.scale ||
                      !videoUpload.gender
                    }>
                    Subir
                  </Button>
                </div>
                <div className='sm:ml-4'>
                  <Button
                    variant='outlined'
                    onClick={handleClose}
                    disabled={
                      !videoUpload.currentFile ||
                      !videoUpload.title ||
                      !videoUpload.description ||
                      !videoUpload.patology ||
                      !videoUpload.age ||
                      !videoUpload.scale ||
                      !videoUpload.gender
                    }>
                    Cancelar
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default VideoUploadModal;
