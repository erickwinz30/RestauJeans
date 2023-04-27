class RestaurantItem extends HTMLElement {
    constructor() {
        super();
    }

    set restaurant(restaurants) {
        this._restaurants = restaurants;
        this.render();
    }

    render() {
        this.innerHTML = `
        
            <article class="post-item" tabindex="0" id="maincontent">
                <img class="post-item_thumbnail" src="${this._restaurants.pictureId}"
              alt="Restaurant ${this._restaurants.name}">
                <div class="post-item_content">
                    <h1 class="post-item_title">${this._restaurants.name}</h1>
                    <p class="post-item_description">${this._restaurants.description}</p>
                    <p class="post-item_city">Lokasi: ${this._restaurants.city}</p>
                    <p class="post-item_rating">Rating: ${this._restaurants.rating}</p>
                </div>
            </article>
        `;
    }
}

customElements.define('restaurant-item', RestaurantItem);