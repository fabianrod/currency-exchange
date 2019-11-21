import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchCurrentCurrenciesSucceed, fetchCurrentCurrenciesFailure } from '../actions/currentCurrencies';
import Types from '../types/currentCurrencies';
import getCurrencyValue from '../../api/currencies.api';

function* handleFetchCurrentCurrencies() {
  try {
    const currentCurrency = yield call(getCurrencyValue);
    yield put(fetchCurrentCurrenciesSucceed(currentCurrency));
  } catch (e) {
    yield put(fetchCurrentCurrenciesFailure(e));
  }
}

function* currentCurrenciesSaga() {
  yield takeLatest(Types.FETCH_CURRENT_REQUEST, handleFetchCurrentCurrencies);
}

export default currentCurrenciesSaga;
