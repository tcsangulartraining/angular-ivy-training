import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {Observable} from 'rxjs';
import { Employee } from '../../models/employee.model';
import { deleteEmployee } from '../../state/employee/employee.actions';
import { getEmployees } from '../../state/employee/employee.selector'
import { AppState } from '../../store/app.state';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees:Observable<Employee[]>
  constructor(private store: Store<AppState>) {}
  ngOnInit() {
    this.employees = this.store.select(getEmployees);
    console.log(this.employees);
  }
  onDelete(id:number){
    if(confirm("Areyou sure want to delete")){
      //console.log("Delete the post");
      this.store.dispatch(deleteEmployee({id}))
    }
  }
}
