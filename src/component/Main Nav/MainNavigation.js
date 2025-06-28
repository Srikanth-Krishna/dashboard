import {
  FaSearch,
  FaRegMoon,
  FaBell,
  FaRegCommentDots,
  FaQrcode,
  FaThLarge,
} from 'react-icons/fa';
import './MainNavigation.css';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Header } from 'antd/es/layout/layout';
import { Button } from 'antd';

export default function MainNavigation({ collapsed, setCollapsed }) {
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
          <FaRegMoon />
        </button>

        <button className='circle-btn badge'>
          <FaBell />
          <span className='badge-count'>1</span>
        </button>

        <button className='circle-btn badge blue'>
          <FaRegCommentDots />
          <span className='badge-count'>1</span>
        </button>

        <button className='circle-btn'>
          <FaQrcode />
        </button>

        <button className='circle-btn'>
          <FaThLarge />
        </button>

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
      </div>
    </Header>
  );
}
