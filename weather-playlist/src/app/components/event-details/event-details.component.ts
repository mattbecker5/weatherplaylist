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
  public currentEvent: UserEvent;
  public eventNum = 0;

  public date: string = "";
  public month: string = "";
  public year: string = "";

  constructor(private database: DatabaseService, private userService: UserService) { }

  ngOnInit(): void {

  }

  public prevEvent(){

    let element = document.getElementsByClassName('card');
    console.log(element[0].classList);
    element[0].classList.toggle('is-flipped');

    console.log('Loading previous event');
    if(this.eventNum > 0){
      this.eventNum = this.eventNum - 1;
      this.getCurrentEvent();
    }
    
  }

  public nextEvent(){

    let element = document.getElementsByClassName('card');
    console.log(element[0].classList);
    element[0].classList.toggle('is-flipped');

    console.log('Loading next event');
    if(this.eventNum < (this.events.length-1)){
      this.eventNum = this.eventNum + 1;
      this.getCurrentEvent();
    }
    console.log('Length: ' + this.events.length + 'EventNum: ' + this.eventNum);
  }

  public getDateForEvents(date: string, month: string, year: string){
    console.log("Getting event for current day");
    this.userService.user$.subscribe( data => {
      this.database.getEventsByDay(year, month, date, data.uid).subscribe( events => {
        this.events = events;
        console.log(this.events);
        this.currentEvent = this.events[this.eventNum];
      });
    });
  }

  public getCurrentEvent(){
    this.currentEvent = this.events[this.eventNum];
    console.log("Current: " + this.currentEvent);
  }
}
