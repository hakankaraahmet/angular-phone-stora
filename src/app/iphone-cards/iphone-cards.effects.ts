import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { IphoneCardsService } from './create-iphone/iphone-cards.service';
import { loadIphone, loadIphoneSuccess } from './store/iphone-cards.actions';

@Injectable()
export class IphoneCardsEffects {
  constructor(
    private actions$: Actions,
    private iphoneCardsService: IphoneCardsService
  ) {}

  loadIphones$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loadIphone),
        mergeMap((action) => {
          return this.iphoneCardsService.getIphones().pipe(
            map((iphones) => {
              console.log(iphones);
            return loadIphoneSuccess({iphones})
            })
          );
        })
      );
    },
    // { dispatch: false }
  );
}
