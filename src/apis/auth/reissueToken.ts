
import tokenInstance from "@apis/axiosInstance/tokenInstance"
import { setCookie } from "@utils/cookies/cookies";

export const reissueToken = async (token: string) => {
 console.log(token)
	const response = await tokenInstance.post('user/newToken', null, {
		headers: {
			'Authorization': token
		},
	});
	

		const { accessToken, refreshToken, accessTokenExpireTime, refreshTokenExprieTime } = response.data.data;
		const expirationAccess = new Date(accessTokenExpireTime);
		const expirationRefresh = new Date(refreshTokenExprieTime)
	
		setCookie('accessToken', accessToken, expirationAccess)
		setCookie('refreshToken', refreshToken, expirationRefresh);

	return response
}

