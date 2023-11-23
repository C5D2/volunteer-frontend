import { useState } from 'react';
import * as S from './style'
import { OAUTHBUTTON } from '@constants/login';
import LoadingIndicator from '@components/ui/Loading';
import LoginButton from '@components/Login/LoginButton';


const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const getLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  return (
    <S.LoginPageContainer>
      <S.LoginTitle>로그인</S.LoginTitle>
      {isLoading ? (
        <LoadingIndicator text="로딩 로딩 .." />
      ) : (
        <S.LoginButtons>
          {OAUTHBUTTON.map((oauth) => (
            <LoginButton key={oauth.oauthName} oauth={oauth} getLoading={getLoading} />
          ))}
        </S.LoginButtons>
      )}
    </S.LoginPageContainer>
  );
};


export default LoginPage;
