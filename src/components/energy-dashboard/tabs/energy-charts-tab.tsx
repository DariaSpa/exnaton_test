import React from "react";
import { Card, CardBody, CardHeader, Divider, Spinner } from "@nextui-org/react";
import EnergyConsumptionChart from "../../charts/energy-consumption-chart";
import GenericPieChart from "../../charts/generic-pie-chart";
import useReportStore from "@/store/useReportStore";
import { NO_DATA_MSG } from "@/constants/generalConstants";

const EnergyChartsTab: React.FC = () => {
  const { reports, loading } = useReportStore();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <Spinner size="lg" color="primary" />
      </div>
    );
  }

  if (!reports || reports.length === 0) {
    return <div className="flex flex-col h-40 justify-center align-middle">
      <div className="text-foreground-400 align-middle text-center ">{NO_DATA_MSG}</div>
    </div>
  }

  return (
    <>
      <Card>
        <CardHeader>
          <div className="text-md">Energy Consumption</div>
        </CardHeader>
        <Divider />
        <CardBody>
          <EnergyConsumptionChart />
        </CardBody>
      </Card>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <Card>
          <CardHeader>
            <div className="text-md">Daily Consumption Ratio</div>
          </CardHeader>
          <Divider />
          <CardBody>
            <GenericPieChart
              dataKey1="cons"
              dataKey2="prod"
              label1="Consumed"
              label2="Produced"
              color1="#c91a3baa"
              color2="#17c96499"
              reports={reports}
            />

          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <div className="text-md">Grid Distribution Ratio</div>
          </CardHeader>
          <Divider />
          <CardBody>
            <GenericPieChart
              dataKey1="toGrid"
              dataKey2="fromGrid"
              label1="To Grid"
              label2="From Grid"
              color1="#17c96499"
              color2="#c91a3baa"
              reports={reports}
            />
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default EnergyChartsTab;
