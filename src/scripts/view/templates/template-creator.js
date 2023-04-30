import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
    <div class="restaurant-item">
    <div class="restaurant-item_header">
    <img class="restaurant-item_header_poster" alt="${restaurant.name}"
        src="${CONFIG.BASE_IMAGE_SMALL_URL + restaurant.pictureId}">
    <div class="restaurant-item_header_rating">
        <p>⭐️<span class="restaurant-item_header_rating_score">${restaurant.rating}</span></p>
    </div>
    </div>
    <div class="restaurant-item_content">
    <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
    <p>${restaurant.description}</p>
    </div>
    </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
    <h2 class="restaurant_title">${restaurant.name}</h2>
    <img class="restaurant_poster" src="${CONFIG.BASE_IMAGE_MEDIUM_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    <div class="restaurant_info">
        <h3>Information</h3>
        <h4>City</h4>
        <p>${restaurant.city}</p>
        <h4>Rating</h4>
        <p>${restaurant.rating}</p>
    </div>
    <div class="restaurant_overview">
        <h3>Overview</h3>
        <p>${restaurant.description}</p>
    </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
