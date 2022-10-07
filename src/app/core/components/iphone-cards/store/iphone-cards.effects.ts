import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { IphoneCardsService } from '../../../services/iphone.service';
import {
  addIphone,
  addIphoneSuccess,
  deleteIphone,
  deleteIphoneSuccess,
  loadIphone,
  loadIphoneSuccess,
  updateIphone,
  updateIphoneSuccess,
} from './iphone-cards.actions';

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

  deleteIphones$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteIphone),
      switchMap((action) => {
        return this.iphoneCardsService.deleteIphone(action.id).pipe(
          map((data) => {
            return deleteIphoneSuccess({ id: action.id });
          })
        );
      })
    );
  });

  updateIphones$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateIphone),
      switchMap((action) => {
        return this.iphoneCardsService.updateIphone(action.iphone).pipe(
          map((data) => {
            return updateIphoneSuccess({ iphone: action.iphone });
          })
        );
      })
    );
  });
}
