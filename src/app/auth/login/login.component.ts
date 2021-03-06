import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { getMatFormFieldMissingControlError } from '@angular/material/form-field';
import { AuthService } from '../auth.service';
import {Subject} from 'rxjs/Subject'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
   loginForm : FormGroup;
  

  constructor(private authService:AuthService) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      email: new FormControl('', {validators: [Validators.required, Validators.email]}),
      password: new FormControl('', {validators:[Validators.required]})
    });
  }

  onSubmit(){
  console.log(this.loginForm);

  this.authService.login({
    email: this.loginForm.value.email,
    passsword: this.loginForm.value.password
  })
  }

}
