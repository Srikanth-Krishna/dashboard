import { FileTextFilled } from '@ant-design/icons';
import { Button, Card, message, Spin, Table } from 'antd';
import Search from 'antd/es/input/Search';
import Title from 'antd/es/typography/Title';
import React, { useEffect, useState } from 'react';
import { columns, fetchProducts } from './ListOrdersData';

export default function ListOrdersPage() {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

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
          <Button type='primary' style={{ padding: '0 20px' }}>
            <i>
              <FileTextFilled />
            </i>
            Export all Orders
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
