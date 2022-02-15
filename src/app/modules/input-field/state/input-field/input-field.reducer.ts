import { Action } from '@ngrx/store';
import * as UserActions from './input-field.action';
import { UserModel } from '../../models/user.model';

const InitialState: UserModel = {
  name: null
}

export function Reducers(state: UserModel[] = [InitialState], action: UserActions.Actions) {
  // console.log(state)
  switch (action.type) {
    case UserActions.AddUserConst:
      return [...state, action.data];

    default:
      return state;
  }
}