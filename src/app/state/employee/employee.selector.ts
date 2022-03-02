import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EmployeeState } from './employee.state';
export const EMPLOYEES_STATE_NAME = "Employees";
const getEmployeeState = createFeatureSelector<EmployeeState>(EMPLOYEES_STATE_NAME);
export const getEmployees = createSelector(getEmployeeState, (state)=>{
    //console.log("Employees data==============>",state.employees);
    return state.employees;
})

export const getEmployeeById = (id)=>createSelector(getEmployeeState, (state)=>{
    return state.employees.find((employee)=>{
        return (employee.id).toString()===id;
    })
})
