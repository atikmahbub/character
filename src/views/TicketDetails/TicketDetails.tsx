import { Box, Divider, Stack, Typography } from "@mui/material";
import { useEffect, useReducer, Fragment } from "react";
import { useParams } from "react-router-dom";
import AddTitle from "../../components/AddTitle";
import { API } from "../../config/Api";
import {
  characterReducer,
  initialState,
  GET_CHARACTERS_PENDING,
  GET_CHARACTERS_SUCCESS,
  GET_CHARACTERS_ERROR,
} from "../../reducers/characterReducer";

const TicketDetails = () => {
  const { id } = useParams();
  const [state, dispatch] = useReducer(characterReducer, initialState);

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

  console.log(state.data);

  return (
    <Fragment>
      <AddTitle title="Character Details" backButton />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        mt={10}
      >
        <Stack spacing={1}>
          <Typography variant="h4">{state.data?.name}</Typography>
          <Typography variant="caption">
            Gender: {state.data?.gender}
          </Typography>
          <Typography variant="caption">
            Species: {state.data?.species}
          </Typography>
          <Typography variant="caption">
            Location: {state.data?.location.name}
          </Typography>
        </Stack>
        <Divider orientation="vertical" flexItem />

        <img src={state.data?.image} alt="pic" width={350} />
      </Box>
    </Fragment>
  );
};

export default TicketDetails;
