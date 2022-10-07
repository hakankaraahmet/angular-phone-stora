import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { Accessories } from '../../models/accessories.model';
import * as fromApp from '../../store/app.reducer';
import * as AccessoriesCardsAction from './store/accessories-cards.actions';

@Component({
  selector: 'app-accessories-cards',
  templateUrl: './accessories-cards.component.html',
  styleUrls: ['./accessories-cards.component.css'],
})
export class AccessoriesCardsComponent implements OnInit {
  accessoriesList: Observable<Accessories[]> ;
  constructor(private store: Store<fromApp.AppState>, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(AccessoriesCardsAction.loadAccessories());
    this.accessoriesList =  this.store
      .select('accessories')
      .pipe(map((state) => state.accessoriesList));
  }

  onRouteCreate() {
    this.router.navigate(['/create-accessories']);
  }

  onDelete(id: string) {
    if (confirm('Are you sure you want to delete ?')) {
      this.store.dispatch(AccessoriesCardsAction.deleteAccessories({ id }));
    }
  }
}
