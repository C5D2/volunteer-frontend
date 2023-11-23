import styled from 'styled-components';
import { CommunityList } from './CommunityList';
import AdminSidebar from '@components/adminLayout/AdminSidebar';

const CommunitySearchPage = () => {
  return (
    <ListWrap>
      <AdminSidebar />
      <div>
        <CommunityList />
      </div>
    </ListWrap>
  );
};

export default CommunitySearchPage;

export const ListWrap = styled.div`
  display: flex;
  padding: 120px 0 0 0;
  width: 100%;
`;

export const H3Title = styled.div`
  font-family: 'BMHANNAPro';
  font-size: 40px;
  text-align: center;
  padding: 50px 0 50px 0;
  box-sizing: border-box;
  border-top: solid 2px #333;
  border-bottom: solid 2px #333;
  margin-bottom: 30px;
  width: 100%;
`;
