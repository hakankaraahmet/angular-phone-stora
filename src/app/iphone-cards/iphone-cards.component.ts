import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Iphone } from './iphone.model';
import * as fromApp from '../store/app.reducer';

@Component({
  selector: 'app-iphone-cards',
  templateUrl: './iphone-cards.component.html',
  styleUrls: ['./iphone-cards.component.css'],
})
export class IphoneCardsComponent implements OnInit {
  iphoneList: Observable<{ ingredients: Iphone[] }> | any;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.iphoneList = this.store.select('iphone');
    this.store.subscribe((s) => (this.iphoneList = s.iphone.iphoneList));
  }
}
