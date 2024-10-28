import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import NotFoundPage from "@/pages/404";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<NotFoundPage />} path="*" />
    </Routes>
  );
}

export default App;
