import React from "react";
import {
  Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Line, ComposedChart,
} from "recharts";
import useReportStore from "@/store/useReportStore";
import { NO_DATA_MSG } from "@/constants/generalConstants";
import { formatTimeString } from "@/utils/format";

const EnergyConsumptionChart: React.FC = () => {

  const { reports } = useReportStore();

  if (!reports || reports.length === 0) {
    return <div className="flex flex-col h-40 justify-center align-middle">
      <div className="text-foreground-400 align-middle text-center ">{NO_DATA_MSG}</div>
    </div>
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={reports} margin={{ top: 20, right: 30, left: 20, bottom: 5 }
      }>
        <XAxis dataKey="ts" tickFormatter={formatTimeString} />
        <YAxis />
        <Tooltip
          formatter={(value) => Number(value).toFixed(2)}
          labelFormatter={(value) => formatTimeString(value)}
          labelStyle={{ color: "#3f3f46" }}
        />
        <Legend />
        <Bar dataKey="cons" fill="#c91a3baa" name="Energy Consumed" />
        <Bar dataKey="prod" fill="#17c96499" name="Energy Produced" />
        <Line dataKey="self" stroke="#F5A524" type="monotone" strokeWidth={2} name="Self Consumed" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default EnergyConsumptionChart;
