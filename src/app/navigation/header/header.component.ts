import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

 @Output() sidenavToggle = new EventEmitter<void>();
  isAuth: boolean =false;
  authSubscriotion
  constructor( private authService:AuthService) { }

  ngOnInit(): void {
    this.authSubscriotion = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus
    })
  }

  onToggleSidenav(){
   this.sidenavToggle.emit();
  }

  ngOnDestroy(){
    this.authSubscriotion.unsubscribe();
  }

}
