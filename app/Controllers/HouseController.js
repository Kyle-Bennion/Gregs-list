import HouseService from "../Services/HouseService.js";
import STORE from "../store.js";
console.log(3)
// private
function _drawHouses() {
  console.log(6)
  let houses = STORE.State.houses
  let template = ''
  // NOTE when you have a collection of items, they will need to be added to the template in a loop
  houses.forEach(h => template += h.Template)
  document.getElementById('houses').innerHTML = template
}


//Public
export default class HouseController {
  constructor() {
    console.log(5)
    _drawHouses();
  }

  createHouse() {
    event.preventDefault();
    let form = event.target
    let rawHouse = {
      // @ts-ignore
      make: form.make.value,
      // @ts-ignore
      model: form.model.value,
      // @ts-ignore
      year: form.year.value,
      // @ts-ignore
      price: parseInt(form.price.value),
      // @ts-ignore
      description: form.description.value,
      // @ts-ignore
      img: form.img.value
    }
    HouseService.createHouse(rawHouse)
    _drawHouses();
  }

  removeHouse(id) {
    console.log('byebye', id)
    HouseService.removeHouse(id);
    _drawHouses();
  }

  bid(id) {
    HouseService.bid(id);
    _drawHouses();
  }
}
