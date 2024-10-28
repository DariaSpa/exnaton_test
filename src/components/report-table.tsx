import React, { useMemo, useState, ChangeEvent } from "react";
import {
  Table, TableHeader, TableColumn, TableBody, TableRow, TableCell,
  Pagination, Chip
} from "@nextui-org/react";
import useReportStore from "@/store/useReportStore";
import { getStatus } from "@/utils/report-utils";
import { formatStringDate } from "@/utils/format";
import { NO_DATA_MSG } from "@/constants/generalConstants";
import {
  ReportStatus, statusLabelMap, statusColorMap
} from "@/constants/statusConstants";
import { Report } from "@/types/report";


export const ReportTable: React.FC = () => {

  const { reports, rowsPerPage, setRowsPerPage } = useReportStore();

  const [page, setPage] = useState(1);
  const noDataMsg = "No Data";

  const onRowsPerPageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  };

  const pages = Math.ceil(reports.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return reports.slice(start, end);
  }, [page, rowsPerPage, reports]);

  if (page > pages && pages > 0) {
    setPage(1);
  }

  return (
    <div className="w-full flex flex-col">
      <div className="flex items-center mb-4 justify-between">
        <label className="flex items-center text-default-400 text-small">
          Rows per page:
          <select
            className="bg-transparent outline-none text-default-400 text-small ml-2"
            onChange={onRowsPerPageChange}
            value={rowsPerPage}
            aria-label="Select number of rows to display per page"
          >
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </label>
      </div>

      <Table
        removeWrapper
        aria-label="Reports"
        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="secondary"
              page={page}
              total={pages}
              onChange={setPage}
            />
          </div>
        }
        classNames={{
          wrapper: "min-h-[222px]",
        }}
      >
        <TableHeader>
          <TableColumn key="ts">Timestamp</TableColumn>
          <TableColumn key="prod">Energy Produced</TableColumn>
          <TableColumn key="cons">Energy Consumed</TableColumn>
          <TableColumn key="self">Self Consumed</TableColumn>
          <TableColumn key="fromGrid">Energy From Grid</TableColumn>
          <TableColumn key="toGrid">Energy To Grid</TableColumn>
          <TableColumn key="status">Status</TableColumn>
        </TableHeader>
        <TableBody emptyContent={NO_DATA_MSG} items={items}>
          {(item: Report) => {
            const status = getStatus(item);
            const badgeColor = statusColorMap[status];
            return (
              <TableRow key={item.ts}>
                <TableCell>{formatStringDate(item.ts) || noDataMsg}</TableCell>
                <TableCell>{item.prod?.toFixed(2) || noDataMsg}</TableCell>
                <TableCell>{item.cons?.toFixed(2) || noDataMsg}</TableCell>
                <TableCell>{item.self?.toFixed(2) || noDataMsg}</TableCell>
                <TableCell>{item.fromGrid?.toFixed(2) || noDataMsg}</TableCell>
                <TableCell>{item.toGrid?.toFixed(2) || noDataMsg}</TableCell>
                <TableCell>
                  {status !== ReportStatus.NONE && (
                    <Chip
                      className="capitalize border-none gap-1 text-default-600"
                      color={badgeColor}
                      size="sm"
                      variant="dot"
                    >
                      {statusLabelMap[status]}
                    </Chip>
                  )}
                </TableCell>
              </TableRow>
            );
          }}
        </TableBody>
      </Table>
    </div>
  );
};
