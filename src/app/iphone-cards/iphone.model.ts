export class Iphone {
  public name: string;
  public price: number;
  public mainImage: string;
  public color: string;
  public screenSize: string;
  public description: string;
  public sku: string;
  public model: string;
  public id: number;

  constructor(
    name: string,
    price: number,
    mainImage: string,
    color: string,
    screenSize: string,
    description: string,
    sku: string,
    model: string,
    id: number
  ) {
    this.name = name;
    this.price = price;
    this.mainImage = mainImage;
    this.color = color;
    this.screenSize = screenSize;
    this.description = description;
    this.sku = sku;
    this.model = model;
    this.id = id;
  }
}
