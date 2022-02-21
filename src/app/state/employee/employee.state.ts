import { Employee } from '../../shared/employee';

export interface EmployeeState {
  employee: Employee[];
}
export const initialState: EmployeeState = {
  employee: [],
};
