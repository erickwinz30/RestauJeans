/* eslint-disable import/extensions */
import './restaurant-item.js';

class RestaurantList extends HTMLElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  renderError(message) {
    this.innerHTML = `
          <style>
            .placeholder {
              font-weight: lighter;
              color: rgba(0, 0, 0, 0.5);
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
            }
          </style>
          <h2 class="placeholder">${message}</h2>`;
  }

  render() {
    this.innerHTML = '';
    this._restaurants.forEach((restaurant) => {
      const restaurantItemElement = document.createElement('restaurant-item');
      restaurantItemElement.restaurant = restaurant;

      this.appendChild(restaurantItemElement);
    });
  }
}

customElements.define('restaurant-list', RestaurantList);
