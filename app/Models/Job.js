import { generateId } from "../utils.js";
console.log(0)
export default class Job {
  // Object Destructuring
  constructor({ type, title, wage, rate, img, responsibilities }) {
    console.log(2);
    this.id = generateId()
    this.type = type
    this.title = title
    this.wage = wage
    this.rate = rate
    this.img = img
    this.responsibilities = responsibilities || "no description"
  }

  get Template() {
    return `            
    <div class="col-4">
      <div class="card">
          <img class="card-img-top" src="${this.img}" alt="">
          <div class="card-body">
              <h4 class="card-title">${this.type} - ${this.title} - ${this.wage}</h4>
              <p class="card-text">${this.responsibilities}</p>
              <div class="d-flex justify-content-between">
                  <button class="btn btn-outline-danger" onclick="app.carsController.removeCar('${this.id}')">Delete</button>
                  <button class="btn btn-outline-info" onclick="app.carsController.bid('${this.id}')">+ $100</button>
                  <p>$${this.rate.toFixed(2)}</p>
              </div>
          </div>
      </div>
    </div>`
  }
}