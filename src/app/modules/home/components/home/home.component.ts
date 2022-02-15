import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'home-component',
  templateUrl: `./home.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  @Input() name: string;
}
