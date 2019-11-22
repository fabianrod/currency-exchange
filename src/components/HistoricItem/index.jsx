import React from 'react';
import PropTypes from 'prop-types';
import './historicitem.scss';

function HistoricItem(props) {
  const { date, price } = props;
  return (
    <div className="historic-item">
      <div className="price-item">
        <span className="price-item__title">Price: </span>
        <span className="price-item__value">{`$${price}`}</span>
      </div>
      <div className="date-item">
        <span className="price-item__title">Date: </span>
        <span className="price-item__value">{date}</span>
      </div>
    </div>
  );
}

HistoricItem.propTypes = {
  date: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default HistoricItem;
