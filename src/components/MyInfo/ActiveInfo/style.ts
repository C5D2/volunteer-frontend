import Article from '@components/ui/Aticle/Aticle';
import styled from 'styled-components';
export const Aticle = styled(Article)`
  width: 100%;
`;
interface ButtonProps {
  eligible: boolean;
}

export const ActiveBox = styled.ul`
  display: flex;
  width: 100%;
  height: 218px;
  margin-top: 24px;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 16px;
`;

export const HostGradeUpRequirement = styled.p`
  padding: 15px 0 25px 0;
  float: left;
  font-size: 15px;
  color: #a1a1a1;
`;

export const HostGradeButton = styled.button<ButtonProps>`
  float: right;
  background-color: ${({ eligible }) => (eligible ? '#57C8B5' : 'transparent')};
  border: 2px solid ${({ eligible }) => (eligible ? 'transparent' : '#D9D9D9')};
  width: 150px;
  height: 45px;
  border-radius: 30px;
  color: ${({ eligible }) => (eligible ? 'white' : '#D3D1D1')};
  cursor: ${({ eligible }) => (eligible ? 'pointer' : 'default')};
  a {
    font-weight: 600;
  }

  &:hover {
    ${({ eligible }) =>
      eligible ? 'box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;' : ''}
  }
`;
