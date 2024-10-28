import { create } from "zustand";
import axios from "axios";

import { Report } from "../types/report";

interface ReportState {
  reports: Report[];
  loading: boolean;
  rowsPerPage: number;
  fetchReports: (date: string) => Promise<void>;
  setRowsPerPage: (rows: number) => void;
}

const BASE_URL = "http://localhost:8000/reports";

const useReportStore = create<ReportState>((set) => ({
  reports: [],
  loading: false,
  rowsPerPage: 10,

  fetchReports: async (date: string) => {
    set({ loading: true });
    try {
      const response = await axios.get<Report[]>(BASE_URL, {
        params: { date },
      });
      set({ reports: response.data, loading: false });
    } catch (error) {
      console.error("Failed to fetch reports:", error);
      set({ reports: [], loading: false });
    }
  },

  setRowsPerPage: (rows: number) => {
    set({ rowsPerPage: rows });
  }
}));

export default useReportStore;
