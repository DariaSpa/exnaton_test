import React, { useEffect, useState } from "react";
import {
  Legend, ResponsiveContainer, PieChart, Pie, Cell,
} from "recharts";

import { NO_DATA_MSG } from "@/constants/generalConstants";
import { Report } from '../../types/report';

interface ChartProps {
  dataKey1: keyof Report;
  dataKey2: keyof Report;
  label1: string;
  label2: string;
  color1: string;
  color2: string;
  reports: Report[];
}

const GenericPieChart: React.FC<ChartProps> = ({
  dataKey1,
  dataKey2,
  label1,
  label2,
  color1,
  color2,
  reports
}) => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  useEffect(() => {
    let sum1 = 0;
    let sum2 = 0;

    reports.forEach((report) => {
      sum1 += (typeof report[dataKey1] === "number" ? report[dataKey1] : 0) as number;
      sum2 += (typeof report[dataKey2] === "number" ? report[dataKey2] : 0) as number;
    });


    setValue1(Math.round(sum1 * 100) / 100);
    setValue2(Math.round(sum2 * 100) / 100);
  }, [reports, dataKey1, dataKey2]);

  if (!reports || reports.length === 0) {
    return (
      <div className="flex flex-col h-40 justify-center align-middle">
        <div className="text-foreground-400 align-middle text-center">
          {NO_DATA_MSG}
        </div>
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart width={400} height={400}>
        <Pie
          data={[
            { name: label1, value: value1 },
            { name: label2, value: value2 }
          ]}
          cx="50%"
          cy="50%"
          label
          dataKey="value"
        >
          <Cell fill={color1} style={{ outline: "none" }} />
          <Cell fill={color2} style={{ outline: "none" }} />
        </Pie>
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default GenericPieChart;
