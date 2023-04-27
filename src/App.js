import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/hoc/Layout/Layout";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainSkeleton from "./components/skeletons/MainSkeleton";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
