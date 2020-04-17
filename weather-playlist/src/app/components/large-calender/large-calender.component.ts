import { Component, OnInit } from '@angular/core';
import { CreateEventService } from 'src/app/services/create-event.service';
import { UserEvent } from 'src/app/models/user-event';
import { CalendarMonth } from 'src/app/models/calendar-month';
import { CalendarDay } from 'src/app/models/calendar-day';
import { CreateCalendarService } from 'src/app/services/create-calendar.service';

@Component({
  selector: 'app-large-calender',
  templateUrl: './large-calender.component.html',
  styleUrls: ['./large-calender.component.scss']
})
export class LargeCalenderComponent implements OnInit {


  public calendarDays: CalendarDay[] = [];
  public eventTitle: String;
  public currentEvents: UserEvent[] = [];

  constructor(private createEventService: CreateEventService, private createCalendar: CreateCalendarService) { }

  ngOnInit(): void {
    // this.calendarDays[i].events[i].title

    //populating the large calendar with month
    let currentMonth: CalendarMonth = this.createCalendar.getNewMonth(4,2020);
    this.calendarDays = currentMonth.days;

    //getting the saved events -- soon will change to firebase database
    this.createEventService.getEventSource$.subscribe(events => {
      this.currentEvents = events
      //console.log(this.currentEvents);
      
      for(let i = 0; i < this.calendarDays.length; i++){
        for(let j = 0; j < this.currentEvents.length; j++){
          
          //console.log(this.currentEvents[j].day);
          if(this.calendarDays[i].date === this.currentEvents[j].day){
            console.log("found");
            console.log(this.currentEvents[j]);
            this.calendarDays[i].events.push(this.currentEvents[j])
          }
        }
      }

      // if(this.dayEvent.events.length > 0){
        
      // }
      
    });

    this.createEventService.getSelectedDaySource$.subscribe(event => {
      this.eventTitle = event.toString();
    })

  }

}
