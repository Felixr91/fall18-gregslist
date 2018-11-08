export default class Estate {
  constructor(data) {
    debugger
    if (!data.numbeds || !data.numbaths || !data.year || !data.sqft || !data.price || !data.address || !data.description || !data.img) {
      throw new Error("Invalid Auto Creation")
    }
    this.numbeds = data.numbeds
    this.numbaths = data.numbaths
    this.year = data.year
    this.sqft = data.sqft
    this.price = data.price
    this.address = data.address
    this.description = data.description
    this.img = data.img
  }
}