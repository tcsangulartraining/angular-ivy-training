import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Employee } from '../Employee/employee.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
@Component({
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css'],
})
export class DynamicComponent {
  employees: Observable<Employee[]>;

  constructor(private store: Store<AppState>) {
    this.employees = this.store.select((state) => state.employee);
    console.log(this.employees);
  }
}
