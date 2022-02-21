import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  MinLengthValidator,
} from '@angular/forms';
import { Store } from '@ngrx/store/src';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  constructor(private fb: FormBuilder, private store: Store) {}
  //employeeForm;
  employeeForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
  });
  ngOnInit() {}
  onSubmit() {
    console.log(this.employeeForm.value);
  }
}
