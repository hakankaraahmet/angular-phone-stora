import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../store/app.reducer';
import { Offer } from '../models/offers.model';
import * as OfferActions from '../store/offers.actions';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.component.html',
  styleUrls: ['./edit-offer.component.css'],
})
export class EditOfferComponent implements OnInit {
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
    this.store.dispatch(OfferActions.loadOffer())
    this.createForm();
    this.store
      .select('offers')
      .subscribe((s) => {(this.offersList = s.offersList)
        if (s) {
          this.editNameForm.patchValue({
            name: this.selectedOffer?.name,
          });
        }});
    this.selectedId = this.route.snapshot.params['id'];
    this.route.params.subscribe((params: Params) => {
      this.selectedId = params['id'];
    });
    this.selectedOffer = this.offersList.find(
      (e: Offer) => e.id === this.selectedId
    );
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
      name,
      price: this.selectedOffer?.price,
      offeredDevice: this.selectedOffer?.offeredDevice,
    };

    this.store.dispatch(OfferActions.updateOffer({ offer }));
    this.router.navigate(['/offers']);
  }
}
