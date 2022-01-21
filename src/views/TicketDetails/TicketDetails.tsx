import { useEffect, useReducer, Fragment } from "react";
import { useParams } from "react-router-dom";
import { API } from "../../config/Api";
import {
  characterReducer,
  initialState,
  GET_CHARACTERS_PENDING,
  GET_CHARACTERS_SUCCESS,
  GET_CHARACTERS_ERROR,
} from "../../reducers/characterReducer";

const TicketDetails = () => {
  const [state, dispatch] = useReducer(characterReducer, initialState);
  const { id } = useParams();

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

  return <Fragment>Details</Fragment>;
};

export default TicketDetails;
