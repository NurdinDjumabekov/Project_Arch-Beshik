import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/hoc/Layout/Layout";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import DetailedPage from "./pages/DetailedPage/DetailedPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import DetailedApartamentPage from "./pages/DetailedApartamentPage/DetailedApartamentPage";
import ComplaintPage from "./pages/ComplaintPage/ComplaintPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/content_detail/:id" element={<DetailedPage />} />
          <Route
            path="/housemanage_list/:id"
            element={<DetailedApartamentPage />}
          />
          {/* <Route path="/admin" element={<AdminPage />} /> */}
          <Route path="/complaint" element={<ComplaintPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
