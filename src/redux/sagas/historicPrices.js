import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchHistoricPricesSucceed, fetchHistoricPricesFailure } from '../actions/historicPrices';
import Types from '../types/historicPrices';
import setHistoricPrices from '../../api/historicprice.api';

function* handleFetchHistoricPrices() {
  try {
    const historic = yield call(setHistoricPrices);
    yield put(fetchHistoricPricesSucceed(historic));
  } catch (e) {
    yield put(fetchHistoricPricesFailure(e));
  }
}

function* historicPricesSaga() {
  yield takeLatest(Types.FETCH_HISTORIC_REQUEST, handleFetchHistoricPrices);
}

export default historicPricesSaga;
