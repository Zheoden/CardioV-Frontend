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
    <div className={className}>
      <Card sx={{ maxWidth: 275 }}>
        <CardMedia component='video' height='140' src={thumbnail} controls />
        <Link to={redirect}>
          <CardContent>
            <div className='flex flex-col'>
              <h5 className='text-2xl mt-0 mb-2'>{title}</h5>
              <span>{description}</span>
              <div
                className='flex self-end'
                onClick={e => {
                  e.stopPropagation();
                  e.nativeEvent.stopImmediatePropagation();
                  console.log(e);
                }}></div>
            </div>
          </CardContent>
        </Link>
      </Card>
    </div>
  );
};

export default HomeCard;
