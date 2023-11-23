import { useState } from 'react';
import * as S from './style';
import { useLocation, useNavigate } from 'react-router-dom';

interface LoginButtonProps {
  oauth: {
    [key: string]: any;
  };
  getLoading: (loading: boolean) => void;
}
const LoginButton = ({ oauth, getLoading }: LoginButtonProps) => {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate()
  const pathName = useLocation().pathname;
  const isSignUpPage = pathName === '/signup';
  const { oauthName, korName, bgColor, img } = oauth;
  
  const handleClick = () => {
    setLoading(true);
    getLoading(isLoading);
    window.location.href = `${import.meta.env.VITE_SERVER_OAUTH}oauth2/authorization/${oauthName}`;
    if(!isSignUpPage) return navigate('/login/loading')
      
  };

  return (
    <S.Button onClick={handleClick} color={bgColor} $fontColor={oauthName}>
      <S.ImgWrap>
        <S.Img src={img} alt={`${korName} 아이콘 `} />
      </S.ImgWrap>
      {korName}로 {isSignUpPage ? '가입' : '로그인'}하기
    </S.Button>
  );
};

export default LoginButton;
