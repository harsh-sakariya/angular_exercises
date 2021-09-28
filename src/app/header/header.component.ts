import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName: string;
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.userCreated.subscribe(
      (user) => {
        this.userName = user.name;
      }
    )
  }

}
