import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { Iphone } from './models/iphone.model';
import * as fromApp from '../../store/app.reducer';
import { Router } from '@angular/router';
import * as IphoneCardsAction from './store/iphone-cards.actions';

@Component({
  selector: 'app-iphone-cards',
  templateUrl: './iphone-cards.component.html',
  styleUrls: ['./iphone-cards.component.css'],
})
export class IphoneCardsComponent implements OnInit {
  iphoneList: Observable<Iphone[]>;

  constructor(private store: Store<fromApp.AppState>, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(IphoneCardsAction.loadIphone());
    this.iphoneList =  this.store
      .select('iphone')
      .pipe(map((state) => state.iphoneList));
  }

  onRouteCreate() {
    this.router.navigate(['/create-iphone']);
  }

  onDelete(id: string) {
    if (confirm('Are you sure you want to delete ?')) {
      this.store.dispatch(IphoneCardsAction.deleteIphone({ id }));
    }
  }
}
