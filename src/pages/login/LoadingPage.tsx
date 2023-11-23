import LoadingIndicator from '@components/ui/Loading';
import { setCookie } from '@utils/cookies/cookies';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const PageWrap = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const trigger = searchParams.get('trigger');
  const accessToken = searchParams.get('accessToken');
  const accessTokenExpireTime = searchParams.get('accessTokenExpireTime');
  const refreshToken = searchParams.get('refreshToken');
  const refreshTokenExpireTime = searchParams.get('refreshTokenExpireTime');

  const setCookiesParams = () => {
    const isExpireTime = accessTokenExpireTime && refreshTokenExpireTime;
    if (isExpireTime) {
      const accessTokenDate = new Date(accessTokenExpireTime);
      const refreshTokenDate = new Date(refreshTokenExpireTime);
      setCookie('accessToken', accessToken, accessTokenDate);
      setCookie('refreshToken', refreshToken, refreshTokenDate);
      navigate('/');
    }
  };

  useEffect(() => {
    if (trigger) return setCookiesParams();
  });
  return (
    <PageWrap>
      <LoadingIndicator text="loading" />
    </PageWrap>
  );
};

export default LoadingPage;
