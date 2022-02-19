import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
  maxDate;
  minDate;
  ngOnInit(): void {
     
    this.maxDate  = new Date();
    this.minDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18)
    this.minDate.setFullYear(this.minDate.getFullYear() - 100);
    
    
  }


  onSubmit(form :NgForm){



  }

}
