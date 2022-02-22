import { employeeReducer } from '../state/employee/employee.reducer';
import { EmployeeState } from '../state/employee/employee.state';

export interface AppState{
    employees:EmployeeState
}

export const appReducer ={
    Employees:employeeReducer
}