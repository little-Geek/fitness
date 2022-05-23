import { AuthData } from "./auth-data.model";
import { User } from "./user.model";

export class AuthService {

    private user: User;
    registerUser(authData: AuthData){
        this.user = {
            email : authData.email,
            userId: String(Math.random())
        }
    }

    login(authData :AuthData){
        this.user = {
            email : authData.email,
            userId: String(Math.random())
        }
    }

    logout(){
        this.user = null;
    }

    getUser(){
        return { ...this.user};
    }

    isAuth(){
        return this.user !=null;
    }
}