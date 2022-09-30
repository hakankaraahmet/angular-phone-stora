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
  })
);

export function IphoneCardsReducer(state: State | any, action: Action) {
  return _iphoneReducer(state, action);
}
