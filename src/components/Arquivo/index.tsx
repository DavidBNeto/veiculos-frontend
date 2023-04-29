import { Status } from "../FileLoading/types"
import { CarManufacturer } from "../Dropdown"

class Arquivo extends File {
  private key: string

  private carManufacturer?: CarManufacturer

  private state: Status

  constructor(
    file: File,
    carManufacturer?: CarManufacturer,
    state: Status = "downloading"
  ) {
    super([file], file.name, {
      type: file.type,
      lastModified: file.lastModified,
    })

    this.carManufacturer = carManufacturer
    this.state = state
    this.key = `${file.name}-${file.lastModified}-${file.size}-${file.type}`
  }

  getKey() {
    return this.key
  }

  setState(state: Status) {
    this.state = state
  }

  getState() {
    return this.state
  }

  getCarManufacturer() {
    return this.carManufacturer
  }

  setCarManufacturer(carManufacturer: CarManufacturer) {
    this.carManufacturer = carManufacturer
  }
}

export default Arquivo
