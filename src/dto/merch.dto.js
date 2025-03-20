export default class MerchDTO {
  constructor({
    id,
    name,
    description,
    price,
    category,
    stock,
    sizes,
    images,
    afiliatedCreators,
    discount,
    isFeatured,
    offer,
  }) {
    (this.id = id), (this.name = name);
    this.description = description;
    this.price = price;
    this.category = category;
    this.stock = stock;
    this.sizes = sizes;
    this.images = images;
    this.afiliatedCreators = afiliatedCreators;
    this.discount = discount;
    this.isFeatured = isFeatured;
    this.offer = offer;
  }
}
