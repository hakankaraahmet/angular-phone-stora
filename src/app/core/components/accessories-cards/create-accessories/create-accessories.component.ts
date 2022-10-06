import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../store/app.reducer';
import * as AccessoriesCardsAction from '../store/accessories-cards.actions';

@Component({
  selector: 'app-create-accessories',
  templateUrl: './create-accessories.component.html',
  styleUrls: ['./create-accessories.component.css'],
})
export class CreateAccessoriesComponent implements OnInit {
  createAccessoriesForm: FormGroup;
  constructor(private store: Store<fromApp.AppState>, private router: Router) {}

  ngOnInit(): void {
    this.createAccessoriesForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      sku: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    this.store.dispatch(
      AccessoriesCardsAction.addAccessories({
        accessory: this.createAccessoriesForm.value,
      })
    );
    this.createAccessoriesForm.reset();
    this.router.navigate(['/accessories-cards']);
  }
}
