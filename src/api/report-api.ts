import axios from "axios";
import { Report } from "../types/report";

const BASE_URL = "http://localhost:8000/reports";

export const fetchReportsFromApi = async (date: string) => {
  return await axios.get<Report[]>(BASE_URL, { params: { date } });
};
