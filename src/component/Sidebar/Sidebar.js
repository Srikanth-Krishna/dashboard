import { useLocation, useNavigate } from 'react-router-dom';
import { sidebarData } from './sidebarData';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

export default function Sidebar({ collapsed }) {
  const navigate = useNavigate();
  const location = useLocation();

  const openKeys = sidebarData
    .filter((item) =>
      item.children?.some((child) => child.key === location.pathname)
    )
    .map((item) => item.key);

  return (
    <>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={250}
        style={{
          backgroundColor: 'white',
          height: 'auto',
          fontWeight: 500,
        }}
      >
        <div className='demo-logo-vertical' />
        <Menu
          theme='light'
          mode='inline'
          selectedKeys={[location.pathname]}
          defaultOpenKeys={openKeys}
          defaultSelectedKeys={openKeys}
          items={sidebarData}
          onClick={({ key }) => navigate(key)}
        />
      </Sider>
    </>
  );
}
