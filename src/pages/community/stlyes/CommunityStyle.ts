import styled from 'styled-components';
import LocationIcon from '@assets/images/LocationIcon.png';
import EngagementIcon from '@assets/images/EngagementIco.png';

const CommunityIntroBox = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 0 50px;
  box-sizing: border-box;
`;

const CommunityIntroWrap = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

const IntroUserContent = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 100px;
`;

const UserImgBox = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const UserInforBox = styled.div`
  width: 200px;
  position: absolute;
  bottom: -20%;
  left: 38.5%;
  right: 50%;
  transform: translate(0 -50%);
`;

const UserImg = styled.img`
  display: block;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  margin: 0 auto;
`;

const UserName = styled.span`
  font-size: 22px;
  text-align: center;
  display: block;
  padding-top: 15px;
`;

const IntroPostBox = styled.div`
  width: 100%;
  padding: 100px 0 50px 0;
`;

const IntroPostTitle = styled.h4`
  font-size: 30px;
  font-weight: 700;
  padding-bottom: 20px;
`;

const IntroPostImg = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;
`;

const IntroPostContent = styled.p`
  font-size: 18px;
  padding-top: 20px;
  line-height: 140%;
  font-family: 'NotoSans-Regular';
  font-weight: 400;
`;

const IntroInforBox = styled.div`
  width: 100%;
  padding-top: 50px;
`;

const LocationIco = styled.span`
  font-size: 18px;
  padding: 20px 0 50px 55px;
  position: relative;
  display: inline-block;
  &::before {
    content: '';
    width: 50px;
    height: 50px;
    background-image: url(${LocationIcon});
    background-size: 50px;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Felxbox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 50px;
`;

const ParticipantIco = styled.span`
  font-size: 18px;
  padding: 20px 0 50px 55px;
  position: relative;
  display: inline-block;
  &::before {
    content: '';
    width: 50px;
    height: 50px;
    background-image: url(${EngagementIcon});
    background-size: 50px;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const ParticipantText = styled.i`
  font-style: normal;
`;

const WritingTime = styled.div`
  padding: 25px 0 0 0;
`;

const WritingTimeText = styled.span`
  padding-left: 10px;
  display: inline-block;
`;

const CommunityBtnWrap = styled.div`
  width: 100%;
  padding: 50px 0;
`;

const CommunityJoinButton = styled.button`
  width: 50%;
  display: block;
  margin: 0 auto;
  padding: 25px 25px;
  box-sizing: border-box;
  color: #fff;
  font-size: 25px;
  text-align: center;
  background-color: #56c9b6;
  border-radius: 50px;
`;

const CommunityEdit = styled.span`
  background-color: #29715a;
  padding: 15px 20px;
  box-sizing: border-box;
  border-radius: 5px;
  color: #fff;
`;

export {
  CommunityIntroBox,
  CommunityIntroWrap,
  IntroUserContent,
  UserImgBox,
  UserInforBox,
  UserImg,
  UserName,
  IntroPostBox,
  IntroPostTitle,
  IntroPostImg,
  IntroPostContent,
  IntroInforBox,
  LocationIco,
  Felxbox,
  ParticipantIco,
  ParticipantText,
  WritingTime,
  WritingTimeText,
  CommunityBtnWrap,
  CommunityJoinButton,
  CommunityEdit,
};
