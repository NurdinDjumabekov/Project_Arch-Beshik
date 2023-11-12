import * as React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import styles from "./Paginations.module.scss";
import { useAppSelector } from "../../../hook";
import { useDispatch } from "react-redux";
import { changePaginationCount } from "../../../store/reducers/mainPageSlice";

export default function Paginations() {
  const dispatch = useDispatch();
  const { stateContentList, paginationCount } = useAppSelector(
    (state) => state.mainPageSlice
  );

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(changePaginationCount(value));
    localStorage.setItem("pagination", value.toString());
  };

  let countPage = Math.ceil(stateContentList?.length / 12);
  console.log(countPage);

  return (
    <Typography component="div" className={styles.parentPag}>
      <Stack spacing={2} style={countPage === 0 ? { display: "none" } : {}}>
        <Pagination
          count={countPage}
          page={paginationCount}
          onChange={handleChange}
        />
      </Stack>
    </Typography>
  );
}
