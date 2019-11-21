import axios from 'axios';
import api from '../constants';

// get the numbers of the last 3 days
const getDays = () => {
  const baseDate = new Date();
  const currentDay = baseDate.getDate();
  const last3Days = [];
  for (let i = 0; i <= 2; i += 1) {
    last3Days.push(currentDay - i);
  }
  return last3Days;
};

// Call the web service to get all rates
const setHistoricRates = async (year, month, day) => {
  const last3Days = getDays();
  const finalRates = await axios.get(`${api.url}${year}${month}${last3Days[day]}?access_key=10e61904b42948c1638dfaf86502070c&base=EUR&symbols=USD`);
  return finalRates.data;
};

/*
  DO Refactor
  Operations with async/await inside a loop, can alterate the performance.
  More information in: https://eslint.org/docs/rules/no-await-in-loop
*/
const setHistoricPrices = async () => {
  const historic = [];
  for (let i = 0; i <= 2; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    const summaryRate = await setHistoricRates('2019-', '11-', i);
    historic.push(summaryRate);
  }
  return historic;
};

export default setHistoricPrices;
