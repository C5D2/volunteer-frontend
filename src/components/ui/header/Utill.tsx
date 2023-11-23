import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getCookie } from '@utils/cookies/cookies.ts';
import { useEffect, useState } from 'react';
import { logout } from '@apis/community/community.ts';
import { useMutation } from 'react-query';

const Utill = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const mutation = useMutation(logout, {
    onSuccess: () => {
      setIsLoggedIn(false);
    },
  });

  useEffect(() => {
    const token = getCookie('accessToken');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogin = async () => {
    setIsLoggedIn(true);
  };

  console.log('isLoggedIn:', isLoggedIn);

  return (
    <SignupBox>
      {!isLoggedIn ? (
        <>
          <SignupBtn>
            <Link to="/signup">회원가입</Link>
          </SignupBtn>
          <LoginBtn onClick={handleLogin}>
            <Link to="/login">로그인</Link>
          </LoginBtn>
        </>
      ) : (
        <LogoutFlexBox>
          <LogoutBtn
            onClick={(event) => {
              event.preventDefault();
              mutation.mutate();
            }}
          >
            로그아웃
          </LogoutBtn>

          <CommunityCrateBtn>
            <Link to="community/create">커뮤니티 만들기</Link>
          </CommunityCrateBtn>
          <MypageBtn>
            <Link to="my">마이페이지</Link>
          </MypageBtn>
        </LogoutFlexBox>
      )}
    </SignupBox>
  );
};

export default Utill;

const SignupBox = styled.div`
  width: 26%;
  padding: 30px 0 0 0;
  span {
    width: 100px;
    display: inline-block;
    padding: 10px 5px;
    box-sizing: border-box;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
  }
`;
const SignupBtn = styled.span`
  background: #304647;
  color: #fff;
`;
const LoginBtn = styled.span`
  background: #3aedf9;
  color: #fff;
  margin-left: 10px;
`;

const LogoutFlexBox = styled.div`
  display: flex;
  justify-content: flex-start;
  span {
    width: 33%;
    font-size: 14px;
    letter-spacing: -1px;
  }
`;

const LogoutBtn = styled.span`
  background: #314547;
  color: #fff;
  margin-left: 10px;
`;

const CommunityCrateBtn = styled.span`
  background: #5c9677;
  color: #fff;
  margin-left: 10px;
`;

const MypageBtn = styled.span`
  background: #ffffff;
  color: #333;
  margin-left: 10px;
`;
