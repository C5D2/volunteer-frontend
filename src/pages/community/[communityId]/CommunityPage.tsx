import * as S from '@pages/community/stlyes/CommunityStyle.ts';
import * as W from '@pages/community/stlyes/SubLayoutCommon.ts';
import IntroUserContent from './communitypagecommponent/IntroUserContent';
import IntroPostContent from './communitypagecommponent/IntroPostContent';
import IntroInforContent from './communitypagecommponent/IntroInforContent';
import { useQuery, useMutation } from 'react-query';
import { getCommunityDetail, sendCommunityData } from '@apis/community/community.ts';
import { CommunityDetail, CommunityImgPath, CommunityUserDetail } from '@interfaces/Community.ts';
import { Link, useParams } from 'react-router-dom';

type Data = {
  communityUserDetail: CommunityUserDetail;
  communityDetail: CommunityDetail;
  communityImgPathList: CommunityImgPath[];
};

type Props = {
  data: Data;
};

const CommunityPage = () => {
  const { communityId } = useParams<{ communityId: string }>();
  const communityIdNumber = communityId ? parseInt(communityId, 10) : undefined;

  const {
    data: DetailData,
    isLoading,
    error,
  } = useQuery<Props | null, Error>(['communityDetail', communityIdNumber], () =>
    communityIdNumber ? getCommunityDetail(communityIdNumber) : Promise.resolve(null)
  );

  const mutation = useMutation(sendCommunityData);

  const handleJoinClick = () => {
    if (communityIdNumber !== undefined) {
      mutation.mutate(communityIdNumber);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log(error);
    return <div>Error: 에러발생</div>;
  }

  if (!DetailData || !DetailData.data || !DetailData.data.communityDetail) {
    return <div>데이터를 찾을 수 없습니다.</div>; // 데이터가 없을 때 처리
  }

  return (
    <W.CommunityCommonLayout>
      <S.CommunityIntroBox>
        <S.CommunityIntroWrap>
          <IntroUserContent DetailData={DetailData} />
          <IntroPostContent DetailData={DetailData} />
          <IntroInforContent DetailData={DetailData} />
          <S.CommunityEdit>
            <Link to={`/community/${communityId}/edit`} state={{ data: DetailData.data }}>
              커뮤니티 수정하기
            </Link>
          </S.CommunityEdit>
          <S.CommunityBtnWrap>
            <S.CommunityJoinButton onClick={handleJoinClick}>
              <Link to={`/community/${communityId}/post`}>커뮤니티 참가하기</Link>
            </S.CommunityJoinButton>
          </S.CommunityBtnWrap>
        </S.CommunityIntroWrap>
      </S.CommunityIntroBox>
    </W.CommunityCommonLayout>
  );
};

export default CommunityPage;
