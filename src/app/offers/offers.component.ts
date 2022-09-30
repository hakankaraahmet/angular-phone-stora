import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Offers } from './offers.model';
import * as fromApp from '../store/app.reducer';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  offers: Offers[] = [];
  constructor(    private store: Store<fromApp.AppState>,) { }

  ngOnInit(): void {
   this.store.select('iphone').subscribe((s) => console.log(s.iphoneList))
  }

}
