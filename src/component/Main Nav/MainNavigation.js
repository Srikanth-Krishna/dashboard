import {
  FaSearch,
  FaRegMoon,
  FaBell,
  FaRegCommentDots,
  FaQrcode,
  FaThLarge,
} from 'react-icons/fa';
import './MainNavigation.css';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SettingOutlined,
  UserOutlined,
  InboxOutlined,
  MoneyCollectOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Header } from 'antd/es/layout/layout';
import { Avatar, Badge, Button, Dropdown } from 'antd';
import { Link } from 'react-router-dom';

export default function MainNavigation({ collapsed, setCollapsed }) {
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
    <Header className='app-header'>
      <div className='header-left'>
        <Button
          type='text'
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />

        <div className='search-box'>
          <FaSearch className='search-icon' />
          <input name='overallSearch' type='text' placeholder='Search here…' />
        </div>
      </div>

      <div className='header-right'>
        <button className='circle-btn'>
          <Avatar
            style={{ backgroundColor: '#f3f4f6', color: 'black' }}
            size='default'
            icon={<FaRegMoon />}
          ></Avatar>
        </button>

        <button className='circle-btn badge'>
          {/* <span className='badge-count'>1</span> */}
          <Badge count={3} size='small'>
            <Avatar
              style={{ backgroundColor: '#f3f4f6', color: 'black' }}
              size='default'
              icon={<FaBell />}
            ></Avatar>
          </Badge>
        </button>

        <button className='circle-btn badge '>
          <Badge count={3} size='small'>
            <Avatar
              style={{ backgroundColor: '#f3f4f6', color: 'black' }}
              size='default'
              icon={<FaRegCommentDots />}
            ></Avatar>
          </Badge>
          {/* <span className='badge-count'>1</span> */}
        </button>

        <button className='circle-btn'>
          <FaQrcode />
        </button>

        <button className='circle-btn'>
          <FaThLarge />
        </button>

        <Dropdown menu={{ items }} trigger={['click']}>
          <div className='profile'>
            <img
              src='https://i.pravatar.cc/40?img=5'
              alt='Kristin Watson'
              className='avatar'
            />

            <div className='profile-info'>
              <span className='name'>Kristin Watson</span>
              <small className='role'>Admin</small>
            </div>
          </div>
        </Dropdown>
      </div>
    </Header>
  );
}
