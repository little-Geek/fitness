import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { AuthService} from '../auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private authService:AuthService) { }
  maxDate;
  minDate;
  ngOnInit(): void {
     
    this.maxDate  = new Date();
    this.minDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18)
    this.minDate.setFullYear(this.minDate.getFullYear() - 100);
    
    
  }


  onSubmit(form :NgForm){

this.authService.registerUser({
       email: form.value.email,
       passsword: form.value.password
});

  }

}
