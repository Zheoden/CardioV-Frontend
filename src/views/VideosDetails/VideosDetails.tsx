import { Card, CardMedia, CardContent, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { VideosDetailsDto } from 'src/api/Interfaces';
import { getVideosById } from 'src/api/VideoService';
import Layout from '../Layout/Layout';

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import MedicalInformationTwoToneIcon from '@mui/icons-material/MedicalInformationTwoTone';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import SquareFootIcon from '@mui/icons-material/SquareFoot';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Distribucion del volumen Ventricular',
    },
  },
};

const VideosDetails = () => {
  const params = useParams();
  const [videoDetails, setVideoDetails] = useState<VideosDetailsDto>();
  const [videoExtension, setVideoExtension] = useState<string>('');
  const [atriumArea, setAtriumArea] = useState<number>(0);
  const [muscleThickness, setMuscleThickness] = useState<number>(0);
  const [ventricleArea, setVentricleArea] = useState<number>(0);
  const [ventricleVolume, setVentricleVolume] = useState<number[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const video = await getVideosById(params?.id ?? '');
      setVideoDetails(video);
      const videoParts = video.thumbnail.split('.');
      const videoType = videoParts[videoParts.length - 1];
      setVideoExtension(videoType);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const atrium = videoDetails?.parameters.filter(param => param.field === 'ATRIUM_AREA');
    const muscle = videoDetails?.parameters.filter(param => param.field === 'MUSCLE_THICKNESS');
    const ventricleArea = videoDetails?.parameters.filter(param => param.field === 'VENTRICLE_AREA');
    const ventricleVolume = videoDetails?.parameters.filter(param => param.field === 'VENTRICLE_VOLUME');

    if (atrium && atrium.length > 0) {
      setAtriumArea(atrium.map(atrium => Number(atrium.value)).reduce((a, b) => a + b) / atrium.length);
    }

    if (muscle && muscle.length > 0) {
      setMuscleThickness(muscle.map(muscle => Number(muscle.value)).reduce((a, b) => a + b) / muscle.length);
    }

    if (ventricleArea && ventricleArea.length > 0) {
      setVentricleArea(ventricleArea.map(ventricleArea => Number(ventricleArea.value)).reduce((a, b) => a + b) / ventricleArea.length);
    }

    setVentricleVolume(ventricleVolume?.map(volume => Number(volume.value)) ?? []);
  }, [videoDetails]);

  return (
    <Layout>
      <div className='flex flex-col'>
        <Card className='mx-auto mt-8'>
          {videoDetails &&
            videoExtension &&
            (videoExtension === 'mp4' || videoExtension === 'avi' ? (
              <video className='source-card mx-auto' src={videoDetails.thumbnail} controls />
            ) : (
              <img src={videoDetails.thumbnail} className='flex mx-auto source-card' height='140' width='140' />
            ))}
          <CardContent>
            <h5 className='flex text-2xl mt-0 mb-2 mx-auto w-max'>Detalles</h5>
            <div className='flex flex-col font-bold'>
              <div className='flex flex-col max-w-screen-lg'>
                {!!atriumArea && (
                  <div className='flex flex-row mt-5'>
                    <div className='flex my-auto mr-4'>
                      <Avatar>
                        <SquareFootIcon />
                      </Avatar>
                    </div>
                    <ListItemText primary='Area Auricular' secondary={atriumArea + ' cm3'} />
                  </div>
                )}
                {!!muscleThickness && (
                  <div className='flex flex-row mt-5'>
                    <div className='flex my-auto mr-4'>
                      <Avatar>
                        <MonitorHeartIcon />
                      </Avatar>
                    </div>
                    <ListItemText primary='Espesor de las paredes' secondary={muscleThickness + ' cm3'} />
                  </div>
                )}
                {!!ventricleArea && (
                  <div className='flex flex-row mt-5'>
                    <div className='flex my-auto mr-4'>
                      <Avatar>
                        <TroubleshootIcon color='inherit' />
                      </Avatar>
                    </div>
                    <ListItemText primary='Area Ventricular' secondary={ventricleArea + ' cm3'} />
                  </div>
                )}
                {ventricleVolume.length === 1 && (
                  <div className='flex flex-row mt-5'>
                    <div className='flex my-auto mr-4'>
                      <Avatar>
                        <MedicalInformationTwoToneIcon />
                      </Avatar>
                    </div>
                    <ListItemText primary='Volumen Ventricular' secondary={ventricleVolume[0] + ' cm3'} />
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
        {ventricleVolume.length > 1 && (
          <div className='flex flex-col w-6/12 h-60 mx-auto'>
            <Line
              options={options}
              data={{
                labels: ventricleVolume.map((_, index) => String(index)),
                datasets: [
                  {
                    label: 'Volumen Ventricular',
                    data: ventricleVolume,
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                  },
                ],
              }}
            />
          </div>
        )}
        <div className='flex flex-col mx-auto'>
          {videoDetails?.media.map(media => {
            const mediaParts = media.thumbnail.split('.');
            const mediaExtension = mediaParts[mediaParts.length - 1];
            return (
              <div className='flex flex-col ml-4' key={media.thumbnail}>
                <h2>{media.title}</h2>
                {mediaExtension === 'mp4' || mediaExtension === 'avi' ? (
                  <video className='source-card-media mx-auto' src={media.thumbnail} controls />
                ) : (
                  <img src={media.thumbnail} className='flex mx-auto source-card-media' height='140' width='140' />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default VideosDetails;
