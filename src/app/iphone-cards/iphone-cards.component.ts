import { Component, OnInit } from '@angular/core';
import { Iphone } from './iphone.model';

@Component({
  selector: 'app-iphone-cards',
  templateUrl: './iphone-cards.component.html',
  styleUrls: ['./iphone-cards.component.css'],
})
export class IphoneCardsComponent implements OnInit {
  iPhoneList: Iphone[] = [
    new Iphone(
      'Iphone SE',
      14000,
      'https://cdn.cimri.io/image/1000x1000/appleiphonesegbinmpakllceptelefonu_232395062.jpg',
      'red',
      4.7,
      'Easy to use',
      'ZG011AQA',
      'SE 2020',
      0
    ),
    new Iphone(
      'Iphone SE',
      14000,
      'https://cdn.cimri.io/image/1000x1000/appleiphonesegbinmpakllceptelefonu_232395062.jpg',
      'red',
      4.7,
      'Easy to use',
      'ZG011AQA',
      'SE 2020',
      1
    ),
    new Iphone(
      'Iphone SE',
      14000,
      'https://cdn.cimri.io/image/1000x1000/appleiphonesegbinmpakllceptelefonu_232395062.jpg',
      'red',
      4.7,
      'Easy to use',
      'ZG011AQA',
      'SE 2020',
      2
    ),
    new Iphone(
      'Iphone SE',
      14000,
      'https://cdn.cimri.io/image/1000x1000/appleiphonesegbinmpakllceptelefonu_232395062.jpg',
      'red',
      4.7,
      'Easy to use',
      'ZG011AQA',
      'SE 2020',
      3
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
