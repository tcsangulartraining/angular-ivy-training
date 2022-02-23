import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first, Observable } from 'rxjs';
import { Employee } from '../Employee/employee.model';
import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit, OnDestroy {
    employees: Observable<Employee[]>;
    currentUser: User;
    currentUserSubscription: Subscription;
    users: User[] = [];
    model: any = {};
    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private store: Store<AppState>
    ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
        this.employees = this.store.select((state) => state.employee);
        console.log(this.employees)
    }

    ngOnInit() {
        this.loadAllUsers();
    }
    

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
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllUsers()
        });
    }

    private loadAllUsers() {
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
    }
}