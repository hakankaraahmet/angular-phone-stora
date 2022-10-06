import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromApp from '../../../../store/app.reducer';
import * as OffersAction from '../store/offers.actions';
import * as IphoneCardsAction from '../../iphone-cards/store/iphone-cards.actions';
import * as AccessoriesCardsAction from '../../accessories-cards/store/accessories-cards.actions';

import { Iphone } from '../../iphone-cards/iphone.model';
import { Accessories } from '../../accessories-cards/accessories.model';


@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css'],
})
export class CreateOfferComponent implements OnInit {
  iphoneList: Observable<{ iphoneList: Iphone[] }> | any;
  accessoriesList: Observable<{ iphoneList: Accessories[] }> | any;
  iphoneOffersForm = new FormControl();
  accessoriesOffersForm = new FormControl();
  offersNameForm = new FormControl()
  shownPrice : string = "";
  totalPrice: number = 0;
  productNames: string[] = [];

  constructor(private store: Store<fromApp.AppState>, private router: Router) {}

  ngOnInit(): void {
    this.store
      .select('iphone')
      .subscribe((s) => (this.iphoneList = s.iphoneList));
    this.store.dispatch(IphoneCardsAction.loadIphone());

    this.store.dispatch(AccessoriesCardsAction.loadAccessories());
    this.store
      .select('accessories')
      .subscribe((s) => (this.accessoriesList = s.accessoriesList));
  }

  onSubmit() {
    this.store.dispatch(
      OffersAction.addOffer({
        offer: this.iphoneOffersForm.value,
      })
    );
    this.iphoneOffersForm.reset();
    this.router.navigate(['/offers']);
  }

  selectionChanged() {
    this.productNames = [];
    this.totalPrice = 0;
    let accessories: Accessories[] = this.accessoriesOffersForm.value;
    let iphones: Iphone[] = this.iphoneOffersForm.value;

    if (accessories)
      accessories.forEach((element) => {
        this.totalPrice += element.price;
        this.productNames.push(element.name);
      });
    if (iphones)
      iphones.forEach((element) => {
        this.totalPrice += element.price;
        this.productNames.push(element.name);
      });
    this.totalPrice = (this.totalPrice * 0.8);
    this.shownPrice = this.totalPrice.toFixed(2);
  }

  createOffer(){
    let offerName = this.offersNameForm.value;

    let offer : any = {
      name : offerName,
      price : this.totalPrice,
      offeredDevice : this.productNames
    }

    this.store.dispatch(OffersAction.addOffer({offer : offer}))
    this.accessoriesOffersForm.reset();
    this.iphoneOffersForm.reset();
    this.offersNameForm.reset();
    this.totalPrice = 0;
    this.productNames = [];
    this.router.navigate(['/offers']);

  }
}
