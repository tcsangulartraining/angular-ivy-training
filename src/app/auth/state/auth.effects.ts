import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/services/auth.service';
import { loginStart, loginSuccess } from './auth.actions';
import { exhaustMap, map, mergeMap} from 'rxjs/operators'
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { setLoadingSpinner } from 'src/app/store/shared/shared.actions';


@Injectable()

export class AuthEffects{
    constructor(private actions$:Actions, private authService:AuthService, private store:Store<AppState>){}
    
    login$ = createEffect(()=>
        this.actions$.pipe(
            ofType(loginStart),
            mergeMap((action: { email: string; password: string; })=>this.authService.login(action.email, action.password)
            .pipe(
                map((data)=>{
                    this.store.dispatch(setLoadingSpinner({status:false}));
                    const user = this.authService.formatUser(data);
                    return loginSuccess({user});
                })
            ))
        )
    )
        
}