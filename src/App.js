import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from './actions/accountActions';
import { Navigate, Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import { home, login } from './utils/routes';


function App() {
  const passkey = useSelector(state => state.passkey);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [])

  return (
    <Routes>
      <Route path={home} element={passkey ? <Homepage /> : <Navigate to={login} />} />
      {['/*', `${login}/*`].map(path => <Route key={path} path={path} element={passkey ? <Navigate to={home} /> : <Login />} />)}
    </Routes>
  );
}

export default App;
