import React, { PureComponent } from "react";
import { PieChart, Pie, Cell, Label } from "recharts";

const data = [
  { name: "Usage", value: 800 },
  { name: "Remaining", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default class BudgetUsage extends PureComponent {
  render() {
    return (
      <PieChart width={300} height={140} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={140}
          cy={60}
          innerRadius={55}
          outerRadius={60}
          fill="#8884d8"
          paddingAngle={3}
          startAngle={0}
          endAngle={356}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <Label value="80%" position="center" />
        </Pie>
      </PieChart>
    );
  }
}
