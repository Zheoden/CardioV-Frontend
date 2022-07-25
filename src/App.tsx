import HorizontalLoader from './components/HorizontalLoader/HorizontalLoader';
import Spinner from './components/Spinner/Spinner';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <div className='container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10'>
        <Spinner show />
        <div className='flex'>
          <HorizontalLoader />
        </div>
      </div>
    </div>
  );
}
export default App;
