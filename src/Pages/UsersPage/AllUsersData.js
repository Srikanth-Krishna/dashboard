import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Image, message, Popconfirm, Space } from 'antd';

// Fetch
export const fetchUsers = async () => {
  const response = await fetch('https://dummyjson.com/users');
  const data = await response.json();
  const userList = data.users.map((user) => {
    return {
      userName: user.firstName + ' ' + user.lastName,
      phone: user.phone,
      email: user.email,
      image: user.image,
    };
  });
  return userList;
};

// Handlers
const handleEdit = (record) => {
  console.log('Edit:', record);
  message.info(`Editing ${record.name}`);
};

const handleDelete = (recordId) => {
  console.log('Delete:', recordId);
  // setProducts((prev) => prev.filter((p) => p.id !== recordId));
  message.success('Product deleted');
};

const handleView = (record) => {
  console.log('View:', record);
  message.info(`Viewing ${record.name}`);
};

// columns definition for orderslist
export const columns = [
  {
    title: 'User',
    dataIndex: 'user',
    key: 'user',
    render: (_, record) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Image src={record.image} alt={record.name} width={40} height={40} />
        <span
          onClick={() => message.info(`Viewing ${record.userName}`)}
          style={{ maxWidth: 200, cursor: 'pointer', fontWeight: 500 }}
        >
          {record.userName}
        </span>
      </div>
    ),
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
    render: (phone) => phone,
    align: 'center',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: (email) => email,
    align: 'center',
  },
  {
    title: 'Actions',
    key: 'actions',
    render: (_, record) => (
      <Space>
        <Button
          type='link'
          icon={<EyeOutlined />}
          onClick={() => handleView(record)}
        />
        <Button
          type='link'
          icon={<EditOutlined />}
          onClick={() => handleEdit(record)}
        />
        <Popconfirm
          title='Are you sure to delete this product?'
          onConfirm={() => handleDelete(record.id)}
          okText='Yes'
          cancelText='No'
        >
          <Button danger type='link' icon={<DeleteOutlined />} />
        </Popconfirm>
      </Space>
    ),
    align: 'center',
  },
];
