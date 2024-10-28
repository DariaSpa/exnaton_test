import { ChipProps } from "@nextui-org/react";

export enum ReportStatus {
  BUYING = "buying",
  SELLING = "selling",
  INSUFFICIENT_DATA = "insufficientData",
  NONE = "none",
}

export const statusLabelMap: Record<ReportStatus, string> = {
  [ReportStatus.BUYING]: "Buying",
  [ReportStatus.SELLING]: "Selling",
  [ReportStatus.INSUFFICIENT_DATA]: "Insufficient Data",
  [ReportStatus.NONE]: "",
};

export const statusColorMap: Record<ReportStatus, ChipProps["color"]> = {
  [ReportStatus.BUYING]: "danger",
  [ReportStatus.SELLING]: "success",
  [ReportStatus.INSUFFICIENT_DATA]: "warning",
  [ReportStatus.NONE]: "default",
};
