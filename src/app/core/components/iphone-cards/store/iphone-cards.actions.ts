import { createAction, props } from '@ngrx/store';
import { Iphone } from '../../../models/iphone.model';

//Loading
export const loadIphone = createAction('[Iphone] Load Iphone');

export const loadIphoneSuccess = createAction(
  '[Iphone] Load Iphone Success',
  props<{
    iphones: Iphone[];
  }>()
);

//Adding
export const addIphone = createAction(
  '[Iphone] Add Iphone',
  props<{
    iphone: Iphone;
  }>()
);

export const addIphoneSuccess = createAction(
  '[Iphone] Add Iphone Success',
  props<{
    iphone: Iphone;
  }>()
);

//Deleting

export const deleteIphone = createAction(
  '[Iphone] Delete Iphone',
  props<{
    id: string;
  }>()
);

export const deleteIphoneSuccess = createAction(
  '[Iphone] Delete Iphone Success',
  props<{
    id: string;
  }>()
);

//Updating

export const updateIphone = createAction(
  '[Iphone] Update Iphone',
  props<{
    iphone: Iphone;
  }>()
);

export const updateIphoneSuccess = createAction(
  '[Iphone] Update Iphone Success',
  props<{
    iphone: Iphone;
  }>()
);
