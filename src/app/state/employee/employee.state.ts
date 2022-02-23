import { Employee } from 'src/app/models/employee.model';


export interface EmployeeState {
  employees: Employee[];
}
export const initialState: EmployeeState = {
  employees: [
    {
      id:1,
      name:'vithal',
      email:'vithalbhovi@gmail.com',
      city:'Bangalore',
      state:'Karnataka'
    },
    {
      id:2,
      name:'Bhovi',
      email:'bhovi@gmail.com',
      city:'Belagavi',
      state:'Karnataka'
    }
  ],
};
