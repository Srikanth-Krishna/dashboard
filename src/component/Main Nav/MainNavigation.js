import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SettingOutlined,
  UserOutlined,
  InboxOutlined,
  MoneyCollectOutlined,
  LogoutOutlined,
  BulbFilled,
  BulbOutlined,
  SearchOutlined,
  MessageOutlined,
  BellOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';
import {
  Avatar,
  Badge,
  Button,
  Dropdown,
  Input,
  Space,
  theme,
  Typography,
} from 'antd';
import { Link } from 'react-router-dom';

const { Text } = Typography;

export default function MainNavigation({
  collapsed,
  setCollapsed,
  darkMode,
  setDarkMode,
}) {
  const token = theme.useToken();
  const items = [
    {
      key: '1',
      label: 'My Account',
      icon: <UserOutlined />,
      disabled: false,
    },
    {
      key: '2',
      label: 'Inbox',
      icon: <InboxOutlined />,
    },
    {
      key: '3',
      label: 'Billing',
      icon: <MoneyCollectOutlined />,
    },
    {
      key: '4',
      label: 'Settings',
      icon: <SettingOutlined />,
    },
    {
      key: '5',
      label: <Link to='/users/login'>Logout</Link>,
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <>
      <div
        style={{
          background: token.colorBgContainer,
          padding: '0 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 64,
          boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
        }}
      >
        <Space size='large'>
          <Button
            type='text'
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: 16,
              cursor: 'pointer',
              color: token.colorText,
            }}
          />

          <Input
            placeholder='Search here...'
            suffix={<SearchOutlined />}
            style={{
              width: 300,
              borderRadius: 6,
              backgroundColor: token.colorBgElevated,
              color: token.colorText,
            }}
          />
        </Space>

        <Space size='middle' align='center'>
          <Button
            shape='circle'
            icon={darkMode ? <BulbFilled /> : <BulbOutlined />}
            onClick={() => setDarkMode(!darkMode)}
            style={{
              background: token.colorBgElevated,
              border: 'none',
              color: token.colorText,
            }}
          />

          <Badge count={3} size='small' offset={[-2, 2]}>
            <Button
              shape='circle'
              icon={<BellOutlined />}
              style={{
                background: token.colorBgElevated,
                border: 'none',
                color: token.colorText,
              }}
            />
          </Badge>

          <Badge count={3} size='small' offset={[-2, 2]}>
            <Button
              shape='circle'
              icon={<MessageOutlined />}
              style={{
                background: token.colorBgElevated,
                border: 'none',
                color: token.colorText,
              }}
            />
          </Badge>

          <Button
            shape='circle'
            icon={<AppstoreOutlined />}
            style={{
              background: token.colorBgElevated,
              border: 'none',
              color: token.colorText,
            }}
          />
          <Dropdown menu={{ items }} trigger={['click']}>
            <Space>
              <Avatar
                src='https://randomuser.me/api/portraits/women/65.jpg'
                size='large'
              />
              <div style={{ lineHeight: 1.2 }}>
                <Text
                  strong
                  style={{ display: 'block', color: token.colorText }}
                >
                  Kristin Watson
                </Text>
                <Text type='secondary' style={{ fontSize: 12 }}>
                  Admin
                </Text>
              </div>
            </Space>
          </Dropdown>
        </Space>
      </div>
    </>
  );
}
