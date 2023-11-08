import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hook";
import { useLocation, useNavigate } from "react-router-dom";
import { changePreloader } from "../../../store/reducers/mainPageSlice";
import styles from "./InputSearch.module.scss";
import loop from "../../../assets/images/inputs/loop_search.svg";
import cross from "../../../assets/images/inputs/krestik.svg";

const InputSearch = () => {
  const [lookIcos, setLookIcos] = React.useState<boolean>(false);
  const [search, setSearch] = React.useState<string>("");
  const { stateContentList } = useAppSelector((state) => state.mainPageSlice);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (search === "") {
      setLookIcos(false);
    } else {
      setLookIcos(true);
    }
  }, [search]);

  const filteredData = stateContentList?.filter((i) =>
    i.title.toLocaleUpperCase().includes(search.toLocaleUpperCase())
  );

  const checkLocation = (id: number) => {
    if (location.pathname.includes("detailed")) {
      navigate("/");
      dispatch(changePreloader(true));
      setTimeout(() => {
        navigate(`/detailed/${id}`);
        dispatch(changePreloader(false));
      }, 400);
    } else {
      navigate(`/detailed/${id}`);
    }
    setSearch("");
  };

  return (
    <>
      <label className={styles.blockSearch}>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          //   placeholder={t("search")}
          placeholder="Поиск"
          value={search}
        />
        {lookIcos ? (
          <label onClick={() => setSearch("")} className={styles.search__cross}>
            <img src={cross} alt="x" />
          </label>
        ) : (
          <label className={styles.search__loop}>
            <img src={loop} alt="0" />
          </label>
        )}
        <div className={styles.searchData}>
          {search === "" ? (
            ""
          ) : (
            <div className={styles.searchData__inner}>
              {filteredData?.length === 0 ? (
                <b>Ничего не найдено!</b>
              ) : (
                filteredData?.map((i) => (
                  <p key={i.id} onClick={() => checkLocation(i.id)}>
                    {i.title}
                  </p>
                ))
              )}
            </div>
          )}
        </div>
      </label>
    </>
  );
};

export default InputSearch;
