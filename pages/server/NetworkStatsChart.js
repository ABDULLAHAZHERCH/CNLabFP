import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const NetworkStatsChart = ({ data }) => {
  const chartData = data.map((stat) => ({
    ...stat.networkStats,
    sentAt: new Date(stat.networkStats.sentAt).toLocaleTimeString(),
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="sentAt" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="latency"
          stroke="#8884d8"
          name="Latency"
        />
        <Line
          type="monotone"
          dataKey="dnsTime"
          stroke="#82ca9d"
          name="DNS Time"
        />
        <Line
          type="monotone"
          dataKey="connectTime"
          stroke="#ffc658"
          name="Connect Time"
        />
        <Line
          type="monotone"
          dataKey="sslHandshakeTime"
          stroke="#ff8042"
          name="SSL Handshake Time"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default NetworkStatsChart;
