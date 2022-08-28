import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { CustomRoutes } from './common/Constants';
import Login from './components/Session/LoginButton';
import Home from './views/Home/Home';
import { ContextProvider } from './common/ContextState/ContextState';
import Protected from './components/ProtectedRoute/ProtectedRoute';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <ContextProvider>
      <div className='flex flex-col w-full overflow-x-hidden'>
        <div className='flex mx-auto'>
          <Routes>
            <Route
              path='/'
              element={
                <Protected>
                  <Home />
                </Protected>
              }
            />
            <Route path='/login' element={<Login />} />
            {CustomRoutes.map(route => (
              <Route
                path={route.name}
                element={
                  <Protected>
                    <route.component />
                  </Protected>
                }
                key={route.name}
              />
            ))}
          </Routes>
        </div>
      </div>
    </ContextProvider>
  );
}
export default App;
