import Car from "./Models/Car.js";
import House from "./Models/House.js";
import Job from "./Models/Job.js"
console.log(1);

let _state = {
  /** @type {Car[]} */
  cars: [
    new Car({ make: "Tesla", model: "Cybertruck", year: 2020, price: 100000, img: "https://s3.amazonaws.com/images.gearjunkie.com/uploads/2019/11/tesla_pickup.png", description: "It's like living in the future, with 1 broken window." }),
    new Car({ make: "Mystery", model: "Machine", year: 1987, price: 1000, img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/the-classic-mystery-machine-replica-van-built-by-jerry-news-photo-1587131341.jpg?crop=1.00xw:0.753xh;0,0.176xh&resize=1200:*", description: "Smells like meddling teenagers and a dog" }),
    new Car({ make: "Jeep", model: "Wrangler", year: 1987, price: 1000, img: "https://vignette.wikia.nocookie.net/jurassicpark/images/e/e7/Jurassic-park-jeep3-1-.jpg/revision/latest/scale-to-width-down/340?cb=20090417212624", description: "Are those teeth marks?" })
  ],
  houses: [new House({ style: "Traditional", model: "4 Bed 3 Bath", price: 259894, img: "https://www.familyhomeplans.com/house-plan-51983?CouponCode=FREESHIP&OrderCode=GOEXP&gclid=EAIaIQobChMI_pig6dC56wIVyB6tBh2vMw_YEAQYAyABEgJLtPD_BwE ", description: "This is a lovely new construction home. Located just on the outskirts of a main city with short commute times this if perfect for an aging couple looking to downsize and growing families looking for a little more room." }), new House({ style: "Cottage", model: "3 Bed 2.5 Bath", price: 219894, img: "https://www.familyhomeplans.com/house-plan-82162?CouponCode=FREESHIP&OrderCode=GOEXP&gclid=EAIaIQobChMI_pig6dC56wIVyB6tBh2vMw_YEAQYBiABEgI-0_D_BwE", description: "This is a lovely new construction home. Located just on the outskirts of a main city with short commute times this if perfect for an aging couple looking to downsize and growing families looking for a little more room." }), new House({ style: "Modern", model: "5 Ben 5 Bath", price: 499893, img: "https://www.familyhomeplans.com/house-plan-81902?CouponCode=FREESHIP&OrderCode=GOEXP&gclid=EAIaIQobChMImoHPmNO56wIV8j2tBh09bQtCEAQYBCABEgITvvD_BwE" description: "This is a rather large home with perfect clean lines designed for the up to date technologically savy family, This home has many custom features to include RFID recognition to change the temperature of the current room to the users prefered temperature and many more equally impressive things." })],
  jobs: []
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
