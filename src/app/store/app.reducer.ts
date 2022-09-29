import { ActionReducerMap } from "@ngrx/store";

import * as fromIphone from "../iphone-cards/store/iphone-cards.reducer"
// import * as fromAccessories from "../accessories-cards/store/accessories-cards.reducer"
// import * as fromOffers from "../offers/store/offers.reducer"

export interface AppState {
    iphone: fromIphone.State ;
    // accessories: fromAccessories.State ;
    // offers: fromOffers.State ;
}

export const appReducer : ActionReducerMap<AppState> = {
    iphone : fromIphone.IphoneCardsReducer,
    // accessories: fromAccessories.AccessoriesReducer,
    // offers: fromOffers.OffersReducer
}