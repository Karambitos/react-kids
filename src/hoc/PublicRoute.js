import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsAuth } from '../redux/auth/selectors';

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsAuth);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
