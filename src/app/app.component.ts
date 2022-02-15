import { Employee } from './Employee/employee.model';
import { AppState } from './app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { first, Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  employees: Observable<Employee[]>;

  constructor(private store: Store<AppState>) {
    this.employees = this.store.select((state) => state.employee);
  }

 
  ngOnInit() {}
  model: any = {};

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
    this.store.dispatch({
      type: 'ADD_EMPLOYEE',
      payload: <Employee>{
        firstName:this.model.firstName,
        lastName:this.model.lastName,
        email: this.model.email
      },
    });
  }
}
