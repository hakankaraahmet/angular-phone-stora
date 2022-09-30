import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { Iphone } from './iphone.model';
import * as fromApp from '../store/app.reducer';
import { Router } from '@angular/router';
import * as IphoneCardsAction from './store/iphone-cards.actions';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-iphone-cards',
  templateUrl: './iphone-cards.component.html',
  styleUrls: ['./iphone-cards.component.css'],
})
export class IphoneCardsComponent implements OnInit {
  iphoneList: Observable<{ iphoneList: Iphone[] }> | any;

  constructor(
    private store: Store<fromApp.AppState>,
    private router: Router,
    private http: HttpClient
  ) {}



  ngOnInit(): void {
    // this.fetchPhoneList();
    this.store.select('iphone').subscribe((s) => console.log(s.iphoneList));
    this.store.dispatch(IphoneCardsAction.loadIphone())
  }

  onRouteCreate() {
    this.router.navigate(['/create-iphone']);
  }

  onDelete(id: number) {}
}
