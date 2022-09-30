import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { IphoneCardsService } from './create-iphone/iphone-cards.service';
import {
  addIphone,
  addIphoneSuccess,
  loadIphone,
  loadIphoneSuccess,
} from './store/iphone-cards.actions';

@Injectable()
export class IphoneCardsEffects {
  constructor(
    private actions$: Actions,
    private iphoneCardsService: IphoneCardsService
  ) {}

  loadIphones$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadIphone),
      mergeMap((action) => {
        return this.iphoneCardsService.getIphones().pipe(
          map((iphones) => {
            console.log(iphones);
            return loadIphoneSuccess({ iphones });
          })
        );
      })
    );
  });

  addIphones$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addIphone),
      mergeMap((action) => {
        return this.iphoneCardsService.addIphone(action.iphone).pipe(
          map((data) => {
            const iphone = { ...action.iphone, id: data.name };
            return addIphoneSuccess({ iphone });
          })
        );
      })
    );
  });
}
