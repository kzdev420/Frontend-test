import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "sub", ,"quantity", 'cost', "add" ]
  subtractMinute() {
    var minutes_booked = this.quantityTarget
    var quantity = Number.parseInt(minutes_booked.value)
    const cost = this.quantityTarget.dataset.cost
    if (quantity > 0) {
      minutes_booked.value = quantity - 1
      if (minutes_booked.value < 1) {
        var output = document.getElementById("update")
        output.innerText = `Add minutes to your campaign`
      }
    }
  }
  addMinute() {
    var minutes_booked = this.quantityTarget
    var quantity = Number.parseInt(this.quantityTarget.value)
    const cost = Number.parseInt(this.quantityTarget.dataset.cost)
    minutes_booked.value = quantity + 1
    var output = document.getElementById("update")
    var finalCost = Number.parseInt(output.dataset.cost) + cost
    var totalMinutes = Number.parseInt(output.dataset.minutes) + 1
    output.innerText = `${totalMinutes} min added: Total $${finalCost * totalMinutes}`
   }
}

