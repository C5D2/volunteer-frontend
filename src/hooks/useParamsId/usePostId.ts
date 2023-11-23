import { useParams } from 'react-router-dom';

export const usePosterId = () => {
  const { postId } = useParams<{ postId: string }>();
  const posterIdNumber = postId ? parseInt(postId, 10) : undefined;

  return posterIdNumber;
};
