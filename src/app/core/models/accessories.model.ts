export class Accessories {
  public name: string;
  public price: number;
  public sku: string;
  public id: string;

  constructor(name: string, price: number, sku: string, id: string) {
    this.name = name;
    this.price = price;
    this.sku = sku;
    this.id = id;
  }
}
