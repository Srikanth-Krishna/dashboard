import { MdOutlineTipsAndUpdates } from 'react-icons/md';
import { Button, Card, message, Select, Spin, Table } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Search from 'antd/es/input/Search';
import { columns } from './ListProductsPageData';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchProducts } from '../../component/util/util';

const tinyTextStyle = { color: 'gray', fontSize: 'smaller', margin: 0 };

export default function ListProductsPage() {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        message.error('Failed to fetch products');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const filteredData = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h2 style={{ margin: 20, fontSize: 30 }}>Products List</h2>
      <Card
        style={{
          margin: '0 20px 20px 20px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <i
              style={{
                fontSize: 18,
                padding: '8px 4px 4px 4px',
                color: '#1677ff',
              }}
            >
              <MdOutlineTipsAndUpdates />
            </i>
            <p style={{ margin: 0, padding: '0px 10px', color: 'GrayText' }}>
              Tip search by Product ID: Each product is provided with a unique
              ID, which you can rely on to find the exact product you need.
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              height: '40px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <p style={tinyTextStyle}>Showing</p>
                <Select defaultValue={10}>
                  <Select.Option value='10'>10</Select.Option>
                  <Select.Option value='20'>20</Select.Option>
                  <Select.Option value='30'>30</Select.Option>
                </Select>{' '}
                <p style={tinyTextStyle}> entries.</p>
              </div>
              <Search
                name='productSearch'
                placeholder='Search here...'
                style={{ width: 304 }}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Button
              type='primary'
              icon={<PlusOutlined />}
              style={{ width: 200 }}
              onClick={() => navigate('/products/add')}
            >
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
        </div>
      </Card>
    </>
  );
}
