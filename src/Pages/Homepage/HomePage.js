import { Card, Col, Row } from 'antd';
import MetricCard from '../../component/common/MetricCard/MetricCard';
import { metrics } from '../../data/data';
import RecentOrders from '../../component/RecentOrders/RecentOrders';
import TopProducts from '../../component/TopProducts/TopProducts';

export default function HomePage() {
  return (
    <>
      <Row gutter={[24, 24]}>
        {metrics.map((metric, index) => {
          return (
            <Col key={index} offset={0} flex='auto'>
              <Card
                style={{
                  marginTop: '15px',
                  borderRadius: '12px',
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.05)',
                  margin: '12px 12px',
                }}
              >
                <MetricCard key={metric.id} {...metric} />
              </Card>
            </Col>
          );
        })}
      </Row>
      <Row>
        <Col style={{ width: '500px' }}>
          <RecentOrders />
        </Col>
        <Col>
          <TopProducts />
        </Col>
      </Row>
    </>
  );
}
