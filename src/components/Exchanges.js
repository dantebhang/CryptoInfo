import React from "react";
import millify from "millify";
import { Avatar, Table } from "antd";

import { useGetExchangesQuery } from "../services/exchangesApi";
import Loader from "./Loader";

function Exchanges() {
	const { data, isFetching } = useGetExchangesQuery();
	const exchangesList = data;
  
	if (isFetching) return <Loader />;

	//created columns for exchange table
	const columns = [
		{
			title: "Rank",
			dataIndex: "rank",
			key: "rank",
		},
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
			render: (text, record) => {
				return (
					<>
						<Avatar src={record.image} />
						<a href={record.url}> {record.name}</a>
					</>
				);
			},
		},
		{
			title: "24h Trade Volume",
			dataIndex: "24hTradeVolume",
			key: "24hTradeVolume",
		},
		{
			title: "Est.",
			dataIndex: "est",
			key: "est",
		},
		{
			title: "Based In",
			dataIndex: "basedIn",
			key: "basedIn",
		},
		{
			title: "Trust Score",
			dataIndex: "trustScore",
			key: "trustScore",
		},
	];

	//mapping through exchange API data for each column
	const dataSource = exchangesList.map((exchange, index) => ({
		key: index,
		image: exchange?.image,
		name: exchange?.name,
		url: exchange?.url,
		"24hTradeVolume": "$" + millify(exchange?.trade_volume_24h_btc),
		rank: exchange?.trust_score_rank,
		est: exchange?.year_established,
		basedIn: exchange?.country,
		trustScore: exchange?.trust_score,
	}));

	return (
		<>
			<Table columns={columns} dataSource={dataSource} />
		</>
	);
}

export default Exchanges;
