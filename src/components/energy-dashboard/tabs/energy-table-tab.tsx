import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { ReportTable } from "../../report-table";

const EnergyTableTab: React.FC = () => (
  <Card>
    <CardBody>
      <ReportTable />
    </CardBody>
  </Card>
);

export default EnergyTableTab;
