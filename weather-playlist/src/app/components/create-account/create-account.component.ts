import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  public user: User;
  
   /** Keeps the subscription to the user object */
  private userSubscription: Subscription;

  constructor(private router: Router, public userService: UserService) { 
  }

  ngOnInit(): void {
        // If a user comes back from this subscription, forward them on to the home page
        this.userSubscription = this.userService.user$.subscribe( user => {
          if (user) {
            this.router.navigate(['home']);
          }
        });
  }

  ngOnDestroy() {
    // Clean up the subscription if this template is destroyed
    this.userSubscription.unsubscribe();
  }

  public createUser() {
    // console.log('Creating new user' , this.user);
    this.router.navigate(['/pick-genre-newuser']); //after newUser is created redirect to home page
  }

}
