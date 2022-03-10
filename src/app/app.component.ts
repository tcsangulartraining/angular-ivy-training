import { OnInit } from '@angular/core';
import { Component, VERSION } from '@angular/core';
import { Store } from '@ngrx/store';
import {Observable} from 'rxjs'
import { AppState } from './store/app.state';
import { getErrorMessage, getLoading } from './store/shared/shared.selector';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  showLoading: Observable<boolean>
  errorMessage: Observable<string>
  constructor(private store:Store<AppState>){}

  ngOnInit(){
    this.showLoading = this.store.select(getLoading);
    this.errorMessage = this.store.select(getErrorMessage);
  }
}
