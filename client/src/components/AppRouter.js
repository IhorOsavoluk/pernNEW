import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes.js';
import { SHOP_ROUTE } from '../utils/consts';
import { Context } from '../index.js';

export default function AppRouter() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
  const {user} = useContext(Context)
  const {device} = useContext(Context)
  console.log(user,device)
  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path='*' element={<Navigate to={SHOP_ROUTE} />} />
    </Routes>
  );
}
