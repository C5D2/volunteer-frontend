import { FileInput, Input } from '@components/ui/Input';
import SelectLabel from '@components/ui/SelectLabel/SelectLabel';
import TextareaLabel from '@components/ui/Textarea';
import { useFormState, useValidation } from '@hooks/form';
import { FormEvent } from 'react';
import useShownModal from '@hooks/modal';
import Modal from '@components/ui/Modal';
import { useParams } from 'react-router-dom';
import * as S from './style';
import { CATEGORY_TYPE } from '@constants/community';
import { CommunityPost, UpdateCommunity } from '@apis/community/post';

interface CommunityFormProps {
  initialData: {
    [key: string]: any;
  };
  initialImageURLs?: (string | null)[];
  onSave?: (communityData: CommunityPost) => void;
  onUpadate?: (communityData: UpdateCommunity) => void;
}

const CommunityForm = ({ initialData, initialImageURLs, onSave, onUpadate }: CommunityFormProps) => {
  const { communityId } = useParams();
  const { imageURLs, postFormData, setPostFormData, handleChange, setImageURLs, handleFileDelectClick } = useFormState(
    initialData,
    initialImageURLs
  );
  const { communityTitle, communityContent, categoryType, communityMaxParticipant, communityLocation, file } =
    postFormData;
  console.log(file)
  const isEmptyFormData =
    ![communityTitle, communityContent, categoryType, communityMaxParticipant, communityLocation].every(Boolean) ||
    file.length === 0;
    
  const { isShown, setIsShown, handleCloseClick } = useShownModal();
  
  const {
    validateStatus,
    validateMessage,
    validateFile,
    validateTitle,
    communityFormRef,
    validateContent,
    validateLocation,
    validateCategoryType,
    validateMaxParticipant,
  } = useValidation();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isEmptyFormData) return alert('모든 값은 입력이 필수 입니다.');
    if (!isEmptyFormData) setIsShown(true);
  };
  
  const handleConfirmClick = () => {
    const formData = new FormData();
    const isExistFile = file;
    console.log(categoryType);

    if (isExistFile) {
      for (let fileIndex = 0; fileIndex < file.length; fileIndex++) {
        const currentFile = isExistFile[fileIndex];
        const imageBlob = new Blob([currentFile], { type: 'image/jpeg' });
        formData.append('imageList', imageBlob, 'image.jpg');
      }
    }

    try {
      const jsonFormData = JSON.stringify({
        communityTitle,
        communityContent,
        communityMaxParticipant,
        communityLocation,
        categoryType,
      });
      const blob = new Blob([jsonFormData], { type: 'application/json' });
      formData.append('communityRequestDto', blob);

      !communityId ? onSave?.({ communityData: formData, }) : onUpadate?.({communityData:formData, communityId:communityId});
      setPostFormData({
        communityTitle: '',
        categoryType: '',
        communityContent: '',
        communityMaxParticipant: 10,
        communityLocation: '',
        file: [],
      });
      setImageURLs([]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {isShown && (
        <Modal
          modalText={!communityId ? '커뮤니티를 생성하시겠어요?' : '커뮤니티를 수정하시겠어요?'}
          handleCloseClick={handleCloseClick}
          handleConfirmClick={handleConfirmClick}
        />
      )}
      <S.Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="communityTitle"
          labelText="커뮤니티 이름"
          placeholder="커뮤니티 이름을 작성해주세요"
          onBlur={validateTitle}
          onChange={handleChange}
          value={postFormData.communityTitle}
          validateText={validateMessage.communityTitle}
          isValid={validateStatus.communityTitle}
          ref={(ref) => communityFormRef('communityTitle', ref)}
        />
        <SelectLabel
          labelText="커뮤니티 카테고리"
          value={postFormData.categoryType}
          validateText={validateMessage.categoryType}
          onBulr={validateCategoryType}
          onChange={handleChange}
          isValid={validateStatus.categoryType}
          optionData={CATEGORY_TYPE}
          ref={(ref) => communityFormRef('categoryType', ref)}
        />
        <FileInput
          name="file"
          maxImage={3}
          labelText="이미지"
          multiple={true}
          value={postFormData.file}
          onBlur={validateFile}
          imageUrls={imageURLs}
          onChange={handleChange}
          isValid={validateStatus.file}
          validateText={validateMessage.file}
          ref={(ref) => communityFormRef('file', ref)}
          onClick={handleFileDelectClick}
        />
        <Input
          type="number"
          name="communityMaxParticipant"
          labelText="모집인원"
          placeholder="커뮤니티 모집인원을 작성해주세요."
          onBlur={validateMaxParticipant}
          onChange={handleChange}
          value={postFormData.communityMaxParticipant}
          validateText={validateMessage.communityMaxParticipant}
          isValid={validateStatus.communityMaxParticipant}
          ref={(ref) => communityFormRef('communityMaxParticipant', ref)}
        />
        <Input
          type="text"
          name="communityLocation"
          labelText="활동장소"
          placeholder="커뮤니티 활동 장소을 작성해주세요."
          onBlur={validateLocation}
          onChange={handleChange}
          value={postFormData.communityLocation}
          validateText={validateMessage.communityLocation}
          isValid={validateStatus.communityLocation}
          ref={(ref) => communityFormRef('location', ref)}
        />
        <TextareaLabel
          name="communityContent"
          value={postFormData.communityContent}
          labelText="커뮤니티 소개"
          validateText={validateMessage.communityContent}
          placeholder="커뮤니티 소개를 작성해주세요."
          onBlur={validateContent}
          onChange={handleChange}
          ref={(ref) => communityFormRef('communityContent', ref)}
          isValid={validateStatus.communityContent}
          isPage='communityFormPage'
        />
        <S.BtnWrap>
          <S.StButton buttonText="제출하기" />
        </S.BtnWrap>
      </S.Form>
    </>
  );
};

export default CommunityForm;
