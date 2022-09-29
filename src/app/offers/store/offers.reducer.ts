import { Offers } from '../offers.model';

import * as OfferActions from './offers.actions';

export interface State {
  offerList: Offers[];
}

const initialState: State = {
  offerList: [],
};

export function OffersReducer(
  state: State = initialState,
  action: OfferActions.OfferActions
) {}
