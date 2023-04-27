const Favorite = {
  async render() {
    return `
        <section class="content">
            <div class="latest">
                <h1 class="latest_label" tabindex="0">Explore Restaurant</h1>
                <div class="posts">
                    <restaurant-list class="list-item"></restaurant-list>
                </div>
            </div>
        </section>
        `;
  },

  async afterRender() {
    // dfasdf
  },
};

export default Favorite;
