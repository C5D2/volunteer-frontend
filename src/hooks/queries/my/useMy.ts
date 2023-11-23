import { getMyActive, getMyJoinCommunites, getMyMakeCommunites, unsubscribing } from '@apis/my';
import { deleteCookie, getCookie } from '@utils/cookies/cookies';
import { useMutation, useQuery } from 'react-query';

export const useGetMyMakeCommunites = () => {
  const { data, isLoading, isError } = useQuery(['mypage/community'], getMyMakeCommunites);
  return { data, isLoading, isError };
};

export const useGetMyJoinCommunites = () => {
  const { data, isLoading, isError } = useQuery(['mypage/community/sign'], getMyJoinCommunites);
  return { data, isLoading, isError };
};

export const useGetMyActive = () => {
  const { data, isLoading, isError } = useQuery(['mypage/myinfo'], getMyActive);
  return { data, isLoading, isError };
};

export const usePostUnsubscribing = () => {
  const { mutate } = useMutation(unsubscribing, {
    onSuccess: () => {
      deleteCookie('accessToken')
      deleteCookie('refreshToken')
    },
	});
	
  const handleUnsubscribing = () => {
    const accessToken = getCookie('accessToken')
		mutate(accessToken)
	}
	return {handleUnsubscribing}
};
