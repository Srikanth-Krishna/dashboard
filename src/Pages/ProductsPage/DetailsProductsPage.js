import React, { useState } from 'react';
import {
  Row,
  Col,
  Image,
  Typography,
  Button,
  InputNumber,
  Tag,
  Divider,
  Space,
  Radio,
  Card,
  message,
} from 'antd';
import { PayCircleOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { product } from './DetailsProductPageData';

const { Title, Text } = Typography;

export default function DetailsProductsPage() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  const handleAddToCart = () => {
    message.success(`Added ${quantity} item(s) to cart`);
  };

  const handleBuyNow = () => {
    message.info('Redirecting to PayPal...');
  };

  return (
    <>
      <h1 style={{ margin: '20px 20px 0px 20px' }}>Product Details</h1>
      <Card style={{ margin: '15px 20px 20px 20px' }}>
        <Row gutter={[32, 32]}>
          {/* Image Section */}
          <Col xs={24} md={12}>
            <Image
              width={'100%'}
              src={selectedImage}
              style={{ borderRadius: 8 }}
            />
            <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
              {product.images.map((img, idx) => (
                <Image
                  key={idx}
                  width={80}
                  height={80}
                  src={img}
                  preview={false}
                  style={{
                    cursor: 'pointer',
                    border:
                      selectedImage === img
                        ? '2px solid #1890ff'
                        : '1px solid #d9d9d9',
                    borderRadius: 4,
                    objectFit: 'cover',
                  }}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          </Col>

          {/* Info Section */}
          <Col xs={24} md={12}>
            <Title level={2}>{product.title}</Title>
            <Text strong style={{ fontSize: 18 }}>
              ${product.price.toFixed(2)}
            </Text>

            <Divider />

            {/* Color */}
            <Text>Color: </Text>
            <div style={{ display: 'flex', gap: 8, margin: '8px 0 16px 0' }}>
              {product.colors.map((color, i) => (
                <div
                  key={i}
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    background: color,
                    border:
                      selectedColor === color
                        ? '2px solid #000'
                        : '1px solid #ccc',
                    cursor: 'pointer',
                  }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>

            {/* Size */}
            <Text>Size: </Text>
            <Radio.Group
              style={{
                display: 'flex',
                gap: 8,
                marginTop: 8,
                marginBottom: 16,
              }}
              value={selectedSize}
              buttonStyle='solid'
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              {product.sizes.map((size) => (
                <Radio.Button key={size} value={size}>
                  {size}
                </Radio.Button>
              ))}
            </Radio.Group>

            {/* Quantity */}
            <div style={{ marginTop: 8, marginBottom: 20 }}>
              <Text>Quantity: </Text>
              <InputNumber
                min={1}
                max={20}
                value={quantity}
                onChange={(value) => setQuantity(value)}
                style={{ marginLeft: 10, width: 80 }}
              />
            </div>

            {/* Buttons */}
            <Space direction='vertical' style={{ width: '100%' }}>
              <Button
                type='primary'
                icon={<ShoppingCartOutlined />}
                block
                onClick={handleAddToCart}
              >
                Add to cart – ${product.price.toFixed(2)}
              </Button>

              <Button
                icon={<PayCircleOutlined />}
                block
                onClick={handleBuyNow}
                style={{ borderColor: '#1890ff', color: '#1890ff' }}
              >
                Buy with <strong style={{ marginLeft: 4 }}>PayPal</strong>
              </Button>
            </Space>

            <Divider />

            {/* Info */}
            <Space direction='horizontal'>
              <Tag>Compare color</Tag>
              <Tag>Ask a question</Tag>
              <Tag>Delivery & Return</Tag>
              <Tag>Share</Tag>
            </Space>
          </Col>
        </Row>

        <Divider />

        {/* Delivery Section */}
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card>
              <Text>
                <strong>Estimate delivery:</strong> 12-26 days (Intl), 3-6 days
                (US)
              </Text>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card>
              <Text>
                <strong>Returns:</strong> 30 days of purchase. Taxes
                non-refundable.
              </Text>
            </Card>
          </Col>
        </Row>
      </Card>
    </>
  );
}
