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
  iphoneList: Observable<{ ingredients: Iphone[] }> | any;

  constructor(
    private store: Store<fromApp.AppState>,
    private router: Router,
    private http: HttpClient
  ) {}

  private fetchPhoneList() {
    this.http
      .get('https://iphone-list-53d00-default-rtdb.firebaseio.com/posts.json')
      .pipe(
        map((responseData : any) => {
          const arr= []
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              arr.push({ ...responseData[key] , id: key });
            }
          }
          this.iphoneList = arr;
        })
      )
      .subscribe((data) => console.log(data));
  }

  ngOnInit(): void {
    // this.iphoneList = this.store.select('iphone');
    // this.store.subscribe((s) => (this.iphoneList = s.iphone.iphoneList));
    console.log(this.iphoneList)
    this.fetchPhoneList();
  }

  onRouteCreate() {
    this.router.navigate(['/create-iphone']);
  }

  onDelete(id: number) {}
}
