import { commentUserResponseDto, getPostDetail, postComment } from '@apis/post/detail';
import { useRef, useState } from 'react';
import { useQueryClient, useMutation, useQuery } from 'react-query';
import TextareaLabel from '@components/ui/Textarea';
import * as S from './style';
import { useParams } from 'react-router-dom';
import { manageStatus } from '@hooks/queries/error';

function CommentForm() {
  const [comment, setComment] = useState('');
  const { communityId, postId } = useParams();
  const queryClient = useQueryClient();
  const [isCommentValid, setIsCommentValid] = useState(true);
  const errorMessagesRef = useRef<HTMLDivElement | null>(null);

  //게시글 상세 정보를 불러오는 쿼리
  const { isLoading, isError, error, data } = useQuery<commentUserResponseDto, Error>('detail', async () => {
    const result = await getPostDetail(Number(postId), Number(communityId));
    console.log(result);
    return result;
  });

  // 댓글 등록
  const commentMutation = useMutation(postComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['comments', Number(postId), Number(communityId)]);
    },
  });

  const onBlur = () => {
    const trimmedComment = comment.trim();
    setIsCommentValid(trimmedComment !== '');

    // null 체크를 수행하고 안전하게 접근
    if (errorMessagesRef.current) {
      errorMessagesRef.current.innerText = trimmedComment !== '' ? '' : '댓글을 작성해주세요.';
    }
  };

  const handleCommentSubmit = async (event: any) => {
    event.preventDefault();

    // 텍스트 입력이 없을 경우 댓글 등록 불가
    if (comment.trim() === '') {
      console.error('댓글을 작성해주세요.');
      return;
    }

    try {
      await commentMutation.mutateAsync({
        postId: Number(postId),
        communityId: Number(communityId),
        commentContent: comment,
      });
      console.log('postId, communityId, commentContent');
      setComment(''); // 댓글 입력 필드 초기화
    } catch (error) {
      console.error('댓글 게시 중 오류 발생', error);
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { name, value },
    } = event;

    if (name === 'comment') {
      setComment(value);
    }
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
    <S.CommentsForm>
      <S.FormBlock>
        <img
          src={data?.commentUserResponseDto?.commentUserProfileImg}
          style={{ width: '25px', height: '25px', borderRadius: '50%' }}
        />
        <div className="commentAuthor">{data?.commentUserResponseDto?.commentUserNickName}</div>
      </S.FormBlock>
      <TextareaLabel
        name="comment"
        value={comment}
        placeholder="자유롭게 댓글을 작성해주세요."
        onChange={onChange}
        labelText={''}
        validateText={''}
        isValid={isCommentValid}
        onBlur={onBlur}
      />
      <div ref={errorMessagesRef} style={{ color: 'red' }}></div>
      <div className="FormBlockSubmit">
        <S.CommentFormBtn
          value="등록"
          className="formBtnSubmit"
          onClick={handleCommentSubmit}
          disabled={!isCommentValid}
        >
          등록
        </S.CommentFormBtn>
      </div>
    </S.CommentsForm>
  );
}

export default CommentForm;
