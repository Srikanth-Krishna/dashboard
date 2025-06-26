import React from 'react';
import { Button, Card, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import ImageUploader from '../../component/common/Uploader/Uploader';

const tinyTextStyle = { fontSize: 10, fontWeight: 400, color: 'grey' };

export default function AddProductsPage() {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <>
      <h1 style={{ margin: '20px 20px 0px 20px' }}>Add Product</h1>
      <Form
        name='addProduct'
        layout='vertical'
        onFinish={onFinish}
        style={{ maxWidth: 'auto', fontWeight: 600 }}
      >
        <Row>
          <Col span={11} style={{ margin: 20 }}>
            <Card style={{ minHeight: 550 }}>
              <Form.Item
                label='Product Name'
                name='productName'
                rules={[
                  { required: true, message: 'Please input Product name!' },
                ]}
              >
                <Input placeholder='Enter product name..' maxLength={20} />
              </Form.Item>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto auto',
                  gap: '10px',
                }}
              >
                <Form.Item
                  label='Category'
                  name='category'
                  rules={[
                    { required: true, message: 'Please choose a category' },
                  ]}
                >
                  <Select placeholder='Choose category'>
                    <Select.Option value='Choose Category'>
                      Choose Category
                    </Select.Option>
                    <Select.Option value='Shop'>Shop</Select.Option>
                    <Select.Option value='Product'>Product</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label='Gender'
                  name='gender'
                  rules={[{ required: true, message: 'Please select gender' }]}
                >
                  <Select placeholder='Select gender'>
                    <Select.Option value='Male'>Male</Select.Option>
                    <Select.Option value='Female'>Female</Select.Option>
                    <Select.Option value='Other'>Other</Select.Option>
                  </Select>
                </Form.Item>
              </div>
              <Form.Item
                label='Brand'
                name='brand'
                rules={[{ required: true, message: 'Please Select brand!' }]}
              >
                <Select placeholder='Select brand'>
                  <Select.Option value='Brand 1'>Brand 1</Select.Option>
                  <Select.Option value='Brand 2'>Brand 2</Select.Option>
                  <Select.Option value='Brand 3'>Brand 3</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                label='Description'
                name='description'
                rules={[
                  {
                    required: true,
                    message: 'Please input Product description!',
                  },
                ]}
              >
                <Input.TextArea
                  placeholder='Description of the product'
                  maxLength={100}
                  style={{ height: '150px' }}
                />
              </Form.Item>
            </Card>
          </Col>
          <Col span={11} style={{ margin: 15 }}>
            <Card style={{ minHeight: 550 }}>
              <Form.Item label='Upload Images' name='imageUploader'>
                <ImageUploader />
                <p style={tinyTextStyle}>
                  You need to add at least 4 images. Pay attention to the
                  quality of the pictures you add, comply with the background
                  color standards. Pictures must be in certain dimensions.
                  Notice that the product shows all the details.
                </p>
              </Form.Item>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto auto',
                  gap: '22px',
                }}
              >
                <Form.Item
                  label='Add size'
                  name='size'
                  rules={[{ required: true, message: 'Please select a size!' }]}
                >
                  <Select placeholder='Select size'>
                    <Select.Option value='EU-40'>EU-40</Select.Option>
                    <Select.Option value='EU-41'>EU-41</Select.Option>
                    <Select.Option value='EU-42'>EU-42</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label='Product Date'
                  name='productDate'
                  rules={[
                    { required: true, message: 'Please select product date!' },
                  ]}
                >
                  <DatePicker />
                </Form.Item>
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto auto',
                  gap: 20,
                  paddingTop: 150,
                }}
              >
                <Form.Item label={null}>
                  <Button type='primary' htmlType='submit' block>
                    Add Product
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Button type='default' block>
                    Save Product
                  </Button>
                </Form.Item>
              </div>
            </Card>
          </Col>
        </Row>
      </Form>
    </>
  );
}
