import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Iphone } from 'src/app/iphone-cards/iphone.model';
import * as fromApp from '../../store/app.reducer';
import * as OffersAction from "../store/offers.actions";
import * as IphoneCardsAction from '../../iphone-cards/store/iphone-cards.actions';


@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css']
})
export class CreateOfferComponent implements OnInit {
  iphoneList: Observable<{ iphoneList: Iphone[] }> | any;
  createOffersForm = new FormControl();
  constructor(private store: Store<fromApp.AppState>, private router: Router) {}
  
  ngOnInit(): void {

  

    this.store
    .select('iphone')
    .subscribe((s) => (this.iphoneList = s.iphoneList));
  this.store.dispatch(IphoneCardsAction.loadIphone());

    console.log("offer-create iphone list", this.iphoneList)
  }

   onSubmit(){
    this.store.dispatch(
      OffersAction.addOffer({
        offer: this.createOffersForm.value,
      })
    );
    this.createOffersForm.reset();
    this.router.navigate(['/offers']);
   }


   
}
