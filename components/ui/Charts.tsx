import React, { Children } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Bar,
  BarChart as RechartsBarChart,
  Legend,
} from "recharts";
import type { CurveType } from "recharts/types/shape/Curve";

interface chartsProps {
  data?: { name?: string; month?: string; sales?: number; values?: number }[];
  children?: React.ReactNode;
  xdatakey?: string;
  ydatakey?: string;
  chartType?: CurveType;
  barDataKey?: string;
}

const Charts: React.FC<chartsProps> = ({
  data,
  children,
  xdatakey,
  ydatakey,
  chartType,
}: chartsProps) => {
  return (
    <div style={{ width: "500px", height: "300px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey={xdatakey} />
          <YAxis />
          <Tooltip />
          <Line type={chartType} dataKey={ydatakey} stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
      {children}
    </div>
  );
};

export default Charts;

export const BarChart: React.FC<chartsProps> = ({
  data,
  children,
  xdatakey,
  ydatakey,
  chartType,
  barDataKey,
}: chartsProps) => {
  return (
    <div style={{ width: "100%", height: "300px" }} className="w-full ">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart data={data}>
          <XAxis dataKey={xdatakey} />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
         {ydatakey && <Bar dataKey={ydatakey} fill="#8884d8" />}
        </RechartsBarChart>
      </ResponsiveContainer>
      {children}
    </div>
  );
};
