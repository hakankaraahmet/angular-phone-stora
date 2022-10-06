import { Offer } from '../offers.model';
import { Action, createReducer, on } from '@ngrx/store';
import * as OfferActions from './offers.actions';

export interface State {
  offersList: Offer[];
}

const initialState: State = {
  offersList: [],
};

const _OfferReducer = createReducer(
  initialState,
  on(OfferActions.loadOfferSuccess, (state, action) => ({
    ...state,
    offersList: action.offers,
  })),

  on(OfferActions.addOfferSuccess, (state, action) => {
    let offer = { ...action.offer };
    return {
      ...state,
      offersList: [...state.offersList, offer],
    };
  }),

  on(OfferActions.deleteOfferSuccess, (state, action) => {
    const updatedOffersList = state.offersList.filter((offer) => {
      return offer.id !== action.id;
    });
    return {
      ...state,
      offersList: updatedOffersList,
    };
  }),

  on(OfferActions.updateOfferSuccess, (state, action) => {
    const updatedOffer = state.offersList.map((offer) => {
      return action.offer.id === offer.id ? action.offer : offer
    });
    return {
      ...state,
      offersList:  updatedOffer
    };
  }),
);

export function OfferReducer(state: State | any, action: Action) {
  return _OfferReducer(state, action);
}
