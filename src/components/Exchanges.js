import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';

import { useGetExchangesQuery } from '../services/exchangesApi';
import Loader from './Loader';

const { Text } = Typography;
const { Panel } = Collapse;

function Exchanges() {
  const {exchangesList, isFetching } = useGetExchangesQuery();
  

  if (isFetching) return <Loader />;

  return (
    <div>Exchanges</div>
  )
}

export default Exchanges