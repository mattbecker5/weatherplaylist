import { Component, OnInit, Input } from '@angular/core';
import { CreateEventService } from 'src/app/services/create-event.service';
import { UserService } from 'src/app/services/user.service';
import { UserEvent } from 'src/app/models/user-event';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public currentEvents: UserEvent[];
  public eventsTitle: String[] = [];

  constructor(private createEventService: CreateEventService, public userService: UserService) { }

  ngOnInit(): void {
    
    // Get all user's events and show past events created
    this.userService.user$.subscribe( data => {
      this.createEventService.getAllEvents(data.uid).subscribe(events => {
        this.currentEvents = events;

        for(let i = 0; i < this.currentEvents.length; i++){
          console.log(this.currentEvents[i].title);

          if(this.eventsTitle.indexOf(this.currentEvents[i].title) !== -1){
            console.log("Event title exists");
          }
          else{
            this.eventsTitle.push(this.currentEvents[i].title);
          }
        }
      });
    }); 
  }
}
