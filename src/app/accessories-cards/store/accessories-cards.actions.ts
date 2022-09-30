import { createAction, props } from '@ngrx/store';
import { Accessories } from '../accessories.model';

//Loading 
export const loadAccessories = createAction('[Accessories] Load Accessories');

export const loadAccessoriesSuccess = createAction(
  '[Accessories] Load Accessories Success',
  props<{
    accessories: Accessories[];
  }>()
);

//Adding
export const addAccessories = createAction(
  '[Accessories] Add Accessories',
  props<{
    accessory: Accessories;
  }>()
);

export const addAccessoriesSuccess = createAction(
  '[Accessories] Add Accessories Success',
  props<{
    accessory: Accessories;
  }>()
);

//Deleting

export const deleteAccessories = createAction(
  '[Accessories] Delete Accessories',
  props<{
    id: string;
  }>()
);

export const deleteAccessoriesSuccess = createAction(
  '[Accessories] Delete Accessories Success',
  props<{
    id: string;
  }>()
);

//Updating

export const updateAccessories = createAction(
  '[Accessories] Update Accessories',
  props<{
    accessory: Accessories;
  }>()
);

export const updateAccessoriesSuccess = createAction(
  '[Accessories] Update Accessories Success',
  props<{
    accessory: Accessories;
  }>()
);
