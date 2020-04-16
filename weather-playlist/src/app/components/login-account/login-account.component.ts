import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-account',
  templateUrl: './login-account.component.html',
  styleUrls: ['./login-account.component.scss']
})
export class LoginAccountComponent implements OnInit {

  public user: User;

  constructor(private router: Router) {
    this.user =  new User('', '');
   }

  ngOnInit(): void {
  }

  public userLogin() {
    console.log('Logging user in' , this.user);
    this.router.navigate(['/home']); //after newUser is created redirect to home page
  }

}
