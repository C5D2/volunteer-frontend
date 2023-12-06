import Article from '@components/ui/Aticle/Aticle';
import styled from 'styled-components';
export const Aticle = styled(Article)`
  width: 100%;
`;

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

export const HostGradeButton = styled.button`
  float: right;
  background-color: transparent;
  border: 2px solid #d9d9d9;
  width: 150px;
  height: 45px;
  border-radius: 30px;
  color: #d3d1d1;
  a {
    font-weight: 600;
  }
`;
