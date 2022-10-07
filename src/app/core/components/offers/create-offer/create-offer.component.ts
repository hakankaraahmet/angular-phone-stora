import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';

import * as fromApp from '../../../store/app.reducer';
import * as OffersAction from '../store/offers.actions';
import * as IphoneCardsAction from '../../iphone-cards/store/iphone-cards.actions';
import * as AccessoriesCardsAction from '../../accessories-cards/store/accessories-cards.actions';

import { Iphone } from '../../../models/iphone.model';
import { Accessories } from '../../../models/accessories.model';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css'],
})
export class CreateOfferComponent implements OnInit {
  iphoneList: Observable<Iphone[] >;
  accessoriesList: Observable<Accessories[]> ;
  offersForm: FormGroup;
  totalPrice: number = 0;
  productNames: string[] = [];

  constructor(private store: Store<fromApp.AppState>, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(IphoneCardsAction.loadIphone());
    this.store.dispatch(AccessoriesCardsAction.loadAccessories());
    this.iphoneList = this.store
      .select('iphone')
      .pipe(map((state) => state.iphoneList));

      this.accessoriesList =  this.store
      .select('accessories')
      .pipe(map((state) => state.accessoriesList));

    this.offersForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      iphones: new FormControl(null, Validators.required),
      accessories: new FormControl(null, Validators.required),
    });
  }

  selectionChanged() {
    this.productNames = [];
    this.totalPrice = 0;
    let accessories: Accessories[] = this.offersForm.value.accessories;
    let iphones: Iphone[] = this.offersForm.value.iphones;

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
    this.totalPrice = this.totalPrice * 0.8;
  }

  createOffer() {
    let offerName = this.offersForm.value.name;

    let offer: any = {
      name: offerName,
      price: this.totalPrice,
      offeredDevice: this.productNames,
    };

    this.store.dispatch(OffersAction.addOffer({ offer: offer }));
    this.offersForm.reset();
    this.totalPrice = 0;
    this.productNames = [];
    this.router.navigate(['/offers']);
  }
}
