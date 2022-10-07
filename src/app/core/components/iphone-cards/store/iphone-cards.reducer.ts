import { Iphone } from '../../../models/iphone.model';
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

  on(IphoneCardsActions.addIphoneSuccess, (state, action) => {
    let iphone = { ...action.iphone };
    return {
      ...state,
      iphoneList: [...state.iphoneList, iphone],
    };
  }),

  on(IphoneCardsActions.deleteIphoneSuccess, (state, action) => {
    const updatedIphoneList = state.iphoneList.filter((iphone) => {
      return iphone.id !== action.id;
    });
    return {
      ...state,
      iphoneList: updatedIphoneList,
    };
  }),

  on(IphoneCardsActions.updateIphoneSuccess, (state, action) => {
    const updatedIphone = state.iphoneList.map((iphone) => {
      return action.iphone.id === iphone.id ? action.iphone : iphone
    });
    return {
      ...state,
      iphoneList:  updatedIphone
    };
  }),
);

export function IphoneCardsReducer(state: State | undefined, action: Action) {
  return _iphoneReducer(state, action);
}
