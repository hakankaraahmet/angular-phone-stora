import { Iphone } from '../iphone.model';
import { Action, createReducer, on } from '@ngrx/store';
import * as IphoneCardsActions from './iphone-cards.actions';

export interface State {
  iphoneList: Iphone[];
}

const initialState: State = {
  iphoneList: [
    new Iphone(
      'Iphone SE',
      14000,
      'https://cdn.cimri.io/image/1000x1000/appleiphonesegbinmpakllceptelefonu_232395062.jpg',
      'red',
      4.7,
      'Easy to use',
      'ZG011AQA',
      'SE 2020',
      0
    ),
    new Iphone(
      'Iphone SE',
      14000,
      'https://cdn.cimri.io/image/1000x1000/appleiphonesegbinmpakllceptelefonu_232395062.jpg',
      'red',
      4.7,
      'Easy to use',
      'ZG011AQA',
      'SE 2020',
      1
    ),
    new Iphone(
      'Iphone SE',
      14000,
      'https://cdn.cimri.io/image/1000x1000/appleiphonesegbinmpakllceptelefonu_232395062.jpg',
      'red',
      4.7,
      'Easy to use',
      'ZG011AQA',
      'SE 2020',
      2
    ),
    new Iphone(
      'Iphone SE',
      14000,
      'https://cdn.cimri.io/image/1000x1000/appleiphonesegbinmpakllceptelefonu_232395062.jpg',
      'red',
      4.7,
      'Easy to use',
      'ZG011AQA',
      'SE 2020',
      3
    ),
  ],
};

const _iphoneReducer = createReducer(
  initialState,
  on(
    IphoneCardsActions.addIphone,
    (state,action) => ({
      ...state,
      iphoneList: state.iphoneList.concat({...action.iphone})
    })
  ),

  on(
    IphoneCardsActions.deleteIphone,
    (state,action) => ({
      ...state,
      iphoneList: state.iphoneList.filter((_, index) => index !== action.index)
    })
  )
)

export function IphoneCardsReducer(state : State | any,action: Action){
  return _iphoneReducer(state,action)
}
