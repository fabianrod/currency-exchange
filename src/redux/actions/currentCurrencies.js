import Types from '../types/currentCurrencies';

const fetchCurrentCurrenciesRequest = () => ({
  type: Types.FETCH_CURRENT_REQUEST,
});

const fetchCurrentCurrenciesSucceed = (payload) => ({
  type: Types.FETCH_CURRENT_SUCCEED,
  payload,
});

const fetchCurrentCurrenciesFailure = (error) => ({
  type: Types.FETCH_CURRENT_FAILURE,
  error,
});

export {
  fetchCurrentCurrenciesRequest,
  fetchCurrentCurrenciesSucceed,
  fetchCurrentCurrenciesFailure,
};
