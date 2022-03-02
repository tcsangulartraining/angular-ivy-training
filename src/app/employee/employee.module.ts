import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { employeeReducer } from '../state/employee/employee.reducer';
import { EMPLOYEES_STATE_NAME } from '../state/employee/employee.selector';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes:Routes = [
    {
        path:'', component:EmployeeListComponent,
        children:[
            {path:'add', component:AddEmployeeComponent},
            {path:'edit/:id', component:EditEmployeeComponent},
        ],
    }
];

@NgModule({
    imports:[CommonModule,ReactiveFormsModule, RouterModule.forChild(routes), StoreModule.forFeature(EMPLOYEES_STATE_NAME, employeeReducer)],
    declarations:[EmployeeListComponent, AddEmployeeComponent,EditEmployeeComponent]
})
export class EmployeeModule{}