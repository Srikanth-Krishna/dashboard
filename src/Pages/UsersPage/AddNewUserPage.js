import { Card, Col, Form, Input, Row, Button, Radio, message } from 'antd';
import Password from 'antd/es/input/Password';
import Title from 'antd/es/typography/Title';
import React from 'react';

const options = [
  { label: 'Allow', value: 'Allow' },
  { label: 'Deny', value: 'Deny' },
];

const boldFont = { fontWeight: 600 };

export default function AddNewUserPage() {
  const [form] = Form.useForm();

  const onFinish = () => {
    message.success('User created');
    form.resetFields();
  };

  return (
    <>
      <Title level={2} style={{ margin: '20px 0 0 20px' }}>
        Add User
      </Title>

      <Form form={form} onFinish={onFinish} layout='vertical'>
        <Card style={{ width: '97%', margin: 20 }}>
          <Row gutter={[32, 16]} align='top' wrap>
            <Col xs={24} md={8}>
              <div>
                <h4 style={{ margin: '0 0 3px 0' }}>Account</h4>
                <p style={{ margin: 0, fontSize: 12, color: 'gray' }}>
                  Fill in the information to add new account.
                </p>
              </div>
            </Col>

            <Col xs={24} md={16}>
              <Form.Item style={boldFont} label='Name' name='name'>
                <Input
                  placeholder='Enter username'
                  style={{ width: '100%' }}
                  required
                />
              </Form.Item>

              <Form.Item style={boldFont} label='Email' name='email'>
                <Input
                  placeholder='Enter email'
                  style={{ width: '100%' }}
                  required
                />
              </Form.Item>

              <Form.Item style={boldFont} label='Password' name='password'>
                <Password
                  placeholder='Enter Password'
                  type='password'
                  style={{ width: '100%' }}
                  required
                />
              </Form.Item>

              <Form.Item
                style={boldFont}
                label='Confirm Password'
                name='confirmPassword'
              >
                <Password
                  placeholder='Confirm Password'
                  type='password'
                  style={{ width: '100%' }}
                  required
                />
              </Form.Item>
            </Col>
          </Row>
        </Card>

        <Card style={{ width: '97%', margin: '0 20px 20px 20px' }}>
          <Row>
            <Col xs={24} md={8}>
              <div>
                <h4 style={{ margin: '0 0 3px 0' }}>Permissions</h4>
                <p style={{ margin: 0, fontSize: 12, color: 'gray' }}>
                  Items that the account is allowed to edit.
                </p>
              </div>
            </Col>
            <Col>
              <Form.Item label='Add product' name='addProduct'>
                <Radio.Group
                  block
                  options={options}
                  defaultValue='Deny'
                  optionType='button'
                  buttonStyle='solid'
                />
              </Form.Item>
              <Form.Item label='Update product' name='updateProduct'>
                <Radio.Group
                  block
                  options={options}
                  defaultValue='Deny'
                  optionType='button'
                  buttonStyle='solid'
                />
              </Form.Item>
              <Form.Item label='Delete product' name='deleteProduct'>
                <Radio.Group
                  block
                  options={options}
                  defaultValue='Deny'
                  optionType='button'
                  buttonStyle='solid'
                />
              </Form.Item>
              <Form.Item label='Apply Discount' name='applyDiscount'>
                <Radio.Group
                  block
                  options={options}
                  defaultValue='Deny'
                  optionType='button'
                  buttonStyle='solid'
                />
              </Form.Item>
            </Col>
          </Row>
        </Card>

        <Form.Item style={{ margin: '0 0 0 20px' }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
