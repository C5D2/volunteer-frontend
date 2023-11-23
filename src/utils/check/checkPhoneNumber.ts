export const checkPhoneNumber = (phoneNumber:string) => {
	const phoneNumberRegx = /^\d{3}(\d{3}|\d{4})\d{4}$/;
	const testPhoneNumber = phoneNumberRegx.test(phoneNumber)
	if (testPhoneNumber) {
		return { validateMessage:'유효한 휴대폰 번호입니다.', validateState: testPhoneNumber}
	} else {
		return { validateMessage:'휴대폰 번호는 10~11자리입니다.', validateState: testPhoneNumber}
	}
}