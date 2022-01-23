import React, { useEffect, useReducer } from "react";
import { API } from "../config/Api";
import {
  characterReducer,
  initialState,
  GET_CHARACTERS_PENDING,
  GET_CHARACTERS_SUCCESS,
  GET_CHARACTERS_ERROR,
} from "../reducers/characterReducer";

const useApi = (api: string) => {
  const [state, dispatch] = useReducer(characterReducer, initialState);

  useEffect(() => {
    if (api) {
      dispatch({ type: GET_CHARACTERS_PENDING });
      API.get(api)
        .then((response) => {
          dispatch({ type: GET_CHARACTERS_SUCCESS, payload: response.data });
        })
        .catch((error) => {
          dispatch({ type: GET_CHARACTERS_ERROR, payload: error });
        });
    }
  }, [api]);

  return React.useMemo(
    () => ({
      data: state.data,
      isLoading: state.loading,
      error: state.error,
    }),
    [state.data, state.loading, state.error]
  );
};

export default useApi;
