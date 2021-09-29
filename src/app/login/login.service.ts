import { EventEmitter, Injectable } from '@angular/core';
import { AuthService } from '../auth.service';

@Injectable()
export class LoginService{
    currentUser: {name: string, password: string};
    isLoggedIn: boolean = false;
    userCreated = new EventEmitter<{ name: string; password: string; }>();

    constructor(private authService: AuthService) {}

    createUser(user: {name: string, password: string}){
        this.currentUser = user;
        this.isLoggedIn = true;
        this.userCreated.emit(this.currentUser);
        this.authService.login();
    }

}