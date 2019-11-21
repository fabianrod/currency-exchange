import Types from '../types/currentCurrencies';

const initialState = {
  data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Types.FETCH_CURRENT_REQUEST:
      return {
        ...state,
      };
    case Types.FETCH_CURRENT_SUCCEED:
      return {
        ...state,
        data: action.payload,
      };
    case Types.FETCH_CURRENT_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}
