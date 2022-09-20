import { useState } from 'react';
import { Modal, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import UploadIcon from '@mui/icons-material/Upload';
import { uploadVideo } from 'src/api/VideoService';
import Spinner from '../Spinner/Spinner';

interface VideoUploadModalProps {
  openModal: boolean;
  handleModalState: () => void;
}
const VideoUploadModal = (props: VideoUploadModalProps) => {
  const { openModal, handleModalState } = props;
  const [currentFile, setCurrentFile] = useState<File | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleClose = () => {
    setCurrentFile(undefined);
    handleModalState();
  };

  const handleVideoSelecction = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event?.target?.files[0];
    const fileExtensions = file?.name.split('.') ?? [];
    const fileExtension = fileExtensions[fileExtensions.length - 1];
    console.log(fileExtension);
    if (fileExtension === 'jpg' || fileExtension === 'jpeg' || fileExtension === 'png' || fileExtension === 'mp4') {
      setCurrentFile(file ?? undefined);
    } else {
      console.log('Solo se soportan archivos de tipo jpg, jpeg, png o mp4');
    }
  };

  const handleUploadVideo = async () => {
    setLoading(true);
    if (currentFile) {
      console.log(currentFile);
      uploadVideo(currentFile)
        .then(res => {
          setCurrentFile(undefined);
          setLoading(false);
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
      <div className='absolute top-1/2 left-1/2 m-auto w-4/12 h-2/6 bg-white border-teal-800 border-2 upload-video'>
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
              <div className='w-full mt-8'>
                {currentFile ? (
                  <div className='flex flex-row'>
                    <span>{currentFile.name}</span>
                    <div className='cursor-pointer' onClick={() => setCurrentFile(undefined)}>
                      <CloseIcon />
                    </div>
                  </div>
                ) : (
                  <label className='flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none'>
                    <span className='flex items-center space-x-2'>
                      <UploadIcon />
                      <span className='font-medium text-gray-600'>Arrastra un archivo para subirlo, o Buscalo</span>
                    </span>
                    <input type='file' className='hidden' accept='.jpg, .jpeg, .png, .mp4' onChange={handleVideoSelecction} />
                  </label>
                )}
              </div>
              <div className='flex flex-row mx-auto mt-8'>
                <div className='mr-4'>
                  <Button variant='outlined' onClick={handleUploadVideo} disabled={!currentFile}>
                    Subir
                  </Button>
                </div>
                <div className='ml-4'>
                  <Button variant='outlined' onClick={handleClose} disabled={!currentFile}>
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
