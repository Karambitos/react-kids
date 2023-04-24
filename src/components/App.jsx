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
const Home = lazy(() => import('../pages/Home'));
const Planning = lazy(() => import('../pages/Planning'));
const Awards = lazy(() => import('../pages/Awards'));
const AuthPage = lazy(() => import('../pages/AuthPage'));
const NotFound = lazy(() => import('../pages/NotFound'));

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
    dispatch(getGifts());
  }, []);

  return (
    <Suspense fallback={'...Loading'}>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={<PrivateRoute redirectTo="/auth" component={<Home />} />}
          />
          <Route
            path="/planning"
            element={
              <PrivateRoute redirectTo="/auth" component={<Planning />} />
            }
          />
          <Route
            path="/award"
            element={<PrivateRoute redirectTo="/auth" component={<Awards />} />}
          />
          <Route
            path="/auth"
            element={<PublicRoute redirectTo="/" component={<AuthPage />} />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
