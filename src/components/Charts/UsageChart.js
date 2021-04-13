import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  //CartesianGrid,
  Tooltip,
  //ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "5 hours ago",
    value: 2400,
  },
  {
    name: "4 hours Ago",
    value: 2210,
  },
  {
    name: "3 hours ago",
    value: 2290,
  },
  {
    name: "2 hours ago",
    value: 2000,
  },
  {
    name: "1 hour ago",
    value: 2181,
  },
];

export default class UsageChart extends PureComponent {
  render() {
    return (
      <AreaChart
        width={380}
        height={140}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <XAxis dataKey="name" hide />
        <YAxis hide />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#fffff"
          fill="#8884d8"
          //dot={{ stroke: "red", strokeWidth: 2 }}
          activeDot={{ stroke: "white", strokeWidth: 2, r: 10 }}
        />
      </AreaChart>
    );
  }
}
