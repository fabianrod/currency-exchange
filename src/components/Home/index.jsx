/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import {
  Container,
  Form,
  Button,
} from 'react-bootstrap';
import HistoricItem from '../HistoricItem';
import Footer from '../Footer';
import Header from '../Header';
import convertEurToUsd from '../../utils/currencies.util';
import './home.scss';

function Home({
  currentCurrency, historic, getHistoric, getCurrencyValue,
}) {
  const [USDAmount, setUSDAmount] = useState(0);
  const [EURAmount, setEURAmount] = useState('');
  useEffect(() => {
    getHistoric();
    getCurrencyValue();
    // eslint-disable-next-line
  }, []);
  const handlerEURAmount = (e) => setEURAmount(e.value);
  const calculate = (amount) => setUSDAmount(convertEurToUsd(amount, currentCurrency.rates.USD));
  return (
    <div className="home-page">
      <Header />
      <div className="convert-currency">
        <Form.Group className="input-currency">
          <div className="input-block">
            <span>€</span>
            <NumberFormat className="form-control" thousandSeparator placeholder={currentCurrency.base} decimalScale={4} onValueChange={(values) => handlerEURAmount(values)} />
          </div>
          <div className="input-block">
            <span>$</span>
            <NumberFormat className="form-control" placeholder="USD" value={USDAmount} disabled thousandSeparator decimalScale={2} />
          </div>
        </Form.Group>
        <Button className="btn-calculate" onClick={() => calculate(EURAmount)}>CALCULATE</Button>
      </div>
      <Container className="historic-price">
        <h3>Historic Price</h3>
        <div className="price-list">
          {
            // eslint-disable-next-line react/prop-types
            historic.map((item) => <HistoricItem key={`id-${item.timestamp}`} date={item.date} price={item.rates.USD} />)
          }

        </div>
      </Container>
      <Footer />
    </div>
  );
}

Home.propTypes = {
  currentCurrency: PropTypes.shape({
    base: PropTypes.string,
    rates: PropTypes.object,
  }).isRequired,
  historic: PropTypes.array.isRequired,
  getHistoric: PropTypes.func.isRequired,
  getCurrencyValue: PropTypes.func.isRequired,
};

export default Home;
