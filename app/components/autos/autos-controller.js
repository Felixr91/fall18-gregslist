//handles inputs and events
//after service completes data manipulation controller renders changes to the DOM
//importing class
import AutosService from "./autos-service.js";
//creating a new instance of above class
let _autosService = new AutosService()


export default class AutosController {

  showAutos() {
    console.log("autobots assemble")
    let autos = _autosService.getAutos()
    let template = ""
    autos.forEach(auto => {
      template += `
        <div class="col card">
          <img src="${auto.img}">
          <h5>${auto.make} - ${auto.model} ${auto.year}</h5>
          <p>Miles: ${auto.miles}</p>
          <p>Price: ${auto.price}</p>
        </div>
      `
    })
    document.getElementById('main-content').innerHTML = template
  }
  //e is for event passed from form submission
  addAuto(e) {
    e.preventDefault(); //prevents the page from reloading
    let form = e.target // the element that triggers the event
    let formData = {
      make: form.make.value,
      model: form.model.value,
      year: form.year.value,
      miles: form.miles.value,
      price: form.PRICE.value,
      description: form.description.value,
      img: form.img.value
    }
    _autosService.addAuto(formData)
    this.showAutos()
    form.reset()
  }

}