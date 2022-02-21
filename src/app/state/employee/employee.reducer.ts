import { initialState, EmployeeState } from './employee.state';

export const _employeeReducer = createReducer(
  initialState,
  on(addEmployee, (state) => {
    return {
      ...state,
      employee: state.employee,
    };
  }),
  on(viewEmployee, (state) => {
    return {
      ...state,
    };
  })
);

export function employeeReducer(state, action) {
  return _employeeReducer(state, action);
}