import { Component, OnInit, Input } from '@angular/core';
import { CreateCalendarService } from 'src/app/services/create-calendar.service';
import { CalendarMonth } from 'src/app/models/calendar-month';
import { SelectMonthYearService } from 'src/app/services/select-month-year.service';
import { CalendarDay } from 'src/app/models/calendar-day';
import { SelectDateService } from 'src/app/services/select-date.service';
import { UserEvent } from 'src/app/models/user-event';
import { CreateEventService } from 'src/app/services/create-event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})

export class CreateEventComponent implements OnInit {

  constructor(
    private createCalendar: CreateCalendarService, 
    private selectMonthService: SelectMonthYearService, 
    private selectDayService: SelectDateService,
    private createEventService: CreateEventService
    ) { 
  
  }

  public currentMonth: CalendarMonth;
  private month: number;
  private year: number;
  public selectedDays: CalendarDay[] = [];
  public userCreatedEvents: UserEvent[] = [];

  public title: String;
  public startTime: String;
  public endTime: String;
  public type: String;

  ngOnInit(): void {
    this.currentMonth = this.createCalendar.getNewMonth(4,2020);
    this.month = this.currentMonth.monthNum;
    this.year = this.currentMonth.year;
    console.log(this.currentMonth);
    this.selectMonthService.selectMonth(this.currentMonth);

    //user selects day
    this.selectDayService.dateSelected$.subscribe(day => {
      console.log(day);
      this.selectedDays.push(day);
    });

    //user un-selects day
    this.selectDayService.deleteSelected$.subscribe(day => {
      console.log("removing by splicing");
      let index;
      for(let i = 0; i < this.selectedDays.length; i++){
        if(this.selectedDays[i]==day){
            index = i;
        }
      }
      this.selectedDays.splice(index,1);
    });

  }

  //user to previous changes month
  previousMonth(){
    this.month = this.month - 1;
    this.currentMonth = this.createCalendar.getNewMonth(this.month, this.year);
    this.selectMonthService.selectMonth(this.currentMonth);
  }

  //user changes to next month 
  nextMonth(){
     this.month = this.month + 1
    this.currentMonth = this.createCalendar.getNewMonth(this.month, this.year);
    this.selectMonthService.selectMonth(this.currentMonth);
  }

  //when user pressed the create button
  submitEvent(title:String, startTime:String, endTime:String, type:String){

    this.selectedDays.forEach(day => {
      this.userCreatedEvents.push(new UserEvent(this.year, this.month, day.date, day.day, type, title, startTime, endTime));
    });

    this.createEventService.setEvent(this.userCreatedEvents);

    console.log(this.userCreatedEvents);
  }
}
