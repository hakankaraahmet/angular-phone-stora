import { HttpClient } from '@angular/common/http';
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
  // id: number = Math.floor(Math.random() * 100);

  constructor(private store: Store<fromApp.AppState>, private router: Router, private http : HttpClient) {}

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
      // id: new FormControl(null),
    });
  }

  onSubmit() {
    // this.createPhoneForm.value.id = this.id;
    // this.store.dispatch(
    //   IphoneCardsAction.addIphone({ iphone: this.createPhoneForm.value })
    // );
    this.http.post('https://iphone-list-53d00-default-rtdb.firebaseio.com/posts.json', this.createPhoneForm.value).subscribe(responseData => {console.log(responseData)})
    this.createPhoneForm.reset();
    this.router.navigate(['/iphone-cards']);
  }
}
