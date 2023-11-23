import React from 'react';
import * as S from '@pages/community/stlyes/CommunityStyle.ts';
import { CommunityDetail, CommunityImgPath, CommunityUserDetail } from '@interfaces/Community.ts';
import { useCommunityId } from '@hooks/useParamsId/useCommunityId';

interface Props {
  DetailData: {
    data: {
      communityUserDetail: CommunityUserDetail;
      communityDetail: CommunityDetail;
      communityImgPathList: CommunityImgPath[];
    };
  };
}

const IntroUserContent: React.FC<Props> = ({ DetailData }) => {
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
    <S.IntroUserContent>
      <S.UserImgBox src={DetailData.data.communityImgPathList[0].communityImgPath} />
      <S.UserInforBox>
        <S.UserImg src={DetailData.data.communityUserDetail.communityUserProfile} />
        <S.UserName>{DetailData.data.communityUserDetail.communityAuthor}</S.UserName>
      </S.UserInforBox>
    </S.IntroUserContent>
  );
};

export default IntroUserContent;
