import { PostData, UpdatePostData, createPost, updatePost } from '@apis/post';
import { useMutation, useQueryClient } from 'react-query';

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries('poster');
    },
  });

  const handleCreatePost = (postData: PostData) => {
    mutate(postData);
  };
  return { handleCreatePost };
};

export const useUpdatePost = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(updatePost, {
    onSuccess: () => {
      queryClient.invalidateQueries('poster');
    },
  });
  const handleUpdatePost = (postData: UpdatePostData) => {
    mutate(postData);
  };
  return { handleUpdatePost };
};
