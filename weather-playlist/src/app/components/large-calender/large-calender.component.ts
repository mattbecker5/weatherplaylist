import { Component, OnInit } from '@angular/core';
import { CreateEventService } from 'src/app/services/create-event.service';
import { UserEvent } from 'src/app/models/user-event';
import { CalendarMonth } from 'src/app/models/calendar-month';
import { CalendarDay } from 'src/app/models/calendar-day';
import { CreateCalendarService } from 'src/app/services/create-calendar.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-large-calender',
  templateUrl: './large-calender.component.html',
  styleUrls: ['./large-calender.component.scss']
})
export class LargeCalenderComponent implements OnInit {

  public calendarMonth: CalendarMonth;
  public calendarDays: CalendarDay[] = [];
  public eventTitle: String;
  public currentEvents: UserEvent[];
  public events: Observable<UserEvent[]>;

  

  constructor(private createEventService: CreateEventService, private createCalendar: CreateCalendarService) { }

  ngOnInit(): void {

    this.populateEventsTable();

    // this.createEventService.getAllEvents().subscribe(events => {
    //   this.currentEvents = events;
    //   console.log(events);
    // });
    
  }

  populateEventsTable(){
    // let currentMonth: CalendarMonth = this.createCalendar.getNewMonth(4,2020);
    // this.calendarDays = currentMonth.days;

    //getting the saved events -- soon will change to firebase database
    this.createEventService.getAllEvents().subscribe(events => {
      console.log("trying to populate");
    //populating the large calendar with month
      let currentMonth: CalendarMonth = this.createCalendar.getNewMonth(4,2020);
      this.currentEvents = events
      //console.log(this.currentEvents);
      
      for(let i = 0; i < currentMonth.days.length; i++){
        console.log(this.currentEvents.length);
        for(let j = 0; j < this.currentEvents.length; j++){
          
          //console.log(this.currentEvents[j].day);
          if(currentMonth.days[i].date.toString() === this.currentEvents[j].day){
            console.log("found");
            console.log(this.currentEvents[j]);
            currentMonth.days[i].events.push(this.currentEvents[j])
            // this.calendarDays.push(calDay);
          }
        }
      }

      this.calendarMonth = currentMonth;
      this.calendarDays = currentMonth.days;
      // if(this.dayEvent.events.length > 0){
        
      // }
      
    });
  }

}
