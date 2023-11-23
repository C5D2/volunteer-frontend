export const checkNickName = (nickName: string) => {
  const nickNameRegx = /^[a-zA-Z0-9가-힣]{1,20}$/;
  const testNickName = nickNameRegx.test(nickName);
  if (testNickName) {
    return { validateMessage: '유효한 닉네임입니다.', validateState: testNickName };
  } else {
    return { validateMessage: '한글, 영문 대소문자, 최대 20자까지 가능합니다.', validateState: testNickName };
  }
};
