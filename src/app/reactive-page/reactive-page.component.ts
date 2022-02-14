import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  MinLengthValidator,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-page',
  templateUrl: './reactive-page.component.html',
  styleUrls: ['./reactive-page.component.css'],
})
export class ReactivePageComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  registrationForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', Validators.required],
    password: ['', Validators.required],
    city: ['', Validators.required],
  });

  ngOnInit() {}
  onSubmit() {
    console.log(this.registrationForm.value);
  }
}
