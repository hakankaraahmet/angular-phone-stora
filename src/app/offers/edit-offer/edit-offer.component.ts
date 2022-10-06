import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Iphone } from 'src/app/iphone-cards/iphone.model';
import * as fromApp from '../../store/app.reducer';
import { Offer } from '../offers.model';
import * as OfferActions from '../store/offers.actions';
import * as IphoneCardsAction from '../../iphone-cards/store/iphone-cards.actions';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.component.html',
  styleUrls: ['./edit-offer.component.css'],
})
export class EditOfferComponent implements OnInit {
  iphoneList: Observable<{ iphoneList: Iphone[] }> | any;
  editNameForm: FormGroup;
  selectedOffer: any;
  selectedId: string;
  offersList: Offer[];

  constructor(
    private store: Store<fromApp.AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.store
      .select('iphone')
      .subscribe((s) => (this.iphoneList = s.iphoneList));
    this.store.dispatch(IphoneCardsAction.loadIphone());

    this.store
      .select('offers')
      .subscribe((s) => (this.offersList = s.offersList));
    this.selectedId = this.route.snapshot.params['id'];
    this.route.params.subscribe((params: Params) => {
      this.selectedId = params['id'];
    });
    this.selectedOffer = this.offersList.find(
      (e: any) => e.id === this.selectedId
    );
    this.store.select('offers').subscribe((offer) => {
      if (offer) {
        this.editNameForm.patchValue({
          name: this.selectedOffer?.name,
        });
      }
    });
  }

  createForm() {
    this.editNameForm = new FormGroup({
      name: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    if (!this.editNameForm.valid) {
      return;
    }

    const name = this.editNameForm.value.name;

    const offer: Offer = {
      id: this.selectedId,
      name: name,
      price: this.selectedOffer.price,
      offeredDevice: this.selectedOffer.device,
    };

    this.store.dispatch(OfferActions.updateOffer({ offer }));
    this.router.navigate(['/offers']);
  }
}
