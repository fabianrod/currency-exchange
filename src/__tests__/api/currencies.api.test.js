/* eslint-disable no-undef */
import getCurrencyValue from '../../api/currencies.api';

describe('getCurrencyValue.api', () => {
  it('should return data', async () => {
    const data = await getCurrencyValue();
    expect(data).toBeDefined();
    expect(data.base).toBe('EUR');
    expect(data.success).toBe(true);
  });
});
