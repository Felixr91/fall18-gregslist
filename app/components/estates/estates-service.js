import Estate from "../../models/estate.js";

let _estates = []

export default class EstatesService {
  addEstate(formData) {
    let newEstate = new Estate(formData)
    _estates.push(newEstate)
  }

  getEstates() {
    return _estates
  }


}