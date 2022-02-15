import { Action } from '@ngrx/store';
import { UserModel  } from '../../models/user.model';

export const AddUserConst = '[Add User] Component';

export class AddUser implements Action{
    readonly type= AddUserConst;
    constructor(public data: UserModel){}    
}

export type Actions = AddUser;
