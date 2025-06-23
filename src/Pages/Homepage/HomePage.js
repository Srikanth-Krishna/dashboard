import { Card, Col, Row } from 'antd';
import MetricCard from '../../component/common/MetricCard/MetricCard';
import { metrics } from '../../data/data';
import RecentOrders from '../../component/RecentOrders/RecentOrders';
import TopProducts from '../../component/TopProducts/TopProducts';
import TopCountries from '../../component/TopCountries/TopCountries';

export default function HomePage() {
  return (
    <>
      <Row>
        {metrics.map((metric, index) => {
          return (
            <Col key={index} flex='auto' span={6}>
              <Card
                style={{
                  marginTop: '15px',
                  borderRadius: '12px',
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.05)',
                  margin: '12px 12px',
                  paddingLeft: '0px',
                }}
              >
                <MetricCard key={metric.id} {...metric} />
              </Card>
            </Col>
          );
        })}
      </Row>
      <Row>
        <Col flex={'none'} span={10}>
          <RecentOrders />
        </Col>
        <Col flex={'auto'}>
          <TopProducts />
        </Col>
        <Col flex={'auto'}>
          <TopCountries />
        </Col>
      </Row>
    </>
  );
}
