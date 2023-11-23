import { useParams } from 'react-router-dom';

export const useCommentId = () => {
  const { commentId } = useParams<{ commentId: string }>();
  const commentIdNumber = commentId ? parseInt(commentId, 10) : undefined;

  return commentIdNumber;
};
