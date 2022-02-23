import { props,createAction } from '@ngrx/store';
import { Employee } from '../../models/employee.model';

export const ADD_EMPLOYEE_ACTION= "[Employee page] add employee";
export const UPDATE_EMPLOYEE_ACTION = "[Employee page] update employee"
export const DELETE_EMPLOYEE_ACTION = "[Employee page] delete employee"


export const addEmployee = createAction(ADD_EMPLOYEE_ACTION,
  props<{ employee: Employee }>()
);
export const updateEmployee = createAction(UPDATE_EMPLOYEE_ACTION,
  props<{ employee: Employee }>()
);
export const deleteEmployee = createAction(DELETE_EMPLOYEE_ACTION,
  props<{ id: number }>()
);
