import { Component, Input } from '@angular/core';
import { UserModel } from '../../models/user.model';

@Component({
    selector: 'input-field-component',
    templateUrl: './input-field.component.html',
})
export class InputFieldComponent {
    @Input() users: UserModel[];
}
