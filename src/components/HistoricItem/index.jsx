import React from 'react';
import './historicitem.scss';

function HistoricItem() {
  return (
    <div className="historic-item">
      <div className="price-item">
        <span className="price-item__title">Price: </span>
        <span className="price-item__value">$1.10 USD</span>
      </div>
      <div className="date-item">
        <span className="price-item__title">Date: </span>
        <span className="price-item__value">2019-10-11</span>
      </div>
    </div>
  );
}

export default HistoricItem;