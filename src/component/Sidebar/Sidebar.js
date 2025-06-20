import { sidebarData } from './sidebarData';
// import './Sidebar.css';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

export default function Sidebar({ collapsed }) {
  return (
    <>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ backgroundColor: 'white', height: 'auto' }}
        width={250}
      >
        <div className='demo-logo-vertical' />
        <Menu
          theme='light'
          mode='inline'
          siderbg='white'
          defaultSelectedKeys={['1']}
          items={sidebarData}
        />
      </Sider>
    </>
  );
}
