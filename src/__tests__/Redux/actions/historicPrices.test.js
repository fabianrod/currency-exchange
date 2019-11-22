/* eslint-disable */
import { fetchHistoricPricesSucceed } from '../../../redux/actions/historicPrices';
import Types from '../../../redux/types/historicPrices';

describe('historicPrices actions', () => {
  it('should create an action when fetching is succeed', () => {
    const payload = {
      base: "EUR",
      date: "2019-11-21",
      rates: {
        USD: 1.106556,
      }
    };
    const expectedAction = {
      type: Types.FETCH_HISTORIC_SUCCEED,
      payload,
    };
    expect(fetchHistoricPricesSucceed(payload)).toEqual(expectedAction);
  });
});