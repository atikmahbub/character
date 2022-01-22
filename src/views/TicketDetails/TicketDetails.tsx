import { Box, styled } from "@mui/material";
import { useEffect, useReducer, Fragment } from "react";
import { useParams } from "react-router-dom";
import AddTitle from "../../components/AddTitle";
import { API } from "../../config/Api";
import Loader from "../../containers/Loader";
import {
  characterReducer,
  initialState,
  GET_CHARACTERS_PENDING,
  GET_CHARACTERS_SUCCESS,
  GET_CHARACTERS_ERROR,
} from "../../reducers/characterReducer";
import useMediaQuery from "@mui/material/useMediaQuery";
import Skeleton from "@mui/material/Skeleton";
import DetailsContainer from "./DetailsContainer";

const StyledImage = styled("img")({
  borderRadius: 5,
});

const TicketDetails = () => {
  const { id } = useParams();
  const [state, dispatch] = useReducer(characterReducer, initialState);
  const matches = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    dispatch({ type: GET_CHARACTERS_PENDING });
    if (id) {
      API.get(`${id}`)
        .then((response) => {
          dispatch({ type: GET_CHARACTERS_SUCCESS, payload: response.data });
        })
        .catch((error) => {
          dispatch({ type: GET_CHARACTERS_ERROR, payload: error });
        });
    }
  }, [id]);

  if (state.loading) {
    return <Loader />;
  }

  return (
    <Fragment>
      <AddTitle title="Character Details" backButton />
      <Box
        display="flex"
        flexDirection={matches ? "column" : "row"}
        gap={2}
        alignItems="flex-start"
        mt={10}
      >
        {state.data ? (
          <StyledImage src={state.data?.image} alt="pic" width={350} />
        ) : (
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={350}
            height={300}
          />
        )}
        <DetailsContainer data={state.data && state.data} />
      </Box>
    </Fragment>
  );
};

export default TicketDetails;
