import Button from '@components/ui/Button/Button';
import { Input } from '@components/ui/Input';
import { useFormState } from '@hooks/form';
import {
  useUesrInfoValidationByNickname,
  useUesrInfoValidationByPhoneNumber,
} from '@hooks/form/useUserInfoValidation/useUserInfoValidation';
import { useCheckUserNickname, useCheckUserPhone, useCreateUserAddInfo } from '@hooks/queries/signup';
import { FormEvent } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0px;
  width: 50%;
  div {
    width: 400px;
  }
  div:not(:first-child) {
    height: 120px;
  }
`;

const StButton = styled(Button)`
  position: relative;
  top: -74px;
  left: 430px;
  width: 90px;
  height: 40px;
  font-weight: 600;
  border-radius: 10px;
  background-color: #304647;
  color: #fff;
`;

const SubmitButton = styled.button`
  height: 50px;
  border-radius: 8px;
  width: 400px;
  color: #fff;
  background-color: #56c9b6;
`;

interface AddInfoFormProps {
  [key: string]: any;
}
const AddInfoForm = ({ initialData }: AddInfoFormProps) => {
  const { postFormData, setPostFormData, handleChange } = useFormState(initialData);
  const { name, provider, email, nickname, phoneNumber, picture, role } = postFormData;
  const { validateNickname, nicknameRef, handleNicknameBlur } = useUesrInfoValidationByNickname();
  const { validatePhoneNumber, phoneNumbereRef, handlePhoneNumberBlur } = useUesrInfoValidationByPhoneNumber();
  const { mutate } = useCreateUserAddInfo();
  const { handleUserPhone, duplicatePhone, isClicked, setIsClicked } = useCheckUserPhone();
  const { isClicked:clicked, duplicateNickname, setIsClicked:setClicked,  handleUserNickname } = useCheckUserNickname();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const addInfoData = JSON.stringify({
      name,
      provider,
      email,
      nickname,
      phoneNumber,
      picture,
      role,
    });

    const signupDtoBlob = new Blob([addInfoData], { type: 'application/json' });
    setPostFormData({
      name: '',
      provider: '',
      email: '',
      nickname: '',
      phoneNumber: '',
      picture: '',
      role: '',
    });
    mutate(signupDtoBlob);
  };

  const handleUserCheckPhoneNumber = () => {
    const isEmptyPhoneNumber = phoneNumber.trim() === '';
    const checkPhoneData = {
      check: phoneNumber,
    };
    if (isEmptyPhoneNumber) return;
    handleUserPhone(checkPhoneData);
  };

  const handleUserCheckNickname = () => {
    const isEmptyNickname = nickname.trim() === '';
    const checkNicknameData = {
      check: nickname,
    };
    if (isEmptyNickname) return;
    handleUserNickname(checkNicknameData);
  };


  const handleFocus = () => {
    setIsClicked(false)
    setClicked(false)
  }
  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Input labelText="이름" type="text" name="name" disabled value={name} onChange={handleChange} />
      </div>
      <div>
        <Input labelText="이메일" type="text" name="email" disabled value={email} onChange={handleChange} />
      </div>
      <div>
        <Input
          labelText="닉네임"
          type="text"
          name="nickname"
          placeholder="닉네임을 입력해주세요"
          value={nickname}
          ref={nicknameRef}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleNicknameBlur}
          validateText={clicked? duplicateNickname.message : validateNickname.message}
          isValid={clicked? !duplicateNickname.status: validateNickname.status}
        />
        <StButton type="button" buttonText="중복 확인" onClick={handleUserCheckNickname} />
      </div>
      <div>
        <Input
          labelText="핸드폰 번호"
          type="text"
          name="phoneNumber"
          placeholder="핸드폰 번호를 입력해주세요."
          value={phoneNumber}
          ref={phoneNumbereRef}
          onChange={handleChange}
          onBlur={handlePhoneNumberBlur}
          onFocus={handleFocus}
          validateText={isClicked ? duplicatePhone.message : validatePhoneNumber.message}
          isValid={isClicked ? !duplicatePhone.status : validatePhoneNumber.status}
        />
        <StButton type="button" buttonText="중복 확인" onClick={handleUserCheckPhoneNumber} />
      </div>
      <SubmitButton>정보 추가하기</SubmitButton>
    </Form>
  );
};

export default AddInfoForm;
