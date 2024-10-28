import React, { useCallback, useEffect, useState } from "react";
import NavButton from "./nav-button";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";
import { DatePicker, DateValue } from "@nextui-org/react";
import { parseDate } from "@internationalized/date";
import useReportStore from "@/store/useReportStore";
import { DEFAULT_DATE } from "@/constants/generalConstants";
import { formatDateValue } from "@/utils/format";

export const CalendarNavigator: React.FC = () => {

  const [selectedDate, setSelectedDate] = useState<DateValue>(parseDate(DEFAULT_DATE));
  const { fetchReports } = useReportStore();

  const handleDateChange = useCallback((value: DateValue) => {
    const formattedDate = formatDateValue(value);
    fetchReports(formattedDate);
  }, [fetchReports]);

  const handleNavButtonClick = (isBackward?: boolean) => {
    setSelectedDate((prevDate) => prevDate.add({ days: isBackward ? -1 : 1 }));
  };

  useEffect(() => {
    fetchReports(DEFAULT_DATE);
  }, [fetchReports]);

  useEffect(() => {
    handleDateChange(selectedDate);
  }, [selectedDate, handleDateChange]);

  return (
    <section className="flex flex-grow-0 gap-4 justify-end">
      <NavButton msg="To the previous day" onClick={() => { handleNavButtonClick(true) }}>
        <ChevronLeftIcon size={24} />
      </NavButton>
      <DatePicker
        aria-label="Choose date"
        value={selectedDate}
        className="max-w-[284px]"
        size="sm"
        onChange={(e) => setSelectedDate(e)}
      />
      <NavButton msg="To the next day" onClick={() => { handleNavButtonClick() }}>
        <ChevronRightIcon size={24} />
      </NavButton>
    </section>
  );
};

export default CalendarNavigator;
