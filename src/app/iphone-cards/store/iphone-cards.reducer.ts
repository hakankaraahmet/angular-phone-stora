import { Iphone } from '../iphone.model';
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

export function IphoneCardsReducer(
  state: State = initialState,
  action: any | IphoneCardsActions.IphoneCardsActions 
) {
  switch (action.type) {
    case IphoneCardsActions.ADD_IPHONE:
      return {
        ...state,
        iphoneList: [...state.iphoneList, action.payload],
      };
    case IphoneCardsActions.DELETE_IPHONE:
      return {
        ...state,
        iphoneList: state.iphoneList.filter((iphone, index) => {
          return index !== action.payload;
        }),
      };
    default:
      return state;
  }
}
