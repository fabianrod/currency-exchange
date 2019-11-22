import Types from '../types/historicPrices';

const initialState = {
  data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Types.FETCH_HISTORIC_REQUEST:
      return {
        ...state,
      };
    case Types.FETCH_HISTORIC_SUCCEED:
      return {
        ...state,
        data: action.payload,
      };
    case Types.FETCH_HISTORIC_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}
