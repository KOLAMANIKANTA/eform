import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { UsernameValidator } from './validators/UsernameValidator';
@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {
  public City:string[] = ['Hyderbad' , 'Pune' , 'Banglore' , 'Delhi'];
  isSubmitted = false;
  isEmpUpdate: boolean = false;
  
 
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }
  public form = this.formBuilder.group({
    username: ['', [UsernameValidator.regExpValidator]],
    email : ['', [Validators.required, Validators.email]],
    password : ['', [Validators.required, Validators.minLength(5)]],
    body: ['', [Validators.required]],
    city: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    tc: ['', [Validators.requiredTrue]]
  
  })
  
  

  public getUsername(){
    return this.form.get('username');
  }
  public getEmail(){
    return this.form.get('email');
  }

  public getPassword(){
    return this.form.get('password');
  }
  
  
  public getCity(){
    return this.form.get('city');
  }
  
  public getGender(){
    return this.form.get('gender');
  }

  public getBody(){
    return this.form.get('body');
  }
  
  
  get f() {
    return this.form.controls;
  }

  resetForm(form: any) {
    form.reset();
  }
  
  
  onSubmit(form:any) {
    this.isSubmitted = true;
    if (!this.form.valid) {
      return false;
    } else {
      console.log(JSON.stringify(this.form.value))
      form.reset();
    }
  }  

}
