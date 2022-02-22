import { props,createAction } from '@ngrx/store';
import { Employee } from '../../models/employee.model';

export const ADD_EMPLOYEE_ACTION= "[Employee page] add employee";



export const addEmployee = createAction(ADD_EMPLOYEE_ACTION,
  props<{ employee: Employee }>()
);
// export const viewEmployee = createAction(
//   '[View Employee] View Employee Form Submitted'
// );
