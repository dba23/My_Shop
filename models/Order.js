import moment from "moment";
class Order {
  constructor(id, items, totalAmount, date) {
    this.id = id;
    this.items = items;
    this.totalAmount = totalAmount;
    this.date = date;
  }
  get readableDate() {
    // return this.date.toLocaleDateString("en-EN", {
    //   year: "numric",
    //   day: "numric",
    //   month: "long",
    //   hour: "2-gigit",
    //   minute: "2-gigit",
    // });
    return moment(this.date).format("MMMM Do YYYY, HH:MM");
  }
}
export default Order;
