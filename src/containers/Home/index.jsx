import { connect } from 'react-redux';
import { fetchCurrentCurrenciesRequest } from '../../redux/actions/currentCurrencies';
import { fetchHistoricPricesRequest } from '../../redux/actions/historicPrices';
import Home from '../../components/Home';

const mapStateToProps = (state) => ({
  currentCurrency: state.currentCurrencies.data,
  historic: state.historicPrices.data,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencyValue: () => dispatch(fetchCurrentCurrenciesRequest()),
  getHistoric: () => dispatch(fetchHistoricPricesRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
