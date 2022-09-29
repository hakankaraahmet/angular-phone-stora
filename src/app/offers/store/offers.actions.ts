import { Action } from '@ngrx/store';
import { Offers } from '../offers.model';

export const ADD_OFFER = 'ADD_OFFER';
export const DELETE_OFFER = 'DELETE_OFFER';
export const UPDATE_OFFER = 'UPDATE_OFFER';

export class AddOffer implements Action {
  readonly type = ADD_OFFER;
  constructor(public payload: Offers) {}
}
export class DeleteOffer implements Action {
  readonly type = DELETE_OFFER;
  constructor(public payload: Offers) {}
}
export class UpdateOffer implements Action {
  readonly type = UPDATE_OFFER;
  constructor(public payload: Offers) {}
}

export type OfferActions = AddOffer | DeleteOffer | UpdateOffer;
