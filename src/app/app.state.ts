import { Employee } from './Employee/employee.model';
export interface AppState {
  readonly employee: Employee[];
}
