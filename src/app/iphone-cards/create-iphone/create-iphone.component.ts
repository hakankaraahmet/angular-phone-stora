import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as IphoneCardsAction from '../store/iphone-cards.actions';

@Component({
  selector: 'app-create-iphone',
  templateUrl: './create-iphone.component.html',
  styleUrls: ['./create-iphone.component.css'],
})
export class CreateIphoneComponent implements OnInit {
  createPhoneForm: FormGroup;

  constructor(
    private store: Store<fromApp.AppState>,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.createPhoneForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      model: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      mainImage: new FormControl(null, Validators.required),
      color: new FormControl(null, Validators.required),
      screenSize: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      sku: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {

    this.store.dispatch(IphoneCardsAction.addIphone({iphone : this.createPhoneForm.value}))
    this.createPhoneForm.reset();
    this.router.navigate(['/iphone-cards']);
  }
}
