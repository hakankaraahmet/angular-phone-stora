import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { AccessoriesCardsService } from '../../../services/accessories.service';
import {
  addAccessories,
  addAccessoriesSuccess,
  deleteAccessories,
  deleteAccessoriesSuccess,
  loadAccessories,
  loadAccessoriesSuccess,
  updateAccessories,
  updateAccessoriesSuccess,
} from './accessories-cards.actions';

@Injectable()
export class AccessoriesCardsEffects {
  constructor(
    private actions$: Actions,
    private accessoriesCardsService: AccessoriesCardsService
  ) {}

  loadAccessories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadAccessories),
      mergeMap((action) => {
        return this.accessoriesCardsService.getAccessories().pipe(
          map((accessories) => {
            console.log(accessories);
            return loadAccessoriesSuccess({ accessories });
          })
        );
      })
    );
  });

  addAccessories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addAccessories),
      mergeMap((action) => {
        return this.accessoriesCardsService.addAccessory(action.accessory).pipe(
          map((data) => {
            const accessory = { ...action.accessory, id: data.name };
            return addAccessoriesSuccess({ accessory });
          })
        );
      })
    );
  });

  deleteAccessory$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteAccessories),
      switchMap((action) => {
        return this.accessoriesCardsService.deleteAccessory(action.id).pipe(
          map((data) => {
            return deleteAccessoriesSuccess({ id: action.id });
          })
        );
      })
    );
  });

  updateAccessories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateAccessories),
      switchMap((action) => {
        return this.accessoriesCardsService
          .updateAccessory(action.accessory)
          .pipe(
            map((data) => {
              return updateAccessoriesSuccess({ accessory: action.accessory });
            })
          );
      })
    );
  });
}
