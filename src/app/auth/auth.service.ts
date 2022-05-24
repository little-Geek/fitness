import { Subject } from "rxjs";
import { AuthData } from "./auth-data.model";
import { User } from "./user.model";

export class AuthService {
    
    authChange    = new Subject<boolean>()
    private user: User;
    registerUser(authData: AuthData){
        this.user = {
            email : authData.email,
            userId: String(Math.random())
        }

        this.authChange.next(true);
    }

    login(authData :AuthData){
        this.user = {
            email : authData.email,
            userId: String(Math.random())
        }
        this.authChange.next(true);
    }

    logout(){
        this.user = null;
        this.authChange.next(false);
    }

    getUser(){
        return { ...this.user};
    }

    isAuth(){
        return this.user !=null;
    }
}