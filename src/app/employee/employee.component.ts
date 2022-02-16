import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  MinLengthValidator,
} from '@angular/forms';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
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
