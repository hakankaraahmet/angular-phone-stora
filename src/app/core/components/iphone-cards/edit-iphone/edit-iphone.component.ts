import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as fromApp from '../../../../store/app.reducer';
import { Iphone } from '../iphone.model';
import * as  IphoneCardsAction from '../store/iphone-cards.actions'

@Component({
  selector: 'app-edit-iphone',
  templateUrl: './edit-iphone.component.html',
  styleUrls: ['./edit-iphone.component.css'],
})
export class EditIphoneComponent implements OnInit {
  editPhoneForm: FormGroup;
  selectedId: string;
  selectedIphone: Iphone | undefined;
  iphoneList: Iphone[];
  phoneSubscription: Subscription;
  constructor(
    private store: Store<fromApp.AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.store.dispatch(IphoneCardsAction.loadIphone());
    this.createForm();
    this.store
      .select('iphone')
      .subscribe((s) => (this.iphoneList = s.iphoneList));
    this.selectedId = this.route.snapshot.params['id'];
    this.route.params.subscribe((params: Params) => {
      this.selectedId = params['id'];
    });
    this.selectedIphone = this.iphoneList.find((e) => e.id === this.selectedId);
    this.store.select('iphone').subscribe((phone) => {
      if (phone) {
        this.editPhoneForm.patchValue({
          name: this.selectedIphone?.name,
          model: this.selectedIphone?.model,
          price: this.selectedIphone?.price,
          mainImage: this.selectedIphone?.mainImage,
          color: this.selectedIphone?.color,
          screenSize: this.selectedIphone?.screenSize,
          description: this.selectedIphone?.description,
          sku: this.selectedIphone?.sku,
        });
      }
    });
  }

  createForm() {
    this.editPhoneForm = new FormGroup({
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
    if (!this.editPhoneForm.valid) {
      return;
    }

    const name = this.editPhoneForm.value.name
    const model = this.editPhoneForm.value.model
    const price = this.editPhoneForm.value.price
    const  mainImage = this.editPhoneForm.value.mainImage
    const color = this.editPhoneForm.value.color
    const screenSize = this.editPhoneForm.value.screenSize
    const description = this.editPhoneForm.value.description
    const sku = this.editPhoneForm.value.sku

    const iphone : Iphone = {
      id : this.selectedId,
      name,
      price,
      mainImage,
      color,
      screenSize,
      description,
      sku,
      model
    }




    this.store.dispatch(IphoneCardsAction.updateIphone({iphone}))
    this.router.navigate(['/iphone-cards']);
  }
}
