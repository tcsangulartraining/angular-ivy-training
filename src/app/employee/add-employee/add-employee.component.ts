import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Employee } from '../../models/employee.model';
import { addEmployee } from '../../state/employee/employee.actions';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeeForm:FormGroup;
  constructor(private store:Store<AppState>, private router:Router) { }

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      email: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      state: new FormControl(null, Validators.required),
    })
    
  }
  onSubmit(){
    if(!this.employeeForm.valid){
      return;
    }
    const employee:Employee ={
      id:this.employeeForm.value.id,
      name: this.employeeForm.value.name,
      email:this.employeeForm.value.email,
      city: this.employeeForm.value.city,
      state: this.employeeForm.value.state,
    }
    this.store.dispatch(addEmployee({employee}))
    //console.log(this.employeeForm.value);
  }
  onCancel(){
    this.router.navigate(['employee-list'])
  }
}
