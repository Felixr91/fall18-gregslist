import EstatesService from "./estates-service.js";

let _estatesService = new EstatesService()


export default class EstatesController {

  showEstates() {
    console.log("Hello from estates-controller!")
    let estates = _estatesService.getEstates()
    let template = ""
    estates.forEach(estate => {
      template += `
        <div class="col card">
          <img src="${estate.img}">
          <h5>${estate.numbeds} - ${estate.numbaths} ${estate.year}</h5>
          <p>Square feet: ${estate.sqft}
          <p>Address: ${estate.adress}</p>
          <p>Price: ${estate.price}</p>
        </div>
      `
    })
    document.getElementById('main-content').innerHTML = template
  }

  addEstate(event) {
    event.preventDefault(); //prevents the page from reloading
    let form = event.target // the element that triggers the event
    let formData = {
      numbeds: form.numbeds.value,
      numbaths: form.numbaths.value,
      year: form.year.value,
      sqft: form.sqft.value,
      price: form.PRICE.value,
      description: form.description.value,
      address: form.address.value,
      img: form.img.value
    }
    _estatesService.addEstate(formData)
    this.showEstates()
    form.reset()
  }

}