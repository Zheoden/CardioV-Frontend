import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { getVideos } from 'src/api/VideoService';
import { VideosDto } from 'src/api/Interfaces';
import { Button } from '@mui/material';
import Layout from '../Layout/Layout';
import VideoCard from 'src/components/VideoCard/VideoCard';
import VideoUploadModal from 'src/components/VideoUploadModal/VideoUploadModal';
import './Videos.scss';

const Videos = () => {
  const [videos, setVideos] = useState<VideosDto[]>([]);
  const [filteredVideos, setFilteredVideos] = useState<VideosDto[]>([]);
  const [buscador, setBuscador] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [deleteRequest, setDeleteRequest] = useState<boolean>(false);

  const handleModalState = () => setOpenModal(!openModal);
  const handleDeleteRequest = () => setDeleteRequest(!deleteRequest);

  useEffect(() => {
    getVideos(buscador)
      .then((data: VideosDto[]) => {
        setVideos(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [openModal, deleteRequest]);

  useEffect(() => {
    const filterRegex = new RegExp(`.*${buscador.toLowerCase()}.*`);
    const filtered = videos.filter(
      video =>
        video.title.toLowerCase().match(filterRegex) ||
        video.description.toLowerCase().match(filterRegex) ||
        video.patology.toLowerCase().match(filterRegex),
    );
    setFilteredVideos(filtered);
  }, [buscador, videos]);

  return (
    <Layout>
      <div className='flex flex-col lg:ml-20 sm:ml-8 ml-4'>
        <div className='flex flex-row justify-between mt-4'>
          <div className='flex relative my-auto'>
            <div className='flex absolute inset-y-0 left-0 items-center pl-1 pointer-events-none'>
              <SearchIcon className='w-5 h-5 text-gray-500' />
            </div>
            <input
              type='search'
              placeholder='Buscador'
              value={buscador}
              onChange={e => setBuscador(e.target.value)}
              className='flex w-full p-3 pl-8 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
            />
          </div>

          <div className='lg:mr-8 mx-4 my-auto'>
            <Button variant='outlined' onClick={handleModalState}>
              Subir Video
            </Button>
            <VideoUploadModal handleModalState={handleModalState} openModal={openModal} />
          </div>
        </div>
        <div className='flex flex-wrap mx-auto'>
          {filteredVideos.length > 0 ? (
            filteredVideos.map(video => <VideoCard video={video} handleDeleteRequest={handleDeleteRequest} key={video.id} />)
          ) : (
            <div className='flex mx-auto'> No se encontraron videos que coincidan con su busqueda</div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Videos;
