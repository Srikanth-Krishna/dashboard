import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import { Button, Image, message, Popconfirm, Space, Tag } from 'antd';

// Randomize status to get 'Pending', 'Cancelled' or 'Success' message
function getStatus() {
  const randomValue = Math.random();

  if (randomValue < 1 / 3) {
    return 'Success';
  } else if (randomValue < 2 / 3) {
    return 'Cancelled';
  } else {
    return 'Pending';
  }
}

// Custom fetch products to return selected columns for orders
export async function fetchProducts() {
  const respone = await fetch('https://dummyjson.com/products');
  const data = await respone.json();
  const productList = data.products.map((product) => {
    return {
      image: product.thumbnail,
      name: product.title,
      id: Math.random().toString().slice(2, 11),
      price: product.price,
      quantity: product.stock,
      payment: Math.round(Math.random() * 100),
      status: getStatus(),
    };
  });
  console.log(productList);
  return productList;
}

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
    title: 'Product',
    dataIndex: 'name',
    key: 'name',
    render: (_, record) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Image src={record.image} alt={record.name} width={40} height={40} />
        <span
          onClick={() => message.info(`Viewing ${record.name}`)}
          style={{ maxWidth: 200, cursor: 'pointer' }}
        >
          {record.name}
        </span>
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
    title: 'Payment',
    dataIndex: 'payment',
    key: 'payment',
    render: () => <Tag color='green'>Complete</Tag>,
    align: 'center',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status) => {
      if (status === 'Success') {
        return <Tag color='green'>Success</Tag>;
      } else if (status === 'Cancelled') {
        return <Tag color='red'>Cancelled</Tag>;
      } else {
        return <Tag>Pending</Tag>;
      }
    },
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
