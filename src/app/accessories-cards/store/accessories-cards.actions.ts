import { Action } from '@ngrx/store';
import { Accessories } from '../accessories.model';


export const ADD_ACCESSORIES = 'ADD_ACCESSORIES';
export const DELETE_ACCESSORIES = 'DELETE_ACCESSORIES';
export const UPDATE_ACCESSORIES = 'UPDATE_ACCESSORIES';

export class AddAccessories implements Action {
  readonly type = ADD_ACCESSORIES;
  constructor(public payload: Accessories) {}
}
export class DeleteAccessories implements Action {
  readonly type = DELETE_ACCESSORIES;
  constructor(public payload: Accessories) {}
}
export class UpdateAccessories implements Action {
  readonly type = UPDATE_ACCESSORIES;
  constructor(public payload: Accessories) {}
}

export type AccessoriesActions = AddAccessories | DeleteAccessories | UpdateAccessories;
