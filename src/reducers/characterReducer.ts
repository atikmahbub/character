export const GET_CHARACTERS_PENDING = "GET_CHARACTERS_PENDING";
export const GET_CHARACTERS_SUCCESS = "GET_CHARACTERS_SUCCESS";
export const GET_CHARACTERS_ERROR = "GET_CHARACTERS_ERROR";

type CharacterState = {
  loading: boolean;
  data: any;
  error: string;
};

type ActionType = {
  type: string;
  payload?: any;
};

export const initialState = {
  loading: false,
  data: null,
  error: "",
};

export const characterReducer = (state: CharacterState, action: ActionType) => {
  switch (action.type) {
    case "GET_CHARACTERS_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "GET_CHARACTERS_SUCCESS":
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case "GET_CHARACTERS_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
