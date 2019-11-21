import axios from 'axios';
import api from '../constants';

const getCurrencyValue = () => axios({
  url: api.url + api.latest + api.key,
  method: 'GET',
})
  .then(({ data }) => data);

export default getCurrencyValue;
