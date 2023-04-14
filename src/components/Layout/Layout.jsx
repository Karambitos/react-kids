import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';

export default function Layout() {
  return (
    <div className="containerRoot">
      <AppBar />
      <Suspense fallback={'...Loading'}>
        <Outlet />
      </Suspense>
    </div>
  );
}
