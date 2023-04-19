import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';

export default function Layout() {
  return (
    <div className="containerRoot">
      <AppBar />
      <Suspense fallback={'...Loading'}>
        <NotificationContainer />
        <Outlet />
      </Suspense>
    </div>
  );
}
