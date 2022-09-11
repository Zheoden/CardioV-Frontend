import { CustomRoutes } from 'src/common/Constants';
import HomeCard from 'src/components/HomeCards/HomeCard';
import Layout from '../Layout/Layout';

const Home = () => {
  return (
    <Layout>
      <div className='flex flex-wrap w-screen'>
        {CustomRoutes.filter(route => route.shouldDisplay).map((card, index) => (
          <HomeCard
            className={`${index === 0 ? 'xl:mr-8' : ''} m-auto mt-28`}
            title={card.displayName ?? "Shouldn't be Displayed"}
            redirect={card.path}
            thumbnail={`https://assets.cardiov.org/site/${card.key}-background.jpg`}
            key={card.path}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
