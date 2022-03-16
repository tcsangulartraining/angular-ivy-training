import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthResponseData } from '../models/authResponseData.model';
import { Observable } from 'rxjs'
import { User } from '../models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { autoLogout } from '../auth/state/auth.actions';
@Injectable({
    providedIn:'root'
})
export class AuthService{
    timeoutInterval:any;
    
    getUserInLocalStorage() {
        const userDataString = localStorage.getItem('userData');
        if(userDataString){
            const  userData =JSON.parse(userDataString);
            const expirationDate= new Date(userData.expireDate)
            const user = new User(userData.email, userData.token, userData.localId,expirationDate);
            this.runTimeoutInterval(user);
            return user;
        }
        return null
    }
    setUserInLocalStorage(user:User) {
        localStorage.setItem('userData', JSON.stringify(user));
        this.runTimeoutInterval(user)
        
    }
    runTimeoutInterval(user: User) {
        
        const todaysDate = new Date().getTime();
        const expirationDate = user.expireDate.getTime();
        const timeInterval = expirationDate-todaysDate;

        this.timeoutInterval = setTimeout(()=>{
            //logout functionality to get the refresh token
            this.store.dispatch(autoLogout());
        }, timeInterval)
    }
    constructor(private http:HttpClient, private store:Store<AppState>){}

    login(email:string, password:string):Observable<AuthResponseData>{
        return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIRBASE_KEY}`,{email, password, returnSecureToken:true} )
    }
    signUp(email:string, password:string):Observable<AuthResponseData>{
        return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.FIRBASE_KEY}`,{email, password, returnSecureToken:true} )
    }
    formatUser(data:AuthResponseData){
        const expirationDate = new Date(new Date().getTime() + +data.expiresIn *1000)
        const user = new User(data.email, data.idToken, data.localId, expirationDate);
        return user;
    }
    getErrorMessage(message:string){
        switch(message){
            case 'EMAIL_NOT_FOUND':
                return 'Email not found';
                case 'INVALID_PASSWORD':
                    return 'Inalid Password'
                    case 'EMAIL_EXISTS':
                        return 'Email already exists'
                    default:
                        return 'Unknown error occured. Please try again.'
        }
    }
    logout() {
        localStorage.removeItem('userData');
        if(this.timeoutInterval){
            clearTimeout(this.timeoutInterval);
            this.timeoutInterval = null;
        }
    }
}