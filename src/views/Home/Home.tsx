import React, { useEffect, useReducer } from "react";
import { Box, Pagination } from "@mui/material";
import { API } from "../../config/Api";
import {
  characterReducer,
  initialState,
  GET_CHARACTERS_PENDING,
  GET_CHARACTERS_SUCCESS,
  GET_CHARACTERS_ERROR,
} from "../../reducers/characterReducer";
import DataContainer from "./DataContainer";
import AddTitle from "../../components/AddTitle";
import Loader from "../../containers/Loader";
const PAGE_SIZE = 20;

const Home = () => {
  const [state, dispatch] = useReducer(characterReducer, initialState);
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    dispatch({ type: GET_CHARACTERS_PENDING });
    API.get(`?page=${page}`)
      .then((response) => {
        dispatch({ type: GET_CHARACTERS_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: GET_CHARACTERS_ERROR, payload: error });
      });
  }, [page]);

  if (state.loading) {
    return <Loader />;
  }

  return (
    <React.Fragment>
      <AddTitle title="Character's List" />
      <DataContainer data={state.data?.results} />
      <Box display="flex" justifyContent="center">
        <Pagination
          count={Math.ceil(state.data?.info.count / PAGE_SIZE)}
          variant="outlined"
          shape="rounded"
          page={page}
          onChange={handleChange}
        />
      </Box>
    </React.Fragment>
  );
};

export default Home;
