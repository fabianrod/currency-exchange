import { all } from 'redux-saga/effects';
import currentCurrenciesSaga from './currentCurrencies';

export default function* rootSagas() {
  yield all([
    currentCurrenciesSaga(),
  ]);
}
