import { Employee } from 'src/app/models/employee.model';


export interface EmployeeState {
  employees: Employee[];
}
export const initialState: EmployeeState = {
  employees: [
    {
      name:'vithal',
      email:'vithalbhovi@gmail.com',
      city:'Bangalore',
      state:'Karnataka'
    }
  ],
};
