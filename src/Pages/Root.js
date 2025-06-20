import { Outlet } from 'react-router-dom';
import MainNavigation from '../component/Main Nav/MainNavigation';
import Sidebar from '../component/Sidebar/Sidebar';
import { Layout } from 'antd';
import { useState } from 'react';

export default function RootLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Layout>
        <Sidebar collapsed={collapsed} />
        <Layout>
          <MainNavigation collapsed={collapsed} setCollapsed={setCollapsed} />
          <Outlet />
        </Layout>
      </Layout>
    </>
  );
}
