import { Link } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from '../globalStyle/GlobalStyle';
import mainLogo from '@assets/images/Logo.png';
import Nav from './Nav';
import Utill from './Utill';
import ScrollToTop from '@hooks/location/scrolltop';

const Header = () => {
  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <HeaderLayout>
        <HeaderWrap>
          <Link to="/">
            <Logo>메인로고</Logo>
          </Link>
          <Nav />
          <Utill />
        </HeaderWrap>
      </HeaderLayout>
    </>
  );
};

export default Header;

const HeaderLayout = styled.header`
  width: 100%;
  height: 100px;
  background-color: #56c9b6;
  position: fixed;
  top: 0;
  z-index: 1;
`;

const HeaderWrap = styled.div`
  width: 1400px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  position: relative;
`;

const Logo = styled.h1`
  text-indent: -9999px;
  background: url(${mainLogo}) no-repeat center;
  background-size: 105px;
  width: 105px;
  height: 105px;
  cursor: pointer;
`;
