import { all } from 'redux-saga/effects';
import currentCurrenciesSaga from './currentCurrencies';
import historicPricesSaga from './historicPrices';

export default function* rootSagas() {
  yield all([
    currentCurrenciesSaga(),
    historicPricesSaga(),
  ]);
}
