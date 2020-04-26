import { Component, OnInit } from '@angular/core';
import { CreateEventService } from 'src/app/services/create-event.service';
import { UserEvent } from 'src/app/models/user-event';
import { CalendarMonth } from 'src/app/models/calendar-month';
import { CalendarDay } from 'src/app/models/calendar-day';
import { CreateCalendarService } from 'src/app/services/create-calendar.service';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

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

  public month: number;
  public year: number;

  
  constructor(
    private createEventService: CreateEventService, 
    private createCalendar: CreateCalendarService, 
    public userService: UserService
    ) { }

  ngOnInit(): void {

    this.populateEventsTable();
    this.month = 4;
    this.year = 2020;

    // this.createEventService.getAllEvents().subscribe(events => {
    //   this.currentEvents = events;
    //   console.log(events);
    // });
    
  }

  //user to previous changes month
  previousMonth(){
    this.month = this.month - 1;
    this.populateEventsTable();
  }

  //user changes to next month 
  nextMonth(){
    this.month = this.month + 1;
    this.populateEventsTable();
  }

  populateEventsTable(){
    // let currentMonth: CalendarMonth = this.createCalendar.getNewMonth(4,2020);
    // this.calendarDays = currentMonth.days;

    //getting the saved events -- soon will change to firebase database
    this.userService.user$.subscribe( data => {
      this.createEventService.getAllEvents(data.uid).subscribe(events => {
        // console.log("trying to populate");
      //populating the large calendar with month
        let currentMonth: CalendarMonth = this.createCalendar.getNewMonth(this.month, this.year);
        this.currentEvents = events
        //console.log(this.currentEvents);
        
        for(let i = 0; i < currentMonth.days.length; i++){
          // console.log(this.currentEvents.length);
          for(let j = 0; j < this.currentEvents.length; j++){
            
            //console.log(this.currentEvents[j].day);
            if(currentMonth.days[i].date.toString() === this.currentEvents[j].day && currentMonth.monthNum.toString() === this.currentEvents[j].month){
              // console.log("found");
              // console.log(this.currentEvents[j]);
              currentMonth.days[i].events.push(this.currentEvents[j])
              // this.calendarDays.push(calDay);
            }
          }
        }
  
        this.calendarMonth = currentMonth;
        this.calendarDays = currentMonth.days;
      });
    });

  }

}
