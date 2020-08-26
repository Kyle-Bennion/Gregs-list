import CarsController from "./Controllers/CarsController.js";
import HouseController from "./Controllers/HouseController.js";
import JobController from "./Controllers/JobController.js";
console.log(4)
class App {
  carsController = new CarsController();
  HouseController = new HouseController();

  JobController = new JobController();
}

window["app"] = new App();
