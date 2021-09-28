import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  @ViewChild('name') name: ElementRef;
  @ViewChild('password') password: ElementRef;

  constructor(private loginService: LoginService,
              private router: Router) { }

  onLogin(){
    const name = this.name.nativeElement.value;
    const password = this.password.nativeElement.value;
    if(!name.trim() || !password.trim()){
      alert("Empty fields!");
      return;
    }
    const user = {name: name, password: password};
    this.loginService.createUser(user);
    this.router.navigate(['/job']);
  } 
}
