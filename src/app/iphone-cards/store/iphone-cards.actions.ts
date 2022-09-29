import { createAction, props } from '@ngrx/store';
import { Iphone } from '../iphone.model';

export const addIphone = createAction(
  '[Iphone] Add Iphone',
  props<{
    iphone: Iphone
  }>()
);

export const deleteIphone = createAction(
  '[Iphone] Delete Iphone',
  props<{
    index: number
  }>()
);


