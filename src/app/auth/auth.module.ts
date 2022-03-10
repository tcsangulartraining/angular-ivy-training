import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule} from '@ngrx/effects';
import { LoginComponent } from './login/login.component';
import { AuthEffects } from './state/auth.effects';
import { SignupComponent } from './signup/signup.component';

const routes: Routes=[
    {path:'', children:[
        {path:'',redirectTo:'login'},
        {path:'login', component:LoginComponent},
        {path:'signup', component:SignupComponent}
    ]}
]
@NgModule({
    imports:[
        CommonModule, 
        FormsModule,ReactiveFormsModule,
        EffectsModule.forFeature([AuthEffects]),
        RouterModule.forChild(routes)
    ],
    declarations:[LoginComponent, SignupComponent]
})
export class AuthModule{}