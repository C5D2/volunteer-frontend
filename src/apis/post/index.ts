import { axiosImgInstance } from "@apis/axiosInstance/axiosInstance"
export interface PostData {
	postData: FormData
	communityId: string | undefined
}

export const createPost = async (postFormData: PostData) => {
	const {postData, communityId } = postFormData
	const response = await axiosImgInstance.post(`poster/community/${communityId}`, postData);
	return response
}
export interface UpdatePostData extends PostData {
	postId: string | undefined
}

export const updatePost = async (postFormData: UpdatePostData) => {
	const { postId, communityId, postData} = postFormData
	const response = await axiosImgInstance.put(`poster/${postId}/community?communityId=${communityId}`, postData)
	return response
}