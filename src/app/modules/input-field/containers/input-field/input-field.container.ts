import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserModel } from '../../models/user.model';

import * as UserActions from '../../state/input-field/input-field.action';

@Component({
  selector: 'input-field-container',
  templateUrl: './input-field.container.html',
})
export class InputFieldContainer implements OnInit {
  userDataForm:FormGroup  ;
  users$: Observable<UserModel[]>;

  constructor(
    private store: Store<any>
  ) {}

  ngOnInit() {
    this.userDataForm =  new FormGroup({
      username: new FormControl('')
    });
    this.users$ = this.store.pipe(select('users'));
    this.users$.pipe(tap(res => 
      console.log(res)
    )).subscribe();
  }

  addUser() {
    const data = { name: this.userDataForm.get('username').value };
    this.store.dispatch(new UserActions.AddUser(data));
    this.userDataForm.get('username').setValue('');
  }
}
