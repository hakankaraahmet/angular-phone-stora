import { Component, OnInit } from '@angular/core';
import { Iphone } from './iphone.model';

@Component({
  selector: 'app-iphone-cards',
  templateUrl: './iphone-cards.component.html',
  styleUrls: ['./iphone-cards.component.css'],
})
export class IphoneCardsComponent implements OnInit {
  iPhoneList: Iphone[] = [];

  constructor() {}

  ngOnInit(): void {}
}
