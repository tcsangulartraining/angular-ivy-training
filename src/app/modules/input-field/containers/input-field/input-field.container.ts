import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserModel } from '../../models/user.model';

import * as UserActions from '../../state/input-field/input-field.action';

@Component({
  selector: 'input-field-container',
  templateUrl: './input-field.container.html',
})
export class InputFieldContainer {
  name: string;
  users$: Observable<UserModel[]>;

  constructor(private store: Store<UserModel>) {
    this.users$ = this.store.pipe(select('users'));
    this.users$.subscribe((res) => console.log(res));
  }

  addUser() {
    const data = { name: this.name };
    // console.log(data)
    this.store.dispatch(new UserActions.AddUser(data));
  }
}
