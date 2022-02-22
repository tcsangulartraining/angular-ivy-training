import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/employee';
import { viewEmployee } from '../state/employee/employee.actions';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css'],
})
export class EmployeeViewComponent implements OnInit {
  constructor(private store: Store<{ employee: { employee: Employee } }>) {}
  employee: Employee;
  ngOnInit() {
    this.store.dispatch(viewEmployee());
  }
}
