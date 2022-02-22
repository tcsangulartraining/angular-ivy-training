import { createAction, props } from '@ngrx/store/src/action_creator';

export const addEmployee = createAction(
  '[Add Employee] Add Employee Form Submitted'
);
export const viewEmployee = createAction(
  '[View Employee] View Employee Form Submitted'
);
