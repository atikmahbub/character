import React from "react";
import { Box, Pagination } from "@mui/material";
import DataContainer from "./DataContainer";
import AddTitle from "../../components/AddTitle";
import Loader from "../../containers/Loader";
import useApi from "../../hooks/useApi";
const PAGE_SIZE = 20;

const Home = () => {
  const [page, setPage] = React.useState(1);
  const { isLoading, data } = useApi(`?page=${page}`);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <React.Fragment>
      <AddTitle title="Character's List" />
      <DataContainer data={data?.results} />
      <Box display="flex" justifyContent="center">
        <Pagination
          count={Math.ceil(data?.info.count / PAGE_SIZE)}
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
