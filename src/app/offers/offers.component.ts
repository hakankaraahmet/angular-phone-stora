import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Offer } from './offers.model';
import * as fromApp from '../store/app.reducer';
import { Router } from '@angular/router';
import * as OffersAction from './store/offers.actions';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
})
export class OffersComponent implements OnInit {
  offersList: Offer[] = [];
  constructor(private store: Store<fromApp.AppState>, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(OffersAction.loadOffer());
    this.store.select('offers').subscribe((s) => console.log(s.offersList));
  }

  onDelete(id: string) {
    if(confirm('Are you sure you want to delete ?')){
      this.store.dispatch(OffersAction.deleteOffer({id}))
    }
  }

  onRouteCreate() {
    this.router.navigate(['/create-offer']);
  }
}
