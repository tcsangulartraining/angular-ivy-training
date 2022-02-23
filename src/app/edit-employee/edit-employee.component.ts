import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Employee } from '../models/employee.model';
import { getEmployeeById } from '../state/employee/employee.selector';
import { AppState } from '../store/app.state';
import * as selectors from '../state/employee/employee.selector';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Subscription} from 'rxjs'
import { updateEmployee } from '../state/employee/employee.actions';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit, OnDestroy {
  employee:Employee;
  employeeForm:FormGroup;
  employeeSubscription: Subscription;
  constructor(private route:ActivatedRoute, private store:Store<AppState>, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      
      const id = params.get('id');
      this.store.select(selectors.getEmployeeById(id)).subscribe((data)=>{
        this.employee=data;
        console.log(this.employee);
        this.createForm()
      })
    })
  }
  createForm(){
    this.employeeForm = new FormGroup({
      name: new FormControl(this.employee.name, [Validators.required, Validators.minLength(5)]),
      email:new FormControl(this.employee.email, [Validators.required]),
      city: new FormControl(this.employee.city, [Validators.required]),
      state: new FormControl(this.employee.state, [Validators.required]),
    });
  }
  onSubmit(){
    if(!this.employeeForm.valid){
      return;
    }

    const name = this.employeeForm.value.name;
    const email = this.employeeForm.value.email;
    const city = this.employeeForm.value.city;
    const state = this.employeeForm.value.state;
    const employee:Employee={
      id:this.employee.id,
      name, email,city,state
    }
    //Dispatch action
    this.store.dispatch(updateEmployee({employee}));
    this.router.navigate(['employee-list'])
  }
  ngOnDestroy(){
    if(this.employeeSubscription){
      this.employeeSubscription.unsubscribe();
    }
  }
}
