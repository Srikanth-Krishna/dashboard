import React from 'react';
import {
  Row,
  Col,
  Card,
  Typography,
  Button,
  Divider,
  Space,
  message,
} from 'antd';

const { Title, Text } = Typography;

const order = {
  orderId: '#192847',
  date: '20 Nov 2023',
  total: 948.5,
  address: '3517 W. Gray St. Utica, Pennsylvania 57867',
  paymentMethod:
    'Pay on Delivery (Cash/Card). Cash on delivery (COD) available. Card/Net banking acceptance subject to device availability.',
  deliveryDate: '20 Nov 2023',
  cartItems: [
    {
      image:
        'https://www.shutterstock.com/image-illustration/bottle-gel-lotion-beauty-product-260nw-1348122737.jpg',
      name: 'Dummy product',
      quantity: 1,
      price: 50.47,
    },
    {
      image:
        'https://www.shutterstock.com/image-illustration/cosmetic-plastic-spray-liquid-beauty-260nw-1348123271.jpg',
      name: 'Test Product',
      quantity: 1,
      price: 50.47,
    },
    {
      image: 'https://floris.azelab.com/wp-content/uploads/2016/06/d2-16.jpg',
      name: 'Product test',
      quantity: 1,
      price: 50.47,
    },
  ],
  subtotal: 70.13,
  shipping: 10,
  tax: 5,
};

const OrderDetailPage = () => {
  const totalPrice = order.subtotal + order.shipping + order.tax;

  return (
    <div style={{ padding: '24px' }}>
      <Title level={2} style={{ marginTop: 0 }}>
        Order Details
      </Title>

      <Row gutter={[24, 24]}>
        {/* Left Column */}
        <Col xs={24} lg={16}>
          <Card title='All item' extra='Sort'>
            {order.cartItems.map((item, index) => (
              <Card
                key={index}
                style={{
                  marginBottom: 12,
                  background: '#f9fcff',
                  borderRadius: 8,
                }}
                bodyStyle={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 16,
                  padding: 10,
                }}
              >
                <img
                  src={item.image}
                  alt='product'
                  style={{ width: 40, height: 40, objectFit: 'cover' }}
                />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Text style={{ color: 'gray', fontSize: 11 }}>
                    Product name
                  </Text>
                  <Text>{item.name}</Text>
                </div>
                <div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Text style={{ color: 'gray', fontSize: 11 }}>
                      Quantity:
                    </Text>
                    <Text strong>{item.quantity}</Text>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Text style={{ color: 'gray', fontSize: 11 }}>Price</Text>
                  <Text strong>${item.price.toFixed(2)}</Text>
                </div>
              </Card>
            ))}
          </Card>

          <Card title='Cart Totals' style={{ marginTop: 24 }}>
            <Row style={{ marginBottom: 12 }}>
              <Col span={12}>Subtotal:</Col>
              <Col span={12} style={{ textAlign: 'right' }}>
                <Text>${order.subtotal.toFixed(2)}</Text>
              </Col>
            </Row>
            <Row style={{ marginBottom: 12 }}>
              <Col span={12}>Shipping:</Col>
              <Col span={12} style={{ textAlign: 'right' }}>
                <Text>${order.shipping.toFixed(2)}</Text>
              </Col>
            </Row>
            <Row style={{ marginBottom: 12 }}>
              <Col span={12}>Tax (GST):</Col>
              <Col span={12} style={{ textAlign: 'right' }}>
                <Text>${order.tax.toFixed(2)}</Text>
              </Col>
            </Row>
            <Divider />
            <Row>
              <Col span={12}>
                <Text strong>Total price:</Text>
              </Col>
              <Col span={12} style={{ textAlign: 'right' }}>
                <Text strong style={{ color: '#ff4d4f' }}>
                  ${totalPrice.toFixed(2)}
                </Text>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* Right Column */}
        <Col xs={24} lg={8}>
          <Card title='Summary'>
            <Row>
              <Col span={12}>Order ID</Col>
              <Col span={12} style={{ textAlign: 'right' }}>
                <Text strong>{order.orderId}</Text>
              </Col>
            </Row>
            <Row style={{ marginTop: 8 }}>
              <Col span={12}>Date</Col>
              <Col span={12} style={{ textAlign: 'right' }}>
                <Text strong>{order.date}</Text>
              </Col>
            </Row>
            <Row style={{ marginTop: 8 }}>
              <Col span={12}>Total</Col>
              <Col span={12} style={{ textAlign: 'right' }}>
                <Text strong style={{ color: '#ff4d4f' }}>
                  ${order.total}
                </Text>
              </Col>
            </Row>
          </Card>

          <Card title='Shipping Address' style={{ marginTop: 16 }}>
            <Text>{order.address}</Text>
          </Card>

          <Card title='Payment Method' style={{ marginTop: 16 }}>
            <Text>{order.paymentMethod}</Text>
          </Card>

          <Card title='Expected Date Of Delivery' style={{ marginTop: 16 }}>
            <Row justify='space-between' align='middle'>
              <Text strong style={{ color: 'green' }}>
                {order.deliveryDate}
              </Text>
              <Button
                type='primary'
                onClick={() => message.info(`Tracking order: ${order.orderId}`)}
              >
                Track order
              </Button>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default OrderDetailPage;
