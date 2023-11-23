import { useState, useRef } from 'react';

type ChangeEventType = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
type RefType = { [key: string]: ChangeEventType };

const useValidation = () => {
  const inputRefs = useRef<RefType>({});

  const [validateMessage, setValidateMessage] = useState({
    communityTitle: '',
    communityMaxParticipant: '',
    communityAuthor: '',
    communityContent: '',
    communityLocation: '',
    categoryType: '',
    file: '',
  });
  const [validateStatus, setValidateStatus] = useState({
    communityTitle: true,
    communityMaxParticipant: true,
    communityAuthor: true,
    communityContent: true,
    communityLocation: true,
    categoryType: true,
    file: true,
  });

  const communityFormRef = (name: string, ref: ChangeEventType | null) => {
    if (ref) {
      inputRefs.current[name] = ref;
    }
  };

  const validationMessage = (type: string, isError: boolean, errorMessage: string = '') => {
    setValidateMessage({ ...validateMessage, [type]: errorMessage });
    setValidateStatus({ ...validateStatus, [type]: !isError });
  };

  const validateTitle = () => {
    const titleInput = inputRefs.current['title'];
    const titleRefValue = titleInput.value;
    const isEmptyTitle = titleRefValue.trim() === '';
    if (isEmptyTitle) {
      validationMessage('title', isEmptyTitle, '커뮤니티 이름을 입력해주세요.');
      titleInput.style.border = '2px solid #fb304b';
    } else {
      validationMessage('title', isEmptyTitle);
      titleInput.style.border = '';
    }
  };

  const validateContent = () => {
    const contentTextarea = inputRefs.current['content'];
    const contentRefValue = contentTextarea.value;
    const isEmptyContent = contentRefValue.trim() === '';
    if (isEmptyContent) {
      validationMessage('content', isEmptyContent, '커뮤니티 소개를 작성해주세요.');
      contentTextarea.style.border = '2px solid #fb304b';
    } else {
      validationMessage('content', isEmptyContent);
      contentTextarea.style.border = '';
    }
  };

  const validateCategoryType = () => {
    const categorySelect = inputRefs.current['categoryType'];
    const categoryTypeRefValue = categorySelect.value;
    const isEmptyCategoryType = categoryTypeRefValue.trim() === '';
    if (isEmptyCategoryType) {
      validationMessage('categoryType', isEmptyCategoryType, '카테고리를 선택해주세요.');
      categorySelect.style.border = '2px solid #fb304b';
    } else {
      validationMessage('categoryType', isEmptyCategoryType);
      categorySelect.style.border = '';
    }
  };

  const validateMaxParticipant = () => {
    const maxParticipantInput = inputRefs.current['maxParticipant'];
    const maxParticipantRefValue = maxParticipantInput.value;
    const isEmptyMaxParticipant = Number(maxParticipantRefValue) < 10;
    const isMultipleOfTen = Number(maxParticipantRefValue) % 10 !== 0;

    if (isEmptyMaxParticipant) {
      validationMessage('maxParticipant', isEmptyMaxParticipant, '최소 인원은 10명 이상이여야합니다.');
      maxParticipantInput.style.border = '2px solid #fb304b';
    } else {
      validationMessage('maxParticipant', isEmptyMaxParticipant);
      maxParticipantInput.style.border = '';
    }

    if (isMultipleOfTen) {
      validationMessage('maxParticipant', isMultipleOfTen, '10명 단위로 작성해주세요.');
      maxParticipantInput.style.border = '2px solid #fb304b';
    } else {
      validationMessage('maxParticipant', isMultipleOfTen);
      maxParticipantInput.style.border = '';
    }
  };

  const validateLocation = () => {
    const locationInput = inputRefs.current['location'];
    const locationRefValue = locationInput.value;
    const isEmptyLocation = locationRefValue.trim() === '';
    if (isEmptyLocation) {
      validationMessage('location', isEmptyLocation, '활동장소를 입력해주세요.');
      locationInput.style.border = '2px solid #fb304b';
    } else {
      validationMessage('location', isEmptyLocation);
      locationInput.style.border = '';
    }
  };
  const validateFile = () => {
    const fileInput = inputRefs.current['file'];
    const fileRefValue = fileInput.value;
    const isEmptyfile = fileRefValue.trim() === '';
    if (isEmptyfile) {
      validationMessage('file', isEmptyfile, '이미지를 입력해주세요.');
    } else {
      validationMessage('file', isEmptyfile);
    }
  };

  return {
    validateStatus,
    validateMessage,
    validateFile,
    validateTitle,
    communityFormRef,
    validateContent,
    validateLocation,
    validateCategoryType,
    validateMaxParticipant,
  };
};

export default useValidation;
