import restaurants from "./DATA.json";

class DataSource {
    static getData() {
        return restaurants.restaurants;
    }
}

export default DataSource;