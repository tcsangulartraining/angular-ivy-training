import { Employee } from './Employee/employee.model';
import { AppState } from './app.state';
import { Component, OnInit ,
  ComponentFactoryResolver,  
  ViewChild,  
  ElementRef,  
  ViewContainerRef,} from '@angular/core';
import { Store } from '@ngrx/store';
import { first, Observable } from 'rxjs';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_models';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  


  /*  employees: Observable<Employee[]>;

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
  } */

  currentUser: User;

  constructor(
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      (x) => (this.currentUser = x)
    );
  }
  
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
