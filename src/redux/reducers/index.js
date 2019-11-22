import { combineReducers } from 'redux';
import currentCurrencies from './currentCurrencies';
import historicPrices from './historicPrices';

export default combineReducers({
  currentCurrencies,
  historicPrices,
});
