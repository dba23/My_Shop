export default class Product {
  constructor(id, ownerId, title, imgUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imgUrl = imgUrl;
    this.ownerId = ownerId;
    this.description = description;
    this.price = price;
  }
}
