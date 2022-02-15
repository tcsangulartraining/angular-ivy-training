import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

// components
import { HomeComponent } from './components/home/home.component';

// containers
import { HomeContainer } from './containers/home/home.container';

// pages
import { HomeLandingPage } from './pages/landing-page/landing.page';

// modules
import { HomeRoutingModule } from './routes/home-routing.module';

@NgModule({
  declarations: [
    // components
    HomeComponent,
    // containers
    HomeContainer,
    // pages
    HomeLandingPage
  ],
  imports: [
    // modules
    HomeRoutingModule
    // ngrx store
    // StoreModule.forFeature('home', homeReducers),
    // ngrx effects
    // EffectsModule.forFeature([]),
  ],
  providers: [
    // services
    // pipes
  ],
  bootstrap: []
})
export class HomeModule {
  constructor(
  ) {
  }
}
