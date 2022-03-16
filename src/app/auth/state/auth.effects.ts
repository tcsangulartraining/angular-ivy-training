import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/services/auth.service';
import { autoLogin, autoLogout, loginStart, loginSuccess, signupStart, signupSuccess } from './auth.actions';
import { exhaustMap, map, mergeMap, tap} from 'rxjs/operators'
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { setErrorMessage, setLoadingSpinner } from 'src/app/store/shared/shared.actions';
import { catchError } from 'rxjs/operators'; 
import { of } from 'rxjs'; 
import { Router } from '@angular/router';

@Injectable()

export class AuthEffects{
    timeoutInterval:any;
    constructor(private actions$:Actions, 
        private authService:AuthService, 
        private store:Store<AppState>,
        private router:Router){}
    
    login$ = createEffect(()=>
        this.actions$.pipe(
            ofType(loginStart),
            mergeMap((action: { email: string; password: string; })=>this.authService.login(action.email, action.password)
            .pipe(
                map((data)=>{
                    this.store.dispatch(setLoadingSpinner({status:false}));
                    this.store.dispatch(setErrorMessage({message:''}));
                    const user = this.authService.formatUser(data);
                    this.authService.setUserInLocalStorage(user)
                    return loginSuccess({user});
                }),
                catchError(errResp=>{
                    const errorMessage = this.authService.getErrorMessage(errResp.error.error.message)
                    this.store.dispatch(setLoadingSpinner({status:false}));
                    return of(setErrorMessage({message:errorMessage}));
                })
            ))
        )
    )

    loginRedirect$ = createEffect(()=>{
        return this.actions$.pipe(
            ofType(...[loginSuccess, signupSuccess]),
            tap((action)=>{
                this.store.dispatch(setErrorMessage({message:''}))
                this.router.navigate(['/'])
            })
        )
        }, {dispatch:false}
    )
        
    signUp$ = createEffect(()=>
        this.actions$.pipe(
            ofType(signupStart),
            mergeMap((action: { email: string; password: string; })=>this.authService.signUp(action.email, action.password)
            .pipe(
                map((data)=>{
                    this.store.dispatch(setLoadingSpinner({status:false}));
                    this.store.dispatch(setErrorMessage({message:''}));
                    const user = this.authService.formatUser(data);
                    this.authService.setUserInLocalStorage(user)
                    return signupSuccess({user});
                }),
                catchError(errResp=>{
                    const errorMessage = this.authService.getErrorMessage(errResp.error.error.message)
                    this.store.dispatch(setLoadingSpinner({status:false}));
                    return of(setErrorMessage({message:errorMessage}));
                })
            )
            )
        )
    )
    autoLogin$ = createEffect(()=>{
        return this.actions$.pipe(
            ofType(autoLogin),
            mergeMap((action)=>{
                const user = this.authService.getUserInLocalStorage();
                return of(loginSuccess({user}));
            })
        )
    })
    logout$ = createEffect(()=>{
        return this.actions$.pipe(
            ofType(autoLogout),
            map((action)=>{
                this.authService.logout();
                this.router.navigate(['auth'])
            })
        )
    }, {dispatch:false})
}