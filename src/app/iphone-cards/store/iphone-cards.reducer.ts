import { Iphone } from '../iphone.model';
import { Action, createReducer, on } from '@ngrx/store';
import * as IphoneCardsActions from './iphone-cards.actions';

export interface State {
  iphoneList: Iphone[];
}

const initialState: State = {
  iphoneList: [],
};

const _iphoneReducer = createReducer(
  initialState,
  on(IphoneCardsActions.loadIphoneSuccess, (state, action) => ({
    ...state,
    iphoneList: action.iphones,
  })),

  on(IphoneCardsActions.addIphone, (state, action) => ({
    ...state,
    iphoneList: state.iphoneList.concat({ ...action.iphone }),
  })),

  on(IphoneCardsActions.deleteIphone, (state, action) => ({
    ...state,
    iphoneList: state.iphoneList.filter((_, index) => index !== action.index),
  }))
);

export function IphoneCardsReducer(state: State | any, action: Action) {
  return _iphoneReducer(state, action);
}
