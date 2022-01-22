import { Box, Stack, styled, Typography } from "@mui/material";
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

const StyledImage = styled("img")({
  borderRadius: 5,
});

const DoubleColumn = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "4px",
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
        <StyledImage src={state.data?.image} alt="pic" width={350} />
        <Stack spacing={1}>
          <Typography fontWeight={700} variant="h4">
            {state.data?.name}
          </Typography>
          <DoubleColumn>
            <Typography fontWeight={700} variant="caption">
              Status:
            </Typography>
            <Typography variant="caption">{state.data?.status}</Typography>
          </DoubleColumn>
          <DoubleColumn>
            <Typography fontWeight={700} variant="caption">
              Species:
            </Typography>
            <Typography variant="caption">{state.data?.species}</Typography>
          </DoubleColumn>
          <DoubleColumn>
            <Typography fontWeight={700} variant="caption">
              Gender:
            </Typography>
            <Typography variant="caption">{state.data?.gender}</Typography>
          </DoubleColumn>
          <DoubleColumn>
            <Typography fontWeight={700} variant="caption">
              Last Known Location:
            </Typography>
            <Typography variant="caption">
              {state.data?.location.name}
            </Typography>
          </DoubleColumn>
        </Stack>
      </Box>
    </Fragment>
  );
};

export default TicketDetails;
