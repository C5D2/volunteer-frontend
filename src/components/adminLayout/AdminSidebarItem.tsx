type MenuType = {
  name: string;
  path: string;
};

function AdminSidebarItem({ menu, isActive }: { menu: MenuType; isActive: boolean | undefined }) {
  return isActive === true ? (
    <div className="sidebar-item active">
      <p>{menu.name}</p>
    </div>
  ) : (
    <div className="sidebar-item ">
      <p>{menu.name}</p>
    </div>
  );
}

export default AdminSidebarItem;
