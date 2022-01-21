import React, { useEffect, useReducer } from "react";
import { Typography, Box, Pagination } from "@mui/material";
import { API } from "../../config/Api";
import {
  characterReducer,
  initialState,
  GET_CHARACTERS_PENDING,
  GET_CHARACTERS_SUCCESS,
  GET_CHARACTERS_ERROR,
} from "../../reducers/characterReducer";

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

  return (
    <React.Fragment>
      <Typography variant="h3" textAlign="center">
        Ticket's List
      </Typography>
      <Box display="flex" justifyContent="center">
        <Pagination
          count={10}
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
