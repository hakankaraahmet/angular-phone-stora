import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-iphone',
  templateUrl: './create-iphone.component.html',
  styleUrls: ['./create-iphone.component.css'],
})
export class CreateIphoneComponent implements OnInit {
  createPhoneForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.createPhoneForm = new FormGroup({
      phonename: new FormControl(null, Validators.required),
      model: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required),
      color: new FormControl(null, Validators.required),
      screensize: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      sku: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.createPhoneForm)
  }
}
