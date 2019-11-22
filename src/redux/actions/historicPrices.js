import Types from '../types/historicPrices';

const fetchHistoricPricesRequest = () => ({
  type: Types.FETCH_HISTORIC_REQUEST,
});

const fetchHistoricPricesSucceed = (payload) => ({
  type: Types.FETCH_HISTORIC_SUCCEED,
  payload,
});

const fetchHistoricPricesFailure = (error) => ({
  type: Types.FETCH_HISTORIC_FAILURE,
  error,
});

export {
  fetchHistoricPricesRequest,
  fetchHistoricPricesSucceed,
  fetchHistoricPricesFailure,
};
