import React from "react";
import "./Chart.css"; // Import CSS file for styling
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

function Chart() {
  // Sample data for the chart
  const data = [
    { name: "Jan", users: 400, parties: 240, venues: 300 },
    { name: "Feb", users: 300, parties: 139, venues: 200 },
    { name: "Mar", users: 200, parties: 980, venues: 170 },
    { name: "Apr", users: 278, parties: 390, venues: 140 },
    { name: "May", users: 189, parties: 480, venues: 260 },
    { name: "Jun", users: 239, parties: 380, venues: 210 },
    { name: "Jul", users: 349, parties: 430, venues: 310 },
    { name: "Aug", users: 400, parties: 240, venues: 300 },
    { name: "Sep", users: 300, parties: 139, venues: 200 },
    { name: "Oct", users: 200, parties: 980, venues: 170 },
    { name: "Nov", users: 278, parties: 390, venues: 140 },
    { name: "Dec", users: 189, parties: 480, venues: 260 },
  ];

  return (
    <div className="admin-dashboard">
      {/* <h1 className="dashboard-title">Admin Dashboard</h1> */}

      {/* Chart */}
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="parties" stroke="#82ca9d" />
            <Line type="monotone" dataKey="venues" stroke="#ffc658" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Chart;
