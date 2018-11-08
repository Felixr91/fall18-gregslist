import AutosController from "./components/autos/autos-controller.js";
import EstatesController from "./components/estates/estates-controller.js";
import JobsController from "./components/jobs/jobs-controller.js";

/*create app property on window object*/
class App {
  //App object has one property called controllers. Controllers is its own object.
  //constructor creates instance of the class
  constructor() {
    this.controllers = {
      autosController: new AutosController(),
      // RealEstatesController
      estatesController: new EstatesController(),
      // JobsController
      jobsController: new JobsController()
    }
  }
}

/*property        value */
window.app = new App()
