import { createAction, props } from '@ngrx/store/src/action_creator';
import { Employee } from '../../shared/employee';

export const addEmployee = createAction(
  '[Add Employee] Add Employee Form Submitted',
  props<{ employee: Employee }>()
);
export const viewEmployee = createAction(
  '[View Employee] View Employee Form Submitted',
  props<{ employee: Employee }>()
);
