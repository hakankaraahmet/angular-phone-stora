import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { OffersService } from '../offers.service';
import {
  addOffer,
  addOfferSuccess,
  deleteOffer,
  deleteOfferSuccess,
  loadOffer,
  loadOfferSuccess,
  updateOffer,
  updateOfferSuccess,
} from './offers.actions';

@Injectable()
export class OffersEffects {
  constructor(
    private actions$: Actions,
    private offersService: OffersService
  ) {}

  loadOffers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadOffer),
      mergeMap((action) => {
        return this.offersService.getOffers().pipe(
          map((offers) => {
            console.log(offers);
            return loadOfferSuccess({ offers });
          })
        );
      })
    );
  });

  addOffer$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addOffer),
      mergeMap((action) => {
        return this.offersService.addOffer(action.offer).pipe(
          map((data) => {
            const offer = { ...action.offer, id: data.name };
            return addOfferSuccess({ offer });
          })
        );
      })
    );
  });

  deleteOffer$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteOffer),
      switchMap((action) => {
        return this.offersService.deleteOffer(action.id).pipe(
          map((data) => {
            return deleteOfferSuccess({ id: action.id });
          })
        );
      })
    );
  });

  updateOffer$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateOffer),
      switchMap((action) => {
        return this.offersService.updateOffer(action.offer).pipe(
          map((data) => {
            return updateOfferSuccess({ offer: action.offer });
          })
        );
      })
    );
  });
}
