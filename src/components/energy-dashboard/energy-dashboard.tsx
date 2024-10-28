import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import EnergyTableTab from "./tabs/energy-table-tab";
import EnergyChartsTab from "./tabs/energy-charts-tab";

export const EnergyDashboard: React.FC = () => {
  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Energy Dashboard Tabs" size="lg">
        <Tab key="energyTable" title="Energy Table">
          <EnergyTableTab />
        </Tab>
        <Tab key="energyCharts" title="Energy Charts">
          <EnergyChartsTab />
        </Tab>
      </Tabs>
    </div>
  );
};

export default EnergyDashboard;
