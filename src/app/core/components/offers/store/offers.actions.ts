import { createAction, props } from '@ngrx/store';
import { Offer } from '../offers.model';

//Loading
export const loadOffer = createAction('[Offer] Load Offer');

export const loadOfferSuccess = createAction(
  '[Offer] Load Offer Success',
  props<{
    offers: Offer[];
  }>()
);

//Adding
export const addOffer = createAction(
  '[Offer] Add Offer',
  props<{
    offer: Offer;
  }>()
);

export const addOfferSuccess = createAction(
  '[Offer] Add Offer Success',
  props<{
    offer: Offer;
  }>()
);

//Deleting

export const deleteOffer = createAction(
  '[Offer] Delete Offer',
  props<{
    id: string;
  }>()
);

export const deleteOfferSuccess = createAction(
  '[Offer] Delete Offer Success',
  props<{
    id: string;
  }>()
);

//Updating

export const updateOffer = createAction(
  '[Offer] Update Offer',
  props<{
    offer: Offer;
  }>()
);

export const updateOfferSuccess = createAction(
  '[Offer] Update Offer Success',
  props<{
    offer: Offer;
  }>()
);
