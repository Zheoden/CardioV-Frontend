import { useState } from 'react';
import { Modal, Button } from '@mui/material';
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
              <div className='flex flex-col w-full mt-8'>
                <input
                  type='text'
                  placeholder='Paciente'
                  value={videoUpload.title}
                  onChange={e => setVideoUpload({ ...videoUpload, title: e.target.value })}
                  className='flex w-full p-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300'
                />
                <input
                  type='text'
                  placeholder='Patologia'
                  value={videoUpload.patology}
                  onChange={e => setVideoUpload({ ...videoUpload, patology: e.target.value })}
                  className='flex w-full p-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 mt-2'
                />
                <input
                  type='text'
                  placeholder='Escala (Candidad de pixeles que reprecentan 1 centimetro)'
                  value={videoUpload.scale}
                  onChange={e => setVideoUpload({ ...videoUpload, scale: e.target.value })}
                  className='flex w-full p-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 mt-2'
                />
                <textarea
                  placeholder='Descripcion'
                  value={videoUpload.description}
                  onChange={e => setVideoUpload({ ...videoUpload, description: e.target.value })}
                  className='flex w-full p-2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 mt-2'
                />
              </div>
              <div className='w-full mt-8'>
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
                      <span className='font-medium text-gray-600'>Arrastra un archivo para subirlo, o Buscalo</span>
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
                    disabled={!videoUpload.currentFile || !videoUpload.title || !videoUpload.description || !videoUpload.patology}>
                    Subir
                  </Button>
                </div>
                <div className='sm:ml-4'>
                  <Button
                    variant='outlined'
                    onClick={handleClose}
                    disabled={!videoUpload.currentFile || !videoUpload.title || !videoUpload.description || !videoUpload.patology}>
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
