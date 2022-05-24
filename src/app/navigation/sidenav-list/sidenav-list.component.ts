import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import {Subject, Subscription} from 'rxjs'
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

  @Output() closeSidenav = new EventEmitter<void>();
 isAuth = false
 authSubsciption: Subscription
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authSubsciption =   this.authService.authChange.subscribe(authStatus =>{
      this.isAuth = authStatus
    });
  }
  onClose(){
       this.closeSidenav.emit();
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add this.authService
    this.authSubsciption.unsubscribe();  
  }
}
