import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Iphone } from './iphone.model';
import * as fromIphone from './store/iphone-cards.reducer';

@Component({
  selector: 'app-iphone-cards',
  templateUrl: './iphone-cards.component.html',
  styleUrls: ['./iphone-cards.component.css'],
})
export class IphoneCardsComponent implements OnInit {
  iphoneList: any;

  constructor(private store: Store<fromIphone.State>) {}

  ngOnInit(): void {
    // this.iphoneList = this.store.select('iphoneList');
   this.store.subscribe(s => this.iphoneList = s)
   this.iphoneList = this.iphoneList.iphone.iphoneList
   console.log(this.iphoneList)
  }
}
