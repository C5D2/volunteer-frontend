import back from '@assets/images/back.svg';
import * as S from './style';
import FullHeart from '@assets/images/full_heart.svg';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useState } from 'react';
import LikeButton, { AnimatedHeart, PostContainer } from './Like';
import { useNavigate, useParams } from 'react-router-dom';
import { getPostDetail, likePost, PosterDetail } from '@apis/post/detail';
import { manageStatus } from '@hooks/queries/error';

// 게시글 상세 데이터 가져오기(axios 사용할 것)
function PostDetail() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { communityId, postId } = useParams();
  const [showHeart, setShowHeart] = useState(false);

  //게시글 상세 정보를 불러오는 쿼리
  const { isLoading, isError, error, data } = useQuery<PosterDetail, Error>('detail', async () => {
    const result = await getPostDetail(Number(postId), Number(communityId));
    console.log(result);
    return result;
  });

  // 게시물 좋아요 상태 업데이트
  const likePostMutation = useMutation(() => likePost(Number(postId), Number(communityId)), {
    onSuccess: () => {
      // 호출이 성공하면 게시글 상세 정보를 다시 불러옴
      queryClient.invalidateQueries('detail');
    },
  });

  // 좋아요 관련 상태, 토글
  const [liked, setLiked] = useState(false);
  const toggleLike = () => {
    setLiked(!liked);
  };

  const handleLikeButtonClick = async () => {
    toggleLike(); // 좋아요 상태 토글
    setLiked(true);
    setShowHeart(true); // 하트 애니메이션 시작
    setTimeout(() => setShowHeart(false), 1500); // 1.5초 후 하트 애니메이션 종료
    await likePostMutation.mutate(); // 좋아요 수 변경 API 호출
  };

  // 로딩 중이거나 에러가 발생했을 때 렌더링할 내용
  const managedStatus = manageStatus({ isLoading, isError }, { error });

  if (managedStatus) {
    return managedStatus;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PostContainer>
        <AnimatedHeart show={showHeart} src={FullHeart} />
      </PostContainer>
      <S.BackLine>
        <img
          src={back}
          alt="뒤로 가기"
          onClick={() => navigate(`/community/${communityId}/post`)}
          style={{ cursor: 'pointer' }}
        />
      </S.BackLine>
      <S.PostDetailStyle>
        <div className="postBox">
          <S.PostTime>{data.posterDetail.posterCreatedAt}</S.PostTime>
          <S.PostTitle>{data.posterDetail.posterTitle}</S.PostTitle>
          <S.PostContentBox>
            <img src={data?.posterDetail.posterImgPath} style={{ width: '800px' }} />
            <div className="posterContent">{data.posterDetail.posterContent}</div>
          </S.PostContentBox>
        </div>
        <S.PostAuthorInfo>
          <S.ProfileWrap>
            <img src={data?.posterDetail.profileImg} style={{ width: '25px', height: '25px', borderRadius: '50%' }} />
            <div className="posterAuthor">{data.posterDetail.posterAuthor}</div>
            <LikeButton like={liked} onClick={handleLikeButtonClick} />
            <span>좋아요 {data.posterDetail.heartCount}개</span>
          </S.ProfileWrap>
        </S.PostAuthorInfo>
      </S.PostDetailStyle>
    </>
  );
}

export default PostDetail;
