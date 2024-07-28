import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '@utils/cookies/cookies.ts';
import jwt_decode from 'jwt-decode';

interface DecodedToken {
  role: string;
  [key: string]: any;
}

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const navigate = useNavigate();
  const token = getCookie('accessToken');
  let userRole: unknown = null;

  if (token) {
    const decodedToken: DecodedToken = jwt_decode(token);
    userRole = decodedToken.role;
  }

  React.useEffect(() => {
    if (userRole !== 'ROLE_ADMIN') {
      navigate('/');
    }
  }, [navigate, userRole]);

  if (userRole !== 'ROLE_ADMIN') {
    return null;
  }

  return <>{children}</>;
};

export default PrivateRoute;
