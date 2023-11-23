import { useMatch, Link } from 'react-router-dom';
import styled from 'styled-components';
import AdminSidebarItem from './AdminSidebarItem';

type MenuType = {
  name: string;
  path: string;
};

function MenuItem({ menu }: { menu: MenuType }) {
  const match = useMatch(menu.path);
  return (
    <StyledLink to={menu.path} className={match ? 'active' : ''}>
      <AdminSidebarItem menu={menu} isActive={undefined} />
    </StyledLink>
  );
}

function AdminSidebar() {
  const menus = [
    { name: '회원관리', path: '/admin/member' },
    { name: '커뮤니티목록', path: '/admin/community' },
  ];

  return (
    <Sidebar>
      <Menu>
        {menus.map((menu) => (
          <MenuItem key={menu.name} menu={menu} />
        ))}
      </Menu>
    </Sidebar>
  );
}

export default AdminSidebar;

const Sidebar = styled.div`
  display: flex;
  border-right: 1px solid #e0e0e0;
  flex-direction: column;
  align-items: flex-end;
  width: 20%;
`;

const Menu = styled.div`
  margin-top: 30px;
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  color: gray;
  text-decoration: none;

  &.active {
    color: black;
  }
`;
