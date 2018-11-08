import JobsService from "./jobs-service.js";

let _jobsService = new JobsService()


export default class JobsController {

  showJobs() {
    let jobs = _jobsService.getJobs()
    let template = ""
    jobs.forEach(job => {
      template += `
        <div class="col card">
          <h5>${job.jobtitle} - ${job.company} ${job.pay}</h5>
          <p>Benefits: ${job.benefits}</p>
          <p>Hours: ${job.hours}</p>
        </div>
      `
    })
    document.getElementById('main-content').innerHTML = template
  }

  addJob(event) {
    event.preventDefault(); //prevents the page from reloading
    let form = event.target // the element that triggers the event
    let formData = {
      jobtitle: form.jobtitle.value,
      company: form.company.value,
      workhrs: form.workhrs.value,
      pay: form.pay.value,
      benefits: form.benefits.value,
      jobdescription: form.jobdescription.value,
    }
    _jobsService.addJob(formData)
    this.showJobs()
    form.reset()
  }

}