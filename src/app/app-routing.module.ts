import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes=[
    {
        path:'', component:HomeComponent
    },
    {
        path:'employee-list', component:EmployeeListComponent,
        children:[
            {path:'add', component:AddEmployeeComponent},
            {path:'edit/:id', component:EditEmployeeComponent},
        ]
    }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}