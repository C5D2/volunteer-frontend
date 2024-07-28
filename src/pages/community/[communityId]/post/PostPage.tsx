import * as S from '@pages/community/stlyes/PostStyle.ts';
import * as W from '@pages/community/stlyes/SubLayoutCommon.ts';
import PostUserProfile from '@pages/community/[communityId]/post/postpageComponent/PostUserProfile';
import { Link } from 'react-router-dom';
import { useCommunityId } from '@hooks/useParamsId/useCommunityId';
import PostList from '@pages/community/[communityId]/post/postpageComponent/PostList';
import { useQuery } from 'react-query';
import { getPostData } from '@apis/community/community.ts';

const PostPage = (props: any) => {
  const communityIdNumber: any = useCommunityId();

  const { data, error, isLoading } = useQuery<any, Error>(
    ['post', communityIdNumber],
    () => getPostData(communityIdNumber),
    {
      enabled: communityIdNumber !== undefined,
    }
  );

  const posterListData = data ? data : props.posterListData;

  console.log('posterListData:', posterListData);

  if (error) {
    console.error('An error has occurred:', error);
  }

  // if (isLoading) {
  //   return (
  //     <S.LodaingBox>
  //       <S.LoadingStyle></S.LoadingStyle>
  //       <S.LodaingText>LOADING...</S.LodaingText>
  //     </S.LodaingBox>
  //   );
  // }

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
          <PostList
            posterListData={posterListData}
            communityIdNumber={communityIdNumber}
            index={0}
            post={null}
            isLoading={isLoading}
          />
        </S.PostListCenterWrap>
      </S.PostListWrap>
    </W.PostCommonLayout>
  );
};

export default PostPage;
