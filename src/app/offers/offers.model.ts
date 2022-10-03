import { Accessories } from "../accessories-cards/accessories.model";
import { Iphone } from "../iphone-cards/iphone.model";

export class Offer {
  public offeredDevice: Iphone | Accessories;
  public name : string;
  public id: string;

  constructor(offeredDevice: Iphone | Accessories, id: string, name : string) {
    this.offeredDevice = offeredDevice;
    this.id = id;
    this.name = name;
  }
}
