import { Card, message } from 'antd';
import logo from './Logo.PNG';
import './LoginUser.css';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginUser() {
  const navigate = useNavigate();

  const onFinish = (values) => {
    navigate('/');
  };

  return (
    <div className='login-screen'>
      <Card
        style={{
          width: 400,
          height: 400,
        }}
      >
        <div className='logo-container'>
          <img style={{ width: 200, height: 100 }} src={logo} alt='logo' />
        </div>
        <Form
          name='login'
          initialValues={{ remember: true }}
          style={{ maxWidth: 360 }}
          onFinish={onFinish}
        >
          <Form.Item
            name='email'
            rules={[
              { type: 'email', message: 'Please enter a valid Email!' },
              { required: true, message: 'Please input your Email!' },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder='E-mail' />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined />}
              type='password'
              placeholder='Password'
            />
          </Form.Item>
          <Form.Item>
            <Flex justify='space-between' align='center'>
              <Form.Item name='remember' valuePropName='checked' noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Link
                to=''
                onClick={() =>
                  message.success('Recovery mail has been sent your mail ID!')
                }
              >
                Forgot password
              </Link>
            </Flex>
          </Form.Item>

          <Form.Item>
            <Button block type='primary' htmlType='submit'>
              Log in
            </Button>
            or{' '}
            <Link
              onClick={() => message.success('Signup successful! Please Login')}
            >
              Register now!
            </Link>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
