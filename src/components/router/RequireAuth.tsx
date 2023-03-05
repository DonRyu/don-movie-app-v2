import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { WithChildrenProps } from '@app/types/generalTypes';

const RequireAuth= ({ children }:any) => {
  // const token = useAppSelector((state) => state.auth.token);

  // return token ? <>{children}</> : <Navigate to="/auth/login" replace />;
  return
};

export default RequireAuth;
