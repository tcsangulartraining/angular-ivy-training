import { createReducer, on } from '@ngrx/store';
import { addEmployee } from './employee.actions';
import { initialState } from './employee.state';

export const _employeeReducer = createReducer(
  initialState,
  on(addEmployee, (state, action) => {
    let employee = {...action.employee}
    console.log("employeee====>", employee);
    return {
      ...state,
      employees: [...state.employees, employee]
    };
  }),
  // on(viewEmployee, (state) => {
  //   return {
  //     ...state,
  //   };
  // })
);

export function employeeReducer(state, action) {
  return _employeeReducer(state, action);
}
