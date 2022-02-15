import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StoreModule } from '@ngrx/store';
import { addEmployeeReducer } from './reducers/employee.reducer';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,
    StoreModule.forRoot({employee: addEmployeeReducer})
  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
