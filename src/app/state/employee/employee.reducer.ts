import { createReducer, on } from '@ngrx/store';
import { addEmployee, deleteEmployee, updateEmployee } from './employee.actions';
import { initialState } from './employee.state';

export const _employeeReducer = createReducer(
  initialState,
  on(addEmployee, (state, action) => {
    let employee = {...action.employee}
    employee.id = state.employees.length+1;
    return {
      ...state,
      employees: [...state.employees, employee]
    };
  }),
  on(updateEmployee, (state, action) => {
    const updatedEmployee = state.employees.map(employee=>{
      return action.employee.id === employee.id? action.employee : employee
    })
    return {
      ...state,
      employees: updatedEmployee
    };
  }),
  on(deleteEmployee, (state, {id}) => {
    const updatedEmployee = state.employees.filter(employee =>{
      return employee.id !== id
    })
    return {
      ...state,
      employees: updatedEmployee
    };
  })
);

export function employeeReducer(state, action) {
  return _employeeReducer(state, action);
}
