import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from '../hoc/PrivateRoute';
import { PublicRoute } from '../hoc/PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../redux/auth/operations';
import Layout from './Layout/Layout';
import 'react-notifications/lib/notifications.css';
import '../main.scss';
import { getGifts } from '../redux/gift/operations';
import { getIsRefreshing } from '../redux/auth/selectors';
import Loader from './Loader/Loader';
import AppBar from './AppBar/AppBar';
import { NotificationContainer } from 'react-notifications';

const Home = lazy(() => import('../pages/Home'));
const Planning = lazy(() => import('../pages/Planning'));
const Awards = lazy(() => import('../pages/Awards'));
const AuthPage = lazy(() => import('../pages/AuthPage'));
const NotFound = lazy(() => import('../pages/NotFound'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
    dispatch(getGifts());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <NotificationContainer />
      <AppBar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<PrivateRoute redirectTo="/login" component={<Home />} />}
          />
          <Route
            path="/planning"
            element={
              <PrivateRoute redirectTo="/login" component={<Planning />} />
            }
          />
          <Route
            path="/award"
            element={
              <PrivateRoute redirectTo="/login" component={<Awards />} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route
          path="/login"
          element={<PublicRoute redirectTo="/" component={<AuthPage />} />}
        />
      </Routes>
    </Suspense>
  );
}
