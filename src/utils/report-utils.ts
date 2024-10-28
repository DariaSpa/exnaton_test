import { ReportStatus } from "@/constants/statusConstants";
import { Report } from "@/types/report";

export const getStatus = (item: Report): ReportStatus => {
  if (item.fromGrid && item.fromGrid > 0) {
    return ReportStatus.BUYING;
  } else if (item.toGrid && item.toGrid > 0) {
    return ReportStatus.SELLING;
  } else if (!item.prod && !item.cons && !item.self) {
    return ReportStatus.INSUFFICIENT_DATA;
  } else {
    return ReportStatus.NONE;
  }
};
