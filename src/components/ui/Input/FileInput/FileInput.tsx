import { ChangeEvent, forwardRef, ForwardedRef } from 'react';
import * as S from './style';
import Paragraph from '@components/ui/Paragraph/Paragraph';
import ImagePreview from './ImagePreview';
import DefalutImage from '@assets/images/image.svg';
export interface FileInputProps {
  name: string;
  isValid: boolean;
  value: File[];
  imageUrls?: (string | null)[];
  labelText: string;
  validateText: string;
  multiple: boolean;
  maxImage: number;
  pageName?: string
  onClick: (index: number) => void;
  onBlur: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FileInput = forwardRef(
  (
    {
      multiple,
      labelText,
      isValid,
      imageUrls,
      validateText,
      name,
      onBlur,
      onChange,
      onClick,
      maxImage,
      pageName = '',
    }: FileInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const renderImagePreviews = () => {
      console.log(maxImage);
      const previews = Array(maxImage).fill(DefalutImage);

      if (imageUrls && imageUrls.length > 0) {
        for (let i = 0; i < imageUrls.length; i++) {
          previews[i] = imageUrls[i];
        console.log(previews)
        }
      }

      return previews.map((url, index) => {
        const src = typeof url === 'string' ? url : url.communityImgPath;
        
        return <ImagePreview
          key={index}
          src={src}
          alt={`${index}`}
          isExist={url !== DefalutImage}
          onClick={onClick}
        />
      });
    };

    console.log(imageUrls)

    return (
      <S.InputLabelWrap>
        <div>
          <label>{labelText}</label>
          <input type="file" name={name} multiple={multiple} ref={ref} onBlur={onBlur} onChange={onChange} />
        </div>
        <S.PreviewWrap $pageName={pageName }>{renderImagePreviews()}</S.PreviewWrap>
        <Paragraph paragraphText={validateText} $isValid={isValid} />
      </S.InputLabelWrap>
    );
  }
);

export default FileInput;
