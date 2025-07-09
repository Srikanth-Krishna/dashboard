import React from 'react';
import { comments } from '../../data/data';
import { Card, Avatar, Rate, Typography, Button } from 'antd';

const { Text, Title, Paragraph } = Typography;

const ScrollableComments = () => {
  return (
    <Card
      title={<Title level={4}>New Comments</Title>}
      extra={<Button type='text'>•••</Button>}
      style={{
        height: '100%',
        borderRadius: 12,
        marginLeft: 12,
        marginRight: 12,
      }}
    >
      <div
        style={{
          maxHeight: 300,
          overflowY: 'scroll',
          paddingRight: 10,
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        className='no-scrollbar'
      >
        {comments.map((comment, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              marginBottom: 16,
              alignItems: 'flex-start',
            }}
          >
            <Avatar size={48} src={comment.avatar} />
            <div style={{ marginLeft: 12 }}>
              <Text strong>{comment.name}</Text>
              <div>
                <Rate
                  disabled
                  defaultValue={comment.rating}
                  style={{ fontSize: 14 }}
                />
              </div>
              {comment.text && (
                <Paragraph style={{ marginBottom: 0, fontSize: 13 }}>
                  {comment.text}
                </Paragraph>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ScrollableComments;
