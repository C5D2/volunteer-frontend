import * as S from '@pages/community/stlyes/PostStyle.ts';
import * as W from '@pages/community/stlyes/SubLayoutCommon.ts';
import PostUserProfile from '@pages/community/[communityId]/post/postpageComponent/PostUserProfile';
import { Link } from 'react-router-dom';
import { useCommunityId } from '@hooks/useParamsId/useCommunityId';
import PostList from '@pages/community/[communityId]/post/postpageComponent/PostList';
import { useQuery } from 'react-query';
import { getPostData } from '@apis/community/community.ts';
import { ReactElement } from 'react';

// Props 타입 정의
type Props = {
  posterListData: any;
  communityIdNumber: any;
  posterIdNumber: any;
  index: any;
  post: any;
};

const PostPage = () => {
  // useParams로 받아온 커뮤니티 아이디
  const communityIdNumber: any = useCommunityId();

  let posterList: any = null;
  let isLoading: boolean = true;
  let error: Error | null = null;

  // useQuery를 사용하여 데이터를 캐싱
  const {
    data,
    isLoading: queryIsLoading,
    error: queryError,
  } = useQuery<any, Error>(['post', communityIdNumber], () => getPostData(communityIdNumber), {
    enabled: communityIdNumber !== undefined,
  });

  const posterListData = data;

  console.log('posterListData:', posterListData);

  if (data) {
    posterList = data;
    console.log('Data:', posterList);
  }

  if (queryIsLoading) {
    isLoading = queryIsLoading;
    console.log('Loading...');
  }

  if (queryError) {
    error = queryError;
    console.error('An error has occurred:', error);
  }

  return (
    <W.PostCommonLayout>
      <S.PostListWrap>
        <S.PostListCenterWrap>
          <PostUserProfile posterListData={posterListData} />
          <S.PostWriteBtnWrap>
            <S.PostWriteBtn>
              <Link to={`/community/${communityIdNumber}/post/create`}>글쓰기</Link>
            </S.PostWriteBtn>
          </S.PostWriteBtnWrap>
          <PostList posterListData={posterListData} communityIdNumber={communityIdNumber} index={0} post={null} />
        </S.PostListCenterWrap>
      </S.PostListWrap>
    </W.PostCommonLayout>
  );
};

export default PostPage;
