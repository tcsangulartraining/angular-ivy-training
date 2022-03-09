import {
  Component,
  OnInit,
  OnDestroy,
  ComponentFactoryResolver,
  ViewChild,
  ElementRef,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { first, Observable } from 'rxjs';
import { Employee } from '../Employee/employee.model';
import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { DynamicComponent } from '../dynamic/dynamic.component';
@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;
  employees: Observable<Employee[]>;
  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];
  model: any = {};
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private store: Store<AppState>
  ) {
    this.currentUserSubscription =
      this.authenticationService.currentUser.subscribe((user) => {
        this.currentUser = user;
      });
    this.employees = this.store.select((state) => state.employee);
    console.log(this.employees);
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
    this.store.dispatch({
      type: 'ADD_EMPLOYEE',
      payload: <Employee>{
        firstName: this.model.firstName,
        lastName: this.model.lastName,
        email: this.model.email,
      },
    });
    if (this.employees != undefined) {
      this.add();
    }
  }
  add(): void {
    // create the component factory
    const dynamicComponentFactory =
      this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);
    // add the component to the view
    const componentRef = this.container.createComponent(
      dynamicComponentFactory
    );
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  deleteUser(id: number) {
    this.userService
      .delete(id)
      .pipe(first())
      .subscribe(() => {
        this.loadAllUsers();
      });
  }

  private loadAllUsers() {
    this.userService
      .getAll()
      .pipe(first())
      .subscribe((users) => {
        this.users = users;
      });
  }
}
