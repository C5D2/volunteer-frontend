export const checkPostTitle = (postTitle:string) => {

	const postTitleRegx = /^[a-zA-Z0-9가-힣\s\p{Emoji}]{1,50}$/u;
const testPostTitle = postTitleRegx.test(postTitle)
	if (testPostTitle) {
		return '유효한 제목입니다.'
	} else {
		return '포스트 글은 제목은 알파벳, 숫자, 한글, 공백, 그리고 이모티콘을 포함하여 최대 50자까지의 문자열을 허용합니다.';
	}
}