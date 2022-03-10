import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/services/auth.service';
import { loginStart, loginSuccess } from './auth.actions';
import { exhaustMap, map, mergeMap} from 'rxjs/operators'
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { setErrorMessage, setLoadingSpinner } from 'src/app/store/shared/shared.actions';
import { catchError } from 'rxjs/operators'; 
import { of } from 'rxjs'; 

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
                    this.store.dispatch(setErrorMessage({message:''}));
                    const user = this.authService.formatUser(data);
                    return loginSuccess({user});
                }),
                catchError(errResp=>{
                    console.log(errResp.error.error.message);
                    const errorMessage = this.authService.getErrorMessage(errResp.error.error.message)
                    this.store.dispatch(setLoadingSpinner({status:false}));
                    return of(setErrorMessage({message:errorMessage}));
                })
            ))
        )
    )
        
}