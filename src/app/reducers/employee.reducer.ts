import { Employee } from './../Employee/employee.model';
import { Action } from '@ngrx/store';

export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';

export function addEmployeeReducer(state: Employee[] = [], action) {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return [...state, action.payload];
    default:
      return state;
  }
}
