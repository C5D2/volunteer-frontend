import * as S from '@pages/community/stlyes/CommunityStyle.ts';
import * as W from '@pages/community/stlyes/SubLayoutCommon.ts';
import IntroUserContent from './communitypagecommponent/IntroUserContent';
import IntroPostContent from './communitypagecommponent/IntroPostContent';
import IntroInforContent from './communitypagecommponent/IntroInforContent';
import { useMutation, useQuery } from 'react-query';
import { getCommunityDetail, sendCommunityData } from '@apis/community/community.ts';
import { CommunityDetail, CommunityImgPath, CommunityUserDetail } from '@interfaces/Community.ts';
import { useNavigate, useParams } from 'react-router-dom';
import { getCookie } from '@utils/cookies/cookies.ts';

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
  const navigate = useNavigate();

  // 커뮤니티 참가하기 버튼 클릭시, 로그인 여부에 따라 다른 페이지로 이동 기능
  const handleJoinClick = () => {
    const token = getCookie('accessToken');
    const isAuthenticated = token && token !== '';

    if (isAuthenticated) {
      navigate(`/community/${communityId}/post`);
    } else {
      const confirmLogin = window.confirm('커뮤니티에 참가하시려면 로그인이 필요합니다. 로그인을 하시겠습니까?');
      if (confirmLogin) {
        navigate('/login');
      }
    }

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

          <S.CommunityBtnWrap>
            <S.CommunityJoinButton onClick={handleJoinClick}>
              커뮤니티 참가하기
              {/* <Link to={`/community/${communityId}/post`}>커뮤니티 참가하기</Link> */}
            </S.CommunityJoinButton>
          </S.CommunityBtnWrap>
        </S.CommunityIntroWrap>
      </S.CommunityIntroBox>
    </W.CommunityCommonLayout>
  );
};

export default CommunityPage;
