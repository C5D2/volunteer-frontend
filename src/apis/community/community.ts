import { axiosInstance } from '@apis/axiosInstance/axiosInstance';
import { setCookie } from '@utils/cookies/cookies.ts';

export const getCommunityData = async () => {
  try {
    const response = await axiosInstance.get('community?size=14');
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error) {
      console.error("Can't find community data", error);
    } else {
      console.error('An unknown error occurred.');
    }
  }
};

export const getCommunityDetail = async (communityId: number) => {
  try {
    const response = await axiosInstance.get(`community/${communityId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const sendCommunityData = async (communityId: number) => {
  try {
    const response = await axiosInstance.post(`community/${communityId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPostData = async (communityId: number) => {
  try {
    // const response = await axiosInstance.get('poster/community/4');
    const response = await axiosInstance.get(`poster/community/${communityId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deletePostData = async (posterId: number, communityId: number) => {
  try {
    const response = await axiosInstance.delete(`poster/${posterId}/community?communityId=${communityId}`);
    console.log(response.data);
    // return response.data
    return response.data.deletedPosterId;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const logout = async () => {
  try {
    const response = await axiosInstance.post('user/logout');
    console.log(response.data);
    // 쿠키에서 토큰 제거
    setCookie('accessToken', '', new Date(0));
    setCookie('refreshToken', '', new Date(0));
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
