import React from 'react';
import * as S from '@pages/community/stlyes/CommunityStyle.ts';
import { CommunityDetail } from '@interfaces/Community.ts';
import { useCommunityId } from '@hooks/useParamsId/useCommunityId';

interface Props {
  DetailData: {
    data: {
      communityDetail: CommunityDetail;
    };
  };
}

const IntroInforContent: React.FC<Props> = ({ DetailData }) => {
  //useparams로 받아온 커뮤니티 아이디
  const communityIdNumber = useCommunityId();

  console.log('DetailData:', DetailData);
  console.log('DetailData.communityId:', DetailData.data.communityDetail.communityId);

  if (communityIdNumber === undefined) {
    return <div>Loading...</div>;
  }

  if (DetailData.data.communityDetail.communityId !== communityIdNumber) {
    return <div>커뮤니티를 찾을 수 없음!</div>;
  }

  return (
    <S.IntroInforBox>
      <S.LocationIco>장소 {DetailData.data.communityDetail.communityLocation}</S.LocationIco>
      <S.Felxbox>
        <S.ParticipantIco>
          모집인원 : <S.ParticipantText>{DetailData.data.communityDetail.communityMaxParticipant}명</S.ParticipantText>
        </S.ParticipantIco>
        <S.WritingTime>
          글 작성 시간
          <S.WritingTimeText>{DetailData.data.communityDetail.communityCreatedAt}</S.WritingTimeText>
        </S.WritingTime>
      </S.Felxbox>
    </S.IntroInforBox>
  );
};

export default IntroInforContent;
