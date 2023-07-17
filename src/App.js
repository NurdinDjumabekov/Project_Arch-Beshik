import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/hoc/Layout/Layout";
import MainPage from "./pages/MainPage/MainPage";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import DetailedPage from "./pages/DetailedPage/DetailedPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import DetailedApartamentPage from "./pages/DetailedApartamentPage/DetailedApartamentPage";
import ComplaintPage from "./pages/ComplaintPage/ComplaintPage";
import QuestionPage from "./pages/QuestionPage/QuestionPage";
import ApartamentPage from "./pages/ApartamentPage/ApartamentPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/content_detail/:id" element={<DetailedPage />} />
          <Route path="/housemanage" element={<ApartamentPage />} />
          <Route path="/housemanage/:id" element={<DetailedApartamentPage />} />
          <Route path="/complaint" element={<ComplaintPage />} />
          <Route path="/question" element={<QuestionPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
