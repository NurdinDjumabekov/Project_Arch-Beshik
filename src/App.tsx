import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import MainPage from "./pages/MainPage/MainPage";
import Layout from "./components/hoc/Layout/Layout";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ApartamentPage from "./pages/ApartamentPage/ApartamentPage";
import Preloader from "./components/Preloader/Preloader";
import { useAppDispatch, useAppSelector } from "./hook";
import { toTakeData } from "./store/reducers/mainPageSlice";
import DetailedPage from "./pages/DetailedPage/DetailedPage";
import { toTakeAllCategory } from "./store/reducers/categorySlice";
import QuestionsPage from "./pages/QuestionsPage/QuestionsPage";

function App() {
  const dispatch = useAppDispatch();
  const { statePreloader } = useAppSelector((state) => state.mainPageSlice);

  React.useEffect(() => {
    dispatch(
      toTakeAllCategory({ url: "category_list", lang: "ru", type: "GET" })
    );
    dispatch(toTakeData({ url: "content_list", lang: "ru", type: "GET" }));
    // dispatch(toTakeData({ url: "content_list/housemanage", lang: "ru", type: "GET" }));
  }, []);

  return (
    <div className="parent">
      {statePreloader && <Preloader />}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="detailed/:id" element={<DetailedPage />} />
          <Route path="/apartament" element={<ApartamentPage />} />
          <Route path="/questions" element={<QuestionsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
