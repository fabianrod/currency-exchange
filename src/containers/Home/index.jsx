import { connect } from 'react-redux';
import { fetchCurrentCurrenciesRequest } from '../../redux/actions/currentCurrencies';
import Home from '../../components/Home';

const mapStateToProps = (state) => ({
  currentCurrency: state.currentCurrencies.data,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencyValue: () => dispatch(fetchCurrentCurrenciesRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
