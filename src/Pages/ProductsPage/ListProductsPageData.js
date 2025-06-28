import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Image, message, Popconfirm, Space, Tag } from 'antd';

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

export const columns = [
  {
    title: 'Product',
    dataIndex: 'name',
    key: 'name',
    render: (_, record) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Image src={record.image} alt={record.name} width={40} height={40} />
        <span style={{ maxWidth: 200 }}>{record.name}</span>
      </div>
    ),
  },
  {
    title: 'Product ID',
    dataIndex: 'id',
    key: 'id',
    render: (id) => `#${id}`,
    align: 'center',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (price) =>
      `$${price.toLocaleString(undefined, { minimumFractionDigits: 3 })}`,
    align: 'center',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
    render: (q) => q.toLocaleString(),
    align: 'center',
  },
  {
    title: 'Sale',
    dataIndex: 'sale',
    key: 'sale',
    align: 'center',
  },
  {
    title: 'Stock',
    dataIndex: 'stock',
    key: 'stock',
    render: (stock) =>
      stock ? (
        <Tag color='green'>In Stock</Tag>
      ) : (
        <Tag
          color='red'
          style={{ backgroundColor: '#ffe8e6', color: '#ff4d4f' }}
        >
          Out of stock
        </Tag>
      ),
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
