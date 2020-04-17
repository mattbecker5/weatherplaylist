import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  public user: User;

  constructor(private router: Router) { 
    this.user =  new User('', '');
  }

  ngOnInit(): void {
  }

  public createUser() {
    console.log('Creating new user' , this.user);
    this.router.navigate(['/pick-genre-newuser']); //after newUser is created redirect to home page
  }

}
