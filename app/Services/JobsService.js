import STORE from "../store.js";
import Job from "../Models/Job.js";

//Private
//Public
class JobsService {

  addJob(newJob) {
    let job = new Job(newJob)
    STORE.State.jobs.push(job)
  }
  removeJob(id) {
    let jobIndex = STORE.State.jobs.findIndex(j => j.id === id)
    if (jobIndex == -1) {
      console.error('unusable Id')
      return
    }
    STORE.State.jobs.splice(jobIndex, 1)
  }
  //i dont know how to do this one because i dont know where the input will be going.
  applyJob(id) {
let job = STORE.State.jobs.find(j => j.id === id)
console.log("applied for job")
  }














}

const SERVICE = new JobsService();
export default SERVICE;
