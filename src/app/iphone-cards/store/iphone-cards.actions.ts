import { Action } from '@ngrx/store';
import { Iphone } from '../iphone.model';

export const ADD_IPHONE = '[Iphone] Add Iphone';
export const DELETE_IPHONE = '[Iphone] Delete Iphone';
export const UPDATE_IPHONE = '[Iphone] Update Iphone';

export class AddIphone implements Action  {
  readonly type = ADD_IPHONE;
  constructor(public payload: Iphone) {}
}
export class DeleteIphone implements Action  {
  readonly type = DELETE_IPHONE;
  constructor(public payload: number) {}
}
// export class UpdateIphone implements Action {
//   readonly type = UPDATE_IPHONE;
//   constructor(public payload: { index: number; newIphone: Iphone }) {}
// }

export type IphoneCardsActions = AddIphone | DeleteIphone 
// | UpdateIphone;
