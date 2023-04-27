import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    return `
            <div id="movie" class="movie"></div>
            <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    console.log(restaurant);

    // TODO: tampilkan movie di dalam DOM
  },
};

export default Detail;
