import { axiosInstance } from "@apis/axiosInstance/axiosInstance"

export const getMyMakeCommunites = async () => {
	try {
		const response = await axiosInstance.get('mypage/community')
		return response
		
	} catch (error) {
		console.log(error)
	}
}

export const getMyJoinCommunites = async () => {
	try {
		const response = await axiosInstance.get('mypage/community/sign')
		return response
		
	} catch (error) {
		console.error(error)
	}
}



export const getMyActive= async () => {
  try {
    const response = await axiosInstance.get('mypage/myinfo');

		return response
  } catch (error) {
    console.error(error);
  }
};

export const unsubscribing = async (token:string) => {
	try {
		const response = await axiosInstance.post('mypage/withdrawal', {
			headers: {
				'Authorization': token 
			}
		})
		return response
	} catch (error) {
		console.error(error)
	}
}