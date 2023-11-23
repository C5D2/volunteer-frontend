import { checkPhoneNumber } from '@utils/check/checkPhoneNumber';
import { checkNickName } from '@utils/check/chekNickName';
import { useState, useRef } from 'react';

export const useUesrInfoValidationByNickname = () => {
  const [validateNickname, setValidateNickname] = useState({ message: '', status: true });
  const nicknameRef = useRef<HTMLInputElement>(null);

  const handleNicknameBlur = () => {
    if (nicknameRef?.current) {
      const isExistRefValue = nicknameRef.current.value;
      const checkNicknameResult = checkNickName(isExistRefValue);
      const { validateMessage, validateState } = checkNicknameResult;
      setValidateNickname({ ...validateNickname, message: validateMessage, status: validateState });
    }
  };
  return { validateNickname, nicknameRef, handleNicknameBlur };
};

export const useUesrInfoValidationByPhoneNumber = () => {
  const [validatePhoneNumber, setValidatePhoneNumber] = useState({ message: '', status: true });
  const phoneNumbereRef = useRef<HTMLInputElement>(null);

  const handlePhoneNumberBlur = () => {
    if (phoneNumbereRef?.current) {
      const isExistRefValue = phoneNumbereRef.current.value;
      const checkPhoneNumberResult = checkPhoneNumber(isExistRefValue);
      const { validateMessage, validateState } = checkPhoneNumberResult;
      setValidatePhoneNumber({ ...validatePhoneNumber, message: validateMessage, status:validateState });
    }
  };
  return { validatePhoneNumber, phoneNumbereRef, handlePhoneNumberBlur };
};
