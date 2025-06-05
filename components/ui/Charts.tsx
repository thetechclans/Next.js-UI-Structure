import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import type { CurveType } from "recharts/types/shape/Curve";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884d8",
  "#82ca9d",
];

interface ChartProps {
  data: any[];
  width?: number | string;
  height?: number | string;
  xDataKey: string;
  yDataKey?: string;
  ylinedata?: string;
  chartType?: "line" | "bar" | "area" | "pie" | "radar";
  curveType?: CurveType;
  strokeColor?: string;
  fillColor?: string;
  showGrid?: boolean;
  showTooltip?: boolean;
  showLegend?: boolean;
  legendPosition?: "top" | "bottom" | "left" | "right";
  children?: React.ReactNode;
  barDataKeys?: string[];
  pieDataKey?: string;
  pieNameKey?: string;
}

export const CustomChart: React.FC<ChartProps> = ({
  data = [],
  width = "100%",
  height = 300,
  xDataKey,
  yDataKey,
  ylinedata,
  chartType = "line",
  curveType = "monotone",
  strokeColor = "#8884d8",
  fillColor = "#8884d8",
  showGrid = true,
  showTooltip = true,
  showLegend = false,
  legendPosition = "bottom",
  barDataKeys,
  pieDataKey,
  pieNameKey,
  children,
}) => {
  const renderChart = () => {
    switch (chartType) {
      case "line":
        return (
          <LineChart data={data}>
            {showGrid && (
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            )}
            <XAxis
              dataKey={xDataKey}
              tick={{ fill: "#6b7280" }}
              axisLine={{ stroke: "#d1d5db" }}
            />
            <YAxis
              dataKey={yDataKey}
              tick={{ fill: "#6b7280" }}
              axisLine={{ stroke: "#d1d5db" }}
            />
            {showTooltip && (
              <Tooltip
                contentStyle={{
                  background: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "0.5rem",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
              />
            )}
            {showLegend && (
              <Legend
                layout={
                  legendPosition === "left" || legendPosition === "right"
                    ? "vertical"
                    : "horizontal"
                }
                verticalAlign={legendPosition === "top" ? "top" : "bottom"}
                align={
                  legendPosition === "left"
                    ? "left"
                    : legendPosition === "right"
                    ? "right"
                    : "center"
                }
              />
            )}
            <Line
              type={curveType}
              dataKey={yDataKey}
              stroke={strokeColor}
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6, stroke: strokeColor, strokeWidth: 2 }}
            />
          </LineChart>
        );
      case "bar":
        return (
          <BarChart data={data}>
            {showGrid && (
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            )}
            <XAxis
              dataKey={xDataKey}
              tick={{ fill: "#6b7280" }}
              axisLine={{ stroke: "#d1d5db" }}
            />
            <YAxis
              tick={{ fill: "#6b7280" }}
              axisLine={{ stroke: "#d1d5db" }}
            />
            {showTooltip && (
              <Tooltip
                contentStyle={{
                  background: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "0.5rem",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
              />
            )}
            {showLegend && (
              <Legend
                layout={
                  legendPosition === "left" || legendPosition === "right"
                    ? "vertical"
                    : "horizontal"
                }
                verticalAlign={legendPosition === "top" ? "top" : "bottom"}
                align={
                  legendPosition === "left"
                    ? "left"
                    : legendPosition === "right"
                    ? "right"
                    : "center"
                }
              />
            )}
            {barDataKeys ? (
              barDataKeys.map((key, index) => (
                <Bar
                  key={key}
                  fill={COLORS[index % COLORS.length]}
                  radius={[4, 4, 0, 0]}
                  dataKey={key}
                />
              ))
            ) : yDataKey ? (
              <Bar
                dataKey={yDataKey}
                // ylinedata={yDataKey}
                fill={fillColor}
                radius={[4, 4, 0, 0]}
              />
            ) : null}
          </BarChart>
        );
      case "area":
        return (
          <AreaChart data={data}>
            {showGrid && (
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            )}
            <XAxis
              dataKey={xDataKey}
              tick={{ fill: "#6b7280" }}
              axisLine={{ stroke: "#d1d5db" }}
            />
            <YAxis
              tick={{ fill: "#6b7280" }}
              axisLine={{ stroke: "#d1d5db" }}
            />
            {showTooltip && (
              <Tooltip
                contentStyle={{
                  background: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "0.5rem",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
              />
            )}
            {showLegend && (
              <Legend
                layout={
                  legendPosition === "left" || legendPosition === "right"
                    ? "vertical"
                    : "horizontal"
                }
                verticalAlign={legendPosition === "top" ? "top" : "bottom"}
                align={
                  legendPosition === "left"
                    ? "left"
                    : legendPosition === "right"
                    ? "right"
                    : "center"
                }
              />
            )}
            {yDataKey && (
              <Area
                type={curveType}
                stroke={strokeColor}
                fill={fillColor}
                fillOpacity={0.2}
                dataKey={yDataKey}
              />
            )}
          </AreaChart>
        );
      case "pie":
        return (
          <PieChart>
            {pieDataKey && (
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey={pieDataKey}
                nameKey={pieNameKey}
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            )}
            {showTooltip && (
              <Tooltip
                contentStyle={{
                  background: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "0.5rem",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
              />
            )}
            {showLegend && (
              <Legend
                layout={
                  legendPosition === "left" || legendPosition === "right"
                    ? "vertical"
                    : "horizontal"
                }
                verticalAlign={legendPosition === "top" ? "top" : "bottom"}
                align={
                  legendPosition === "left"
                    ? "left"
                    : legendPosition === "right"
                    ? "right"
                    : "center"
                }
              />
            )}
          </PieChart>
        );
      case "radar":
        return (
          <RadarChart outerRadius={90} width={500} height={300} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey={xDataKey} />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            {yDataKey && (
              <Radar
                name="Value"
                stroke={strokeColor}
                fill={fillColor}
                fillOpacity={0.6}
                dataKey={yDataKey}
              />
            )}
            {showLegend && <Legend />}
            {showTooltip && <Tooltip />}
          </RadarChart>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ width, height }} className="relative">
      <ResponsiveContainer width="100%" height="100%">
        {renderChart() || <div />}
      </ResponsiveContainer>
      {children}
    </div>
  );
};

// Example usage components for different chart types
export const LineChartComponent: React.FC<Omit<ChartProps, "chartType">> = (
  props
) => <CustomChart chartType="line" {...props} />;

export const BarChartComponent: React.FC<Omit<ChartProps, "chartType">> = (
  props
) => <CustomChart chartType="bar" {...props} />;

export const AreaChartComponent: React.FC<Omit<ChartProps, "chartType">> = (
  props
) => <CustomChart chartType="area" {...props} />;

export const PieChartComponent: React.FC<
  Omit<ChartProps, "chartType" | "yDataKey"> & {
    pieDataKey: string;
    pieNameKey: string;
  }
> = (props) => <CustomChart chartType="pie" {...props} />;

export const RadarChartComponent: React.FC<Omit<ChartProps, "chartType">> = (
  props
) => <CustomChart chartType="radar" {...props} />;

export { BarChart };
