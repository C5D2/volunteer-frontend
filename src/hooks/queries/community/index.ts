import { CommunityPost, UpdateCommunity, createCommunity, upadateCommunity } from '@apis/community/post';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

export const useCreateCommunity = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate } = useMutation(createCommunity, {
    onSuccess: () => {
      queryClient.invalidateQueries('community');
      navigate('/');
    },
  });
  const handleCreateCommunity = (communityData: CommunityPost) => {
    mutate(communityData);
  };
  return { handleCreateCommunity };
};

export const useUpdateCommunity = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate } = useMutation(upadateCommunity, {
    onSuccess: () => {
      queryClient.invalidateQueries('community');
      navigate('/');
    },

  });
  const handleUpdateCommunity = (communityData: UpdateCommunity) => {
    mutate(communityData);
  };
  return { handleUpdateCommunity };
};
