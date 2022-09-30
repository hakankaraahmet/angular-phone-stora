import { createAction, props } from '@ngrx/store';
import { Iphone } from '../iphone.model';

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

export const deleteIphone = createAction(
  '[Iphone] Delete Iphone',
  props<{
    index: number;
  }>()
);
