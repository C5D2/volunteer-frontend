import { useState } from 'react'
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { checkData, checkUserNickname, checkUserPhone, createUserAddInfo } from '@apis/auth/signup';

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
  const [duplicatePhone, setDuplicatePhone] = useState({ message: '', status: true })
  const [isClicked, setIsClicked] = useState(false)
  const { mutate } = useMutation(checkUserPhone, {
    onSuccess: (data) => {
 
      setDuplicatePhone({...duplicatePhone, message: data.message, status:data.data.exist})
    }
  })
  
  const handleUserPhone = (phoneCheck:checkData) => {
    mutate(phoneCheck)
    setIsClicked(true)
  }
 
  return {handleUserPhone, duplicatePhone, setIsClicked, isClicked}
}

export const useCheckUserNickname = () => {
    const [duplicateNickname, setDuplicateNickname] = useState({ message: '', status: true });
    const [isClicked, setIsClicked] = useState(false);
  const { mutate } = useMutation(checkUserNickname,
    {
      onSuccess: (data) => {
        setDuplicateNickname({...duplicateNickname, message:data.message, status: data.data.exist})
    }
  }
  )
  const handleUserNickname = (nicknameCheck:checkData) => {
    mutate(nicknameCheck)
    setIsClicked(true)
  }
  return {duplicateNickname, isClicked, setIsClicked ,handleUserNickname}
}