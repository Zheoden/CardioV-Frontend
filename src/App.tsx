import { Routes, Route, Link } from 'react-router-dom';
import { CustomRoutes } from './common/Constants-1';
import Login from './views/Login/Login-1';
import { ContextProvider } from './common/ContextState/ContextState';
import Protected from './components/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <ContextProvider>
      <div className='flex flex-col w-full overflow-x-hidden'>
        <div className='flex mx-auto'>
          <Routes>
            <Route path='/login' element={<Login />} />
            {CustomRoutes.map(route => (
              <Route
                path={route.path}
                element={
                  <Protected>
                    <route.component />
                  </Protected>
                }
                key={route.path}
              />
            ))}
          </Routes>
        </div>
      </div>
    </ContextProvider>
  );
}
export default App;
