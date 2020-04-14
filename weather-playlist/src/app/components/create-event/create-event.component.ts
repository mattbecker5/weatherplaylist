import { Component, OnInit, Input } from '@angular/core';
import { CreateCalendarService } from 'src/app/services/create-calendar.service';
import { CalendarMonth } from 'src/app/models/calendar-month';
import { SelectMonthYearService } from 'src/app/services/select-month-year.service';
import { CalendarDay } from 'src/app/models/calendar-day';
import { SelectDateService } from 'src/app/services/select-date.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})

export class CreateEventComponent implements OnInit {

  constructor(private createCalendar: CreateCalendarService, private selectMonthService: SelectMonthYearService, private selectDayService: SelectDateService) { 
  
  }

  public currentMonth: CalendarMonth;
  private month: number;
  private year: number;

  public selectedDays: CalendarDay[] = [];


  ngOnInit(): void {
    this.currentMonth = this.createCalendar.getNewMonth(4,2020);
    this.month = this.currentMonth.monthNum;
    this.year = this.currentMonth.year;
    console.log(this.currentMonth);
    this.selectMonthService.selectMonth(this.currentMonth);

    this.selectDayService.dateSelected$.subscribe(day => {
      console.log(day);
      this.selectedDays.push(day);
    });

  }

  previousMonth(){
    console.log("trying to change to pre month")
    this.month = this.month - 1;
    this.currentMonth = this.createCalendar.getNewMonth(this.month, this.year);
    this.selectMonthService.selectMonth(this.currentMonth);
  }

  nextMonth(){
    console.log("tring to change to next month")
     this.month = this.month + 1
    this.currentMonth = this.createCalendar.getNewMonth(this.month, this.year);
    this.selectMonthService.selectMonth(this.currentMonth);
  }
}
