import { Component, OnInit } from '@angular/core';
import { UserEvent } from 'src/app/models/user-event';
import { User } from 'src/app/models/user';
import { DatabaseService } from 'src/app/services/database.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  public events: UserEvent[] = [];
  public event: UserEvent;

  public date: string = "";
  public month: string = "";
  public year: string = "";

  constructor(private database: DatabaseService, private userService: UserService) { }

  ngOnInit(): void {
    let eventTest = {
      year: "2020",
      month: "4",
      day: "23",
      dayLong: "",
      type: "class",
      title: "Davinci Contest",
      startTime: "8am",
      endTime: "11am"
    }

    this.event = new UserEvent(eventTest);

  }

  public prevEvent(){
    console.log('Loading previous event');
  }

  public nextEvent(){
    console.log('Loading next event');
  }

  public getDateForEvents(date: string, month: string, year: string){
    console.log(year + "/" + month + "/" + date);
    this.userService.user$.subscribe( data => {
      this.database.getEventsByDay(year, month, date, data.uid).subscribe( events => {
        this.events = events;
        console.log(this.events);
      });
    });
  }
}
