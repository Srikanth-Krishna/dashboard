import { PlusOutlined } from '@ant-design/icons';
import { Button, Card, message, Spin, Table } from 'antd';
import Search from 'antd/es/input/Search';
import Title from 'antd/es/typography/Title';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { columns, fetchUsers } from './AllUsersData';

export default function ListOrdersPage() {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchUsers();
        console.log(data);
        setUsers(data);
      } catch (err) {
        message.error('Failed to fetch users');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const filteredData = users.filter((user) =>
    user.userName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Title level={1} style={{ margin: 20 }}>
        Orders List
      </Title>
      <Card style={{ margin: '0 20px 20px 20px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}
        >
          <Search
            onChange={setSearch}
            placeholder='Search here..'
            style={{ width: 304 }}
          />
          <Button
            type='primary'
            style={{ padding: '0 20px' }}
            onClick={() => navigate('/users/add-user')}
          >
            <i>
              <PlusOutlined />
            </i>
            Add New
          </Button>
        </div>
        <div>
          <Spin spinning={loading}>
            <Table
              dataSource={filteredData}
              columns={columns}
              rowKey={(record) => record.id}
              pagination={{ pageSize: 10 }}
            />
          </Spin>
        </div>
      </Card>
    </>
  );
}
