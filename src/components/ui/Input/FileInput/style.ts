import styled from 'styled-components';
import CamaraIcon from '@assets/images/camara_icon.svg';

interface PreviewProps {
  $pageName: string
}
export const InputLabelWrap = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 780px) {
    width: 50%;
  }
  @media (min-width: 1200px) {
    width: 50%;
  }
  width: 100%;
  label {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 600;
  }

  input[type='file'] {
    position: relative;
    margin-left: 10px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
  }

  input[type='file']::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 1px solid #d9d9d9;
    border-radius: 50%;
  }

  input[type='file']::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url(${CamaraIcon});
    background-size: 40px 40px;
    background-repeat: no-repeat;
    background-position: center;
  }
  input[type='file']::file-selector-button {
    visibility: hidden;
  }
  p {
    font-size: 14px;
    height: 14px;
    margin: 10px 0;
  }
`;

export const PreviewWrap = styled.div<PreviewProps>`
display: flex;
gap: 10px;
justify-content: space-between;
width: 100%;
height: ${(props)=> props.$pageName? '400px': '200px'};
`