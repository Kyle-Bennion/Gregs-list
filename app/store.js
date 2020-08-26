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
  /** @type {House[]} */
  houses: [new House({ style: "Traditional", model: "4 Bed 3 Bath", price: 259894, img: "//placehold.it/200x200 ", description: "This  house is perfect for an aging couple looking to downsize and growing families looking for a little more room." }), new House({ style: "Cottage", model: "3 Bed 2.5 Bath", price: 219894, img: "//placehold.it/200x200", description: "This is a lovely new construction home. Located just on the outskirts of a main city with short commute times." }), new House({ style: "Modern", model: "5 Ben 5 Bath", price: 499893, img: "//placehold.it/200x200", description: "This is a rather large home with perfect clean lines designed for the up to date technologically savy family." })],
  /** @type {Job[]} */
  jobs: [new Job({ type: "Intellegence", title: "Data Analysis", wage: "188k", rate: "Salary", img: "//placehold.it/200x200", responsibilities: "Pour through critical data and determine threat levels." }), new Job({ type: "Computer-Technology", title: "Data Entry", wage: "39k", rate: "18.50", img: "//placehold.it/200x200", responsibilities: "Pour through critical data and input it into correct field with a degree of accuracy." }), new Job({ type: "Construction", title: "Project Manager", wage: "101k", rate: "Salary", img: "//placehold.it/200x200", responsibilities: "manage high work loads with many moving parts ensuring that the project is completed with minimal delays" })]
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
