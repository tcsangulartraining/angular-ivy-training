import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/services/auth.service';
import { loginStart, loginSuccess } from './auth.actions';
import { exhaustMap, map, mergeMap} from 'rxjs/operators'


@Injectable()

export class AuthEffects{
    constructor(private actions$:Actions, private authService:AuthService){}
    
    login$ = createEffect(()=>
        this.actions$.pipe(
            ofType(loginStart),
            mergeMap((action: { email: string; password: string; })=>this.authService.login(action.email, action.password)
            .pipe(
                map(data=>{return loginSuccess();})
            ))
        )
    )
        
}