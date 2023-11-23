import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterBox>
      <FooterWrap>
        <TextWrap>
          <LogoText>(주)떡잎마을</LogoText>
          <AddressText>소재지: 서울특별시 초록구 떡잎마을</AddressText>
        </TextWrap>
        <EmailText>이메일문의: admin@mapletown.com</EmailText>
        <PhoneNumber>전화문의: 02-0000-0000 (평일: 10:00~19:00, 주말/공휴일 제외)</PhoneNumber>
        <CopyRightBox>
          <LinkBox>
            <Link>회사 소개</Link>
            <Link>약관 및 정책</Link>
            <Link>개인정보처리방침</Link>
            <Link>이용약관</Link>
          </LinkBox>
          <CopyRightText>Copyright @ 2023 mapletown</CopyRightText>
        </CopyRightBox>
      </FooterWrap>
    </FooterBox>
  );
};

export default Footer;

const FooterBox = styled.footer`
  width: 100%;
  background-color: #f8f9fa;
`;

const FooterWrap = styled.div`
  width: 1500px;
  margin: 0 auto;
  padding: 50px 0 50px 0;
  box-sizing: border-box;
`;

const TextWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const AddressText = styled.span`
  padding: 0 0 0 30px;
`;

const LogoText = styled.span``;

const EmailText = styled.span`
  padding: 30px 0 0 0;
  display: block;
`;

const PhoneNumber = styled.span`
  padding: 30px 0 0 0;
  display: block;
`;

const CopyRightBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px 0 0 0;
`;

const LinkBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Link = styled.span`
  padding: 0 20px 0 0;
  box-sizing: border-box;
  cursor: pointer;
`;

const CopyRightText = styled.span`
  padding: 0 70px 0 0;
`;
