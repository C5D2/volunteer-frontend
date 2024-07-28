import { MemberList } from './MemberList';
import { ListWrap } from '../community/CommunitySearchPage';
import AdminSidebar from '@components/Admin/adminLayout/AdminSidebar';

const MemberListPage = () => {
  return (
    <ListWrap>
      <AdminSidebar />
      <div>
        <MemberList />
      </div>
    </ListWrap>
  );
};

export default MemberListPage;
