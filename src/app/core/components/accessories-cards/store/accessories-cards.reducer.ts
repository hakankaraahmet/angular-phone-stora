import { Accessories } from '../accessories.model';
import { Action, createReducer, on } from '@ngrx/store';
import * as AccessoriesCardsActions from './accessories-cards.actions';

export interface State {
  accessoriesList: Accessories[];
}

const initialState: State = {
  accessoriesList: [],
};

const _accessoriesReducer = createReducer(
  initialState,
  on(AccessoriesCardsActions.loadAccessoriesSuccess, (state, action) => ({
    ...state,
    accessoriesList: action.accessories,
  })),

  on(AccessoriesCardsActions.addAccessoriesSuccess, (state, action) => {
    let accessory = { ...action.accessory };
    return {
      ...state,
      accessoriesList: [...state.accessoriesList, accessory],
    };
  }),

  on(AccessoriesCardsActions.deleteAccessoriesSuccess, (state, action) => {
    const updatedAccessoriesList = state.accessoriesList.filter((accessory) => {
      return accessory.id !== action.id;
    });
    return {
      ...state,
      accessoriesList: updatedAccessoriesList,
    };
  }),

  on(AccessoriesCardsActions.updateAccessoriesSuccess, (state, action) => {
    const updatedAccessoriesList = state.accessoriesList.map((accessory) => {
      return action.accessory.id === accessory.id ? action.accessory : accessory
    });
    return {
      ...state,
      accessoriesList:  updatedAccessoriesList
    };
  }),
);

export function AccessoriesCardsReducer(state: State | any, action: Action) {
  return _accessoriesReducer(state, action);
}
