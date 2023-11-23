import { axiosImgInstance, axiosInstance } from '@apis/axiosInstance/axiosInstance';

export interface CommunityPost {
  communityData: FormData;
}
export const createCommunity = async (communityPostData: CommunityPost) => {
  const { communityData } = communityPostData;
  const response = await axiosImgInstance.post('community', communityData);
  return response;
};

export interface UpdateCommunity extends CommunityPost {
  communityId: string | undefined;
}
export const upadateCommunity = async (upadateCommunityPostData: UpdateCommunity) => {
  const { communityData, communityId } = upadateCommunityPostData;
  const response = await axiosImgInstance.put(`community/${communityId}`, communityData);
  return response;
};


export const deleteCommunity = async (communityId: string) => {
  const response = await axiosInstance.delete(`community/${communityId}`)
  return response
}