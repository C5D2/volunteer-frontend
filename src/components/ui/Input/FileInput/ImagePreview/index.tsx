import * as S from './style';


interface ImagePreviewProps {
  src: string;
  alt: string;
  isExist: boolean
  onClick: (index: number) => void
}

const ImagePreview = ({ src, alt, isExist, onClick }: ImagePreviewProps) => {
  const handleDelectClick = (fileIndex: number) => {
    onClick(fileIndex)
  }
  return (
    <S.ImageWrap>
      <S.ImageInner>
        <S.StImage src={ src } alt={alt} $isExist={ isExist} />
      </S.ImageInner>
      {isExist && (
        <S.CloseBtnWrap>
          <S.CloseBtn type='button' onClick={()=> handleDelectClick(Number(alt))}>x</S.CloseBtn>
        </S.CloseBtnWrap>
      )}
    </S.ImageWrap>
  );
};

export default ImagePreview;
