import { Component, OnInit, Input } from '@angular/core';
import { CreateEventService } from 'src/app/services/create-event.service';
import { UserService } from 'src/app/services/user.service';
import { UserEvent } from 'src/app/models/user-event';
import { DatabaseService } from 'src/app/services/database.service';
import { SearchHistory } from 'src/app/models/search-history';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public allHistory: SearchHistory[];
  public currentEvents: UserEvent[];
  public eventsType: String[] = [];
  public eventsTitle: String[] = [];

  constructor(
    private createEventService: CreateEventService, 
    public userService: UserService,
    private database: DatabaseService
    ) { }

  ngOnInit(): void {

    // Get all user's events and show past events created
    this.userService.user$.subscribe( data => {
      this.createEventService.getAllEvents(data.uid).subscribe(events => {
        this.currentEvents = events;

        if(this.currentEvents.length === 0){
          console.log("No events found in database");
        }

        for(let i = 0; i < this.currentEvents.length; i++){
          console.log(this.currentEvents[i].title);
          console.log(this.currentEvents[i].type);

          if(this.eventsTitle.indexOf(this.currentEvents[i].title) !== -1){
            console.log("Event title exists");
          }
          else{
            this.eventsTitle.push(this.currentEvents[i].title);
            this.eventsType.push(this.currentEvents[i].type);
          }
        }
      });

      this.database.getSearchHistory(data.uid).subscribe( history => {
        this.allHistory = history;
        console.log(this.allHistory);
      })
    }); 


  }
}
