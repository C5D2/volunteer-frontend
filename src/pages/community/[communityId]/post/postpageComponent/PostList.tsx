import { useCallback, useEffect, useState } from 'react';
import * as S from '@pages/community/stlyes/PostStyle.ts';
import { Link } from 'react-router-dom';
import { deletePostData } from '@apis/community/community.ts';
import { getCookie } from '@utils/cookies/cookies.ts';
import jwtDecode from 'jwt-decode';

interface Props {
  posterListData: any;
  index: any;
  post: any;
  communityIdNumber: any;
  isLoading: boolean;
}

interface DecodedToken {
  userId: string;
  sub: string;
}

const PostList = ({ posterListData, communityIdNumber, isLoading }: Props) => {
  const token: string | null = getCookie('accessToken');
  let loggedInUserId: string | null;
  let decodedToken: DecodedToken | null = null;

  if (token) {
    decodedToken = jwtDecode<DecodedToken>(token);
    loggedInUserId = decodedToken?.sub;
    console.log('Logged in user ID:', loggedInUserId);
  }

  console.log('communityIdNumber:', communityIdNumber);

  if (isLoading) {
    return <S.NoContent>Loading...</S.NoContent>;
  }

  if (!posterListData || !posterListData.data || !posterListData.data.posterList) {
    return <S.NoContent>게시글이 없습니다.</S.NoContent>;
  }
  const [showToggleBox, setShowToggleBox] = useState(false);
  const handleOptionBtnClick = () => {
    setShowToggleBox(!showToggleBox);
  };

  const [postList, setPostList] = useState(posterListData.data.posterList);

  const handleDeleteBtnClick = useCallback(
    async (posterIdToDelete: number) => {
      try {
        const communityId = communityIdNumber;
        await deletePostData(posterIdToDelete, communityId);
        console.log('게시물 삭제 완료, ID:', posterIdToDelete);

        // 삭제된 게시물을 목록에서 제거하도록 상태를 업데이트합니다.
        const updatedPostList = postList.filter((post: any) => post.posterId !== posterIdToDelete);
        setPostList(updatedPostList);
        setShowToggleBox(false);
      } catch (error) {
        console.error(error);
      }
    },
    [postList, communityIdNumber]
  );

  useEffect(() => {
    console.log('Updated post list:', postList);
  }, [postList]);

  return postList.map((post: any, index: any) => {
    console.log('Post user ID:', post.userId);
    const posterIdNumber = post.posterId;
    console.log('posterIdNumber:', posterIdNumber);

    return (
      <S.PostListBox>
        <S.PostTitleBox>
          <S.UserTitleBox>
            <S.PostListUserImg src={post.profileImg} />
            <S.PostListNameBox>
              <S.PostListNickname>{post.posterAuthor}</S.PostListNickname>
              <S.PostListTitle>{post.posterTitle}</S.PostListTitle>
            </S.PostListNameBox>
          </S.UserTitleBox>

          <S.PostListDateBox>
            {Number(post.userId) === Number(decodedToken?.sub) && (
              <S.OptionBtnBox>
                <S.OptionBtn onClick={handleOptionBtnClick}></S.OptionBtn>
                {showToggleBox && (
                  <S.ToggleBox>
                    <S.ModifyBtn>
                      <Link to={`${post.posterId}/edit`} state={{ data: post }}>
                        수정
                      </Link>
                    </S.ModifyBtn>
                    <S.DeleteBtn onClick={() => handleDeleteBtnClick(post.posterId)}>삭제</S.DeleteBtn>
                  </S.ToggleBox>
                )}
              </S.OptionBtnBox>
            )}
            <S.PostListDate>
              <S.PostListDateTitle>글 작성시간 :</S.PostListDateTitle>
              <S.PostListDateContent>{post.posterCreatedAt}</S.PostListDateContent>
            </S.PostListDate>
          </S.PostListDateBox>
        </S.PostTitleBox>
        <Link to={`/community/${communityIdNumber}/post/${posterIdNumber}`} key={index}>
          <S.PostContentBox>
            <S.PostListContentImg src={post.posterImgPath} />
            <S.PostContentText>{post.posterContent}</S.PostContentText>
          </S.PostContentBox>

          <S.PostLikeCommentBox>
            <S.LikeBox>
              <S.Like>
                Like
                <S.LikeCount>{post.heartCount}</S.LikeCount>
              </S.Like>
            </S.LikeBox>

            <S.CommentBox>
              <S.Comment>
                Comment
                <S.CommentCount>11</S.CommentCount>
              </S.Comment>
            </S.CommentBox>
          </S.PostLikeCommentBox>
        </Link>
      </S.PostListBox>
    );
  });
};

export default PostList;
