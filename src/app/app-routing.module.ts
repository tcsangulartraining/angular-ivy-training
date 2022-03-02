import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes=[
    {
        path:'', component:HomeComponent
    },
    {
        path:'employee-list',
        loadChildren: ()=> import('./employee/employee.module').then((m) => m.EmployeeModule)
    }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}