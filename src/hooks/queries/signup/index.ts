import { checkData, checkUserPhone, createUserAddInfo } from '@apis/auth/signup';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

export const useCreateUserAddInfo = () => {
  const navigate = useNavigate();
  const { mutate } = useMutation((userInfo: Blob) => createUserAddInfo(userInfo), {
    onSuccess: () => {
      navigate('/');
    },
  });
  return { mutate };
};


export const useCheckUserPhone = () => {
  const { mutate } = useMutation(checkUserPhone)
  
  const handleUserPhone = (phoneCheck:checkData) => {
    mutate(phoneCheck)
  }
  return {handleUserPhone}
}