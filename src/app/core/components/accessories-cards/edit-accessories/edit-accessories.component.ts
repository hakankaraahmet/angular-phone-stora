import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as fromApp from '../../../../store/app.reducer';
import { Accessories } from '../accessories.model';
import * as AccessoriesCardsAction from '../store/accessories-cards.actions';

@Component({
  selector: 'app-edit-accessories',
  templateUrl: './edit-accessories.component.html',
  styleUrls: ['./edit-accessories.component.css'],
})
export class EditAccessoriesComponent implements OnInit {
  editAccessoriesForm: FormGroup;
  selectedId: string;
  selectedAccessory: Accessories | undefined;
  accessoriesList: Accessories[];
  accessorySubscription: Subscription;

  constructor(
    private store: Store<fromApp.AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.store.dispatch(AccessoriesCardsAction.loadAccessories());
    this.createForm();
    this.store
      .select('accessories')
      .subscribe((s) => (this.accessoriesList = s.accessoriesList));
    this.selectedId = this.route.snapshot.params['id'];
    this.route.params.subscribe((params: Params) => {
      this.selectedId = params['id'];
    });
    this.selectedAccessory = this.accessoriesList.find(
      (e) => e.id === this.selectedId
    );
    this.store.select('accessories').subscribe((accessory) => {
      if (accessory) {
        this.editAccessoriesForm.patchValue({
          name: this.selectedAccessory?.name,
          price: this.selectedAccessory?.price,
          sku: this.selectedAccessory?.sku,
        });
      }
    });
  }

  createForm() {
    this.editAccessoriesForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      sku: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    if (!this.editAccessoriesForm.valid) {
      return;
    }

    const name = this.editAccessoriesForm.value.name
    const price = this.editAccessoriesForm.value.price
    const sku = this.editAccessoriesForm.value.sku

    const accessory : Accessories = {
      id : this.selectedId,
      name,
      price,
      sku,
    }

    this.store.dispatch(AccessoriesCardsAction.updateAccessories({accessory}))
    this.router.navigate(['/accessories-cards']);
  }
}
