import { Component, OnInit } from '@angular/core';
import { Offers } from './offers.model';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  offers: Offers[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
