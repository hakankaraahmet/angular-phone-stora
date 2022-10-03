import { Accessories } from "../accessories-cards/accessories.model";
import { Iphone } from "../iphone-cards/iphone.model";

export class Offer {
  public offeredDevice: string[];
  public name : string;
  public price : number;
  public id: string;

  constructor(offeredDevice: string[], id: string, name : string, price : number) {
    this.offeredDevice = offeredDevice;
    this.id = id;
    this.price = price;
    this.name = name;
  }
}
