export default class Job {
  constructor(data) {
    if (!data.jobtitle || !data.company || !data.workhrs || !data.pay || !data.benefits || !data.jobdescription) {
      throw new Error("Invalid Auto Creation")
    }
    this.jobtitle = data.jobtitle
    this.company = data.company
    this.workhrs = data.workhrs
    this.pay = data.pay
    this.benefits = data.benefits
    this.jobdescription = data.jobdescription
  }
}