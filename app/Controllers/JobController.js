import JobsService from "../Services/JobsService.js";
import STORE from "../store.js";
console.log(3)

function _drawJobs() {
let jobs = STORE.State.jobs
let template = ''
jobs.forEach(j => template += j.Template)
document.getElementById('jobs').innerHTML = template
}






// private



//Public
export default class JobsController {
  constructor() {
_drawJobs();
  }




}
