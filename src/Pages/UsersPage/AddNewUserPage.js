import { Card, Col, Form, Input, Row, Button } from 'antd';
import Password from 'antd/es/input/Password';
import Title from 'antd/es/typography/Title';
import React from 'react';

export default function AddNewUserPage() {
  return (
    <>
      <Title level={2} style={{ margin: '20px 0 0 20px' }}>
        Add User
      </Title>

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
            <Form layout='vertical'>
              <Form.Item label='Name' name='name'>
                <Input
                  placeholder='Enter username'
                  style={{ width: '100%' }}
                  required
                />
              </Form.Item>

              <Form.Item label='Email' name='email'>
                <Input
                  placeholder='Enter email'
                  style={{ width: '100%' }}
                  required
                />
              </Form.Item>

              <Form.Item label='Password' name='password'>
                <Password
                  placeholder='Enter Password'
                  type='password'
                  style={{ width: '100%' }}
                  required
                />
              </Form.Item>

              <Form.Item label='Confirm Password' name='confirmPassword'>
                <Password
                  placeholder='Confirm Password'
                  type='password'
                  style={{ width: '100%' }}
                  required
                />
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Card>

      <Card style={{ width: '97%', margin: '0 20px 20px 20px' }}>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Card>
    </>
  );
}
