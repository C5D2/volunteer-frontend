import styled from 'styled-components';
// import MainBN from '/src/assets/images/MainBN.png';

const MainBn = () => {
  return (
    <VideoBox>
      <MainBnBox autoPlay loop muted>
        <source src="/src/assets/images/mapleTownVideo4.mp4" type="video/mp4" />
        {/* <Title>떡잎마을 형제들이 알고싶다.</Title>
      <TextContent>
        다같이 환경보호 커뮤니티를
        <br /> 만들어보아요!!
      </TextContent> */}
      </MainBnBox>
    </VideoBox>
  );
};

export default MainBn;

const VideoBox = styled.div`
  width: 100%;
  height: auto;
  margin-top: 17px;
`;

const MainBnBox = styled.video`
  width: 100%;
  height: 100%;
  background-size: cover;
  margin-top: 83px;
  span {
    font-family: 'BMDOHYEON';
    color: #fff;
    text-align: center;
    width: 100%;
    display: block;
  }
`;

// const Title = styled.span`
//   font-size: 25px;
//   padding-top: 200px;
// `;

// const TextContent = styled.span`
//   font-size: 40px;
//   padding-top: 20px;
// `;
