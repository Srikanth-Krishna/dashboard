import { useLocation, useNavigate } from 'react-router-dom';
import { sidebarData } from './sidebarData';
import { Layout, Menu, theme } from 'antd';
import logoPng from '../../Pages/UsersPage/Logo.PNG';

const { Sider } = Layout;

export default function Sidebar({ collapsed, darkMode }) {
  const token = theme.useToken();
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
          backgroundColor: darkMode ? '#141414' : '#ffffff',
          height: 'auto',
          overflow: 'auto',
          borderRight: `1px solid ${token.colorBorderSecondary}`,
          fontWeight: 500,
        }}
      >
        <div
          className='demo-logo-vertical'
          style={{
            height: 64,
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          }}
        >
          <img
            style={{
              height: 64,
              width: 150,
            }}
            src={logoPng}
            alt='skLogo'
          />
        </div>
        <Menu
          mode='inline'
          selectedKeys={[location.pathname]}
          defaultOpenKeys={openKeys}
          items={sidebarData}
          onClick={({ key }) => navigate(key)}
          style={{
            height: 'auto',
            backgroundColor: token.colorBgContainer,
            color: token.colorText,
            borderRight: 0,
          }}
        />
      </Sider>
    </>
  );
}
