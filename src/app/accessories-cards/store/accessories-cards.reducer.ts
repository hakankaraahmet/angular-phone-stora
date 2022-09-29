import { Accessories } from '../accessories.model';

import * as AccessoriesActions from './accessories-cards.actions';

export interface State {
  accessoriesList: Accessories[];
}

const initialState: State = {
  accessoriesList: [],
};

export function AccessoriesReducer(
  state: State = initialState,
  action: AccessoriesActions.AccessoriesActions
) {}
