/* eslint-disable import/extensions */
/* eslint-disable no-use-before-define */
// import { async } from 'regenerator-runtime';
import '../component/restaurant-list.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const restaurantListElement = document.querySelector('restaurant-list');

  const renderList = () => {
    try {
      const result = DataSource.getData();
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    restaurantListElement.restaurants = results;
  };

  const fallbackResult = (message) => {
    restaurantListElement.renderError(message);
  };

  renderList();
};

export default main;
