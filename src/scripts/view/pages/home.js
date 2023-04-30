import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <section class="content">
            <div class="latest">
                <h1 class="latest_label" tabindex="0">Explore Restaurant</h1>
                <div class="posts" id="posts">
                </div>
            </div>
        </section>
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.homeRestaurant();
    const restaurantContainer = document.querySelector('#posts');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
