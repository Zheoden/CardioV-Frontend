import { Card, CardMedia, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

export interface HomeCardProps {
  title: string;
  redirect: string;
  thumbnail: string;
  className?: string;
  description?: string;
}

const HomeCard = (props: HomeCardProps) => {
  const { title, redirect, thumbnail, description, className } = props;
  return (
    <div className={`px-8 ${className}`}>
      <Card
        sx={{ maxWidth: 560, minHeight: 180 }}
        className='bg-cover bg-center'
        style={{
          backgroundImage: `url(${thumbnail})`,
        }}>
        <Link to={redirect}>
          <div className='p-4'>
            <div className='flex flex-col font-bold'>
              <h5 className='text-2xl mt-0 mb-2 text-blue-800'>{title}</h5>
              <span className='m-auto text-blue-700'>{description}</span>
              <div
                className='flex self-end'
                onClick={e => {
                  e.stopPropagation();
                  e.nativeEvent.stopImmediatePropagation();
                  console.log(e);
                }}></div>
            </div>
          </div>
        </Link>
      </Card>
    </div>
  );
};

export default HomeCard;
