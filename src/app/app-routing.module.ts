import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { SignupComponent } from "./auth/signup/signup.component";
import { WelcomeComponent } from "./welcome/welcome.component";



const routes: Routes = [
    {path :  '', component: WelcomeComponent  },
    { path: 'signup' , component: SignupComponent} 
];
@NgModule({

})
export class AppRoutingModule {

}