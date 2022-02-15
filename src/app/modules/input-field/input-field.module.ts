import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

// components
// import { InputFieldComponent } from './components/input-field/input-field.component';

// containers
import { InputFieldContainer } from './containers/input-field/input-field.container';

// pages
import { InputFieldLandingPage } from './pages/landing-page/landing.page';

// modules
import { InputFieldRoutingModule } from './routes/input-field-routing.module';

// Reducers
import { Reducers } from './state/input-field/input-field.reducer';

@NgModule({
  declarations: [
    // components
    // InputFieldComponent,
    // containers
    InputFieldContainer,
    // pages
    InputFieldLandingPage,
  ],
  imports: [
    // modules
    InputFieldRoutingModule,
    // ngrx store
    StoreModule.forRoot({
      users : Reducers
    }) 
    // ngrx effects
    // EffectsModule.forFeature([]),
  ],
  providers: [
    // services
    // pipes
  ],
  bootstrap: [],
})
export class InputFieldModule {
  constructor() {}
}
