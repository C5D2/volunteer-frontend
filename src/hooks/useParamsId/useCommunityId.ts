import { useParams } from 'react-router-dom';

export const useCommunityId = () => {
  const { communityId } = useParams<{ communityId: string }>();
  const communityIdNumber = communityId ? parseInt(communityId, 10) : undefined;

  return communityIdNumber;
};
