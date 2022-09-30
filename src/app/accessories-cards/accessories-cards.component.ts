import { Component, OnInit } from '@angular/core';
import { Accessories } from './accessories.model';

@Component({
  selector: 'app-accessories-cards',
  templateUrl: './accessories-cards.component.html',
  styleUrls: ['./accessories-cards.component.css']
})
export class AccessoriesCardsComponent implements OnInit {
  accessoriesList : Accessories[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  onRouteCreate() {

  }

  onDelete() {

  }

}
