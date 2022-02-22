import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import {Observable} from 'rxjs';
import { getEmployees } from '../state/employee/employee.selector';
import { Employee } from '../models/employee.model';
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
}
