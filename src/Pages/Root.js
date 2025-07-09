import { Outlet } from 'react-router-dom';
import MainNavigation from '../component/Main Nav/MainNavigation';
import Sidebar from '../component/Sidebar/Sidebar';
import { ConfigProvider, Layout, theme } from 'antd';
import { useState } from 'react';

const { Footer } = Layout;

export default function RootLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        }}
      >
        <Layout>
          <Sidebar darkMode={darkMode} collapsed={collapsed} />
          <Layout>
            <MainNavigation
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              collapsed={collapsed}
              setCollapsed={setCollapsed}
            />
            <Outlet />
            <Footer style={{ textAlign: 'center' }}>
              Dashboard ©{new Date().getFullYear()} Created by Srikanth Krishna
            </Footer>
          </Layout>
        </Layout>
      </ConfigProvider>
    </>
  );
}
