import { DateValue } from "@internationalized/date";

export const formatDateValue = (value: DateValue | string): string => {
  if (typeof value === "string") {
    return new Date(value).toLocaleString();
  } else {
    const year = value.year;
    const month = String(value.month).padStart(2, "0");
    const day = String(value.day).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
};

export const formatStringDate = (date: string): string => {
  return new Date(date).toLocaleString();
};

export const formatTimeString = (date: string): string => {
  return new Date(date).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};
