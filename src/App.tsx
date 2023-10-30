import { Route, Routes } from "react-router-dom";
import "./App.scss";
import MainPage from "./pages/MainPage/MainPage";
import Layout from "./components/hoc/Layout/Layout";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ApartamentPage from "./pages/ApartamentPage/ApartamentPage";
import Preloader from "./components/Preloader/Preloader";

function App() {
  return (
    <>
      {
        false && <Preloader />
      }
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/apartament" element={<ApartamentPage />} />
          <Route path="/roads" element={<ApartamentPage />} />
          {/* <Route path="/apartament" element={<ApartamentPage />} /> */}
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
