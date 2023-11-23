import { axiosInstance } from "@apis/axiosInstance/axiosInstance"
import { setCookie } from "@utils/cookies/cookies";


export const createUserAddInfo = async (addInfoData: Blob) => {
	try { 
		const response = await axiosInstance.post('user/signup', addInfoData)	
		const { accessToken, refreshToken, accessTokenExpireTime, refreshTokenExprieTime } = response.data.data;
    const accessTokenDate = new Date(accessTokenExpireTime)
    const refreshTokenDate = new Date(refreshTokenExprieTime);
		setCookie('accessToken', accessToken, accessTokenDate);
		setCookie('refreshToken', refreshToken, refreshTokenDate);
		return response
		
	} catch (error) {
		console.error(error)
	}
}

export interface checkData {
	check: string
}

export const checkUserPhone = async (checkPhoneData:checkData) => {
	const response = await axiosInstance.post('user/phoneCheck', checkPhoneData) 
	return response.data
}

export const checkUserNickname = async (checkNicknameData:checkData) => {
	const response = await axiosInstance.post('user/nicknameCheck', checkNicknameData); 
	return response.data
}