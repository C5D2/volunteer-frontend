import * as S from './style';
import { createPortal } from 'react-dom';

interface ModalProps {
  modalText: string;
  handleCloseClick: () => void;
  handleConfirmClick: () => void;
}
const Modal = ({ modalText, handleConfirmClick, handleCloseClick }: ModalProps) => {
  const modalElement = document.getElementById('modal');

  if (!modalElement) return null;

  return createPortal(
    <S.DimmedBackground>
      <S.StModal>
        <S.ModalText>{modalText}</S.ModalText>
        <S.BtnWrap>
          <S.ConfirmBtn buttonText="예" onClick={handleConfirmClick} />
          <S.CloseBtn buttonText="아니오" onClick={handleCloseClick} />
        </S.BtnWrap>
      </S.StModal>
    </S.DimmedBackground>,
    modalElement
  );
};

export default Modal;
