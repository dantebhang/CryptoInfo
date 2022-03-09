import React from "react";
import { Col, Row, Typography } from "antd";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
);

function LineChart({ coinHistory, currentPrice, coinName }) {
	const coinPrice = [];
	const coinTimestamp = [];


	//loop until end of coin history
	for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
		//push each price into coinPrice array
		coinPrice.push(coinHistory.data.history[i].price);
		//push each timestamp into timestamp array into readable format
		coinTimestamp.push(
			new Date(coinHistory.data.history[i].timestamp * 1000).toLocaleDateString(),
		);
	}

	const data = {
		labels: coinTimestamp.reverse(),
		datasets: [
			{
				label: "Price In USD",
				data: coinPrice,
				fill: false,
				backgroundColor: "#0071bd",
				borderColor: "#0071bd",
			},
		],
	};

	const options = { scales: { y: { ticks: { beginAtZero: true } } } };

	return (
		<>
			<Row className="chart-header">
				<Typography.Title level={2} className="chart-title">
					{coinName} Price Chart{" "}
				</Typography.Title>
				<Col className="price-container">
					<Typography.Title level={5} className="price-change">
						Change: {coinHistory?.data?.change}%
					</Typography.Title>
					<Typography.Title level={5} className="current-price">
						Current {coinName} Price: $ {currentPrice}
					</Typography.Title>
				</Col>
			</Row>
			<Line data={data} options={options} />
		</>
	);
}

export default LineChart;
