import React from 'react';
import * as S from '@pages/community/stlyes/CommunityStyle.ts';
import { CommunityDetail, CommunityImgPath } from '@interfaces/Community.ts';
import { useCommunityId } from '@hooks/useParamsId/useCommunityId';

interface Props {
  DetailData: {
    data: {
      communityDetail: CommunityDetail;
      communityImgPathList: CommunityImgPath[];
    };
  };
}

const IntroPostContent: React.FC<Props> = ({ DetailData }) => {
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
    <>
      <S.IntroPostBox>
        <S.IntroPostTitle>{DetailData.data.communityDetail.communityTitle}</S.IntroPostTitle>
        {DetailData.data.communityImgPathList.map((imgPath, index) => (
          <S.IntroPostImg key={index} src={imgPath.communityImgPath} />
        ))}
        <S.IntroPostContent>{DetailData.data.communityDetail.communityContent}</S.IntroPostContent>
      </S.IntroPostBox>
    </>
  );
};

export default IntroPostContent;
