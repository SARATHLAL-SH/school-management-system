import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const data = [
  { month: "Jan", income: 0 },
  { month: "Feb", income: 0 },
  { month: "Mar", income: 0 },
  { month: "Apr", income: 0 },
  { month: "May", income: 0 },
  { month: "Jun", income: 0 },
  { month: "Jul", income: 0 },
  { month: "Aug", income: 0 },
  { month: "Sep", income: 0 },
  { month: "Oct", income: 0 },
  { month: "Nov", income: 0 },
  { month: "Dec", income: 5000 },
];

const attendanceData = [
  { name: "Present", value: 3 },
  { name: "Absent", value: 7 },
];

const COLORS = ["#00C49F", "#FF8042"];

function ChartData() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "20px",
      }}
    >
      {/* Line Chart */}
      <div style={{ width: "50%" }}>
        <h3>Month Wise Income Report</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="income" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Donut Chart */}
      <div style={{ width: "30%" }}>
        <h3>Staff Attendance Overview</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={attendanceData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              innerRadius={60}
              fill="#8884d8"
              label
            >
              {attendanceData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div style={{ textAlign: "center", marginTop: "-120px" }}>
          <h4>Staff Present Today</h4>
          <h2>{attendanceData[0].value}</h2>
        </div>
      </div>
    </div>
  );
}

export default ChartData;
