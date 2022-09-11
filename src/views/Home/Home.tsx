import { CustomRoutes } from 'src/common/Constants';
import HomeCard from 'src/components/HomeCards/HomeCard';
import Layout from '../Layout/Layout';

const Home = () => {
  return (
    <Layout>
      <div className='flex flex-wrap w-screen h-screen'>
        {CustomRoutes.filter(route => route.shouldDisplay).map(card => (
          <HomeCard
            className='m-auto'
            title={card.displayName ?? "Shouldn't be Displayed"}
            redirect={card.path}
            thumbnail='https://www.youtube.com/watch?v=bL8lX4tP5jw&ab_channel=TiagoPZK'
            key={card.path}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
