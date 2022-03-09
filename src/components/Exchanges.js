import React from "react";
import millify from "millify";
import { Collapse, Row, Col, Typography, Avatar } from "antd";
import HTMLReactParser from "html-react-parser";

import { useGetExchangesQuery } from "../services/exchangesApi";
import Loader from "./Loader";

const { Text } = Typography;
const { Panel } = Collapse;

function Exchanges() {
	const { data, isFetching } = useGetExchangesQuery();
  const exchangesList = data;

	if (isFetching) return <Loader />;

	return (
		<>
			<Row>
				<Col span={6}>Exchanges</Col>
				<Col span={6}>24h Trade Volume</Col>
				<Col span={6}>Markets</Col>
				<Col span={6}>Change</Col>
			</Row>
      <Row>
        {exchangesList.map((exchange) => (
          <Col span={24}>
          <Collapse>
          <Panel key={exchange.id} showArrow={false} header={(
            <Row key={exchange.id}>
              <Col span={6}>
                <Text>{exchange.trust_score_rank}</Text>
              </Col>

            </Row>
          )}>

          </Panel>
          </Collapse>
          </Col>
        ))}
      </Row>
		</>
	);
}

export default Exchanges;
