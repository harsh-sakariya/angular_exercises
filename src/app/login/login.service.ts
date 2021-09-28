import { EventEmitter } from '@angular/core';

export class LoginService{
    currentUser: {name: string, password: string};
    isLoggedIn: boolean = false;
    userCreated = new EventEmitter<{ name: string; password: string; }>();

    createUser(user: {name: string, password: string}){
        this.currentUser = user;
        this.isLoggedIn = true;
        this.userCreated.emit(this.currentUser);
    }

    isAuthenticated(){
        return Promise.resolve(this.isLoggedIn);
    }

}