import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'home-container',
  templateUrl: `./home.container.html`,
})
export class HomeContainer {
  name = 'Angular ' + VERSION.full + ' from HomeContainer';
}
