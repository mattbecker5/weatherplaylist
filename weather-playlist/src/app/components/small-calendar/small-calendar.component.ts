import { Component, OnInit, Input } from '@angular/core';
import { CalendarMonth} from '../../models/calendar-month';
import { CalendarDay } from '../../models/calendar-day';
import { MonthYear } from 'src/app/interfaces/month-year';
import { SelectMonthYearService } from 'src/app/services/select-month-year.service';
import { CreateCalendarService } from 'src/app/services/create-calendar.service';

@Component({
  selector: 'app-small-calendar',
  templateUrl: './small-calendar.component.html',
  styleUrls: ['./small-calendar.component.scss']
})
export class SmallCalendarComponent implements OnInit {

  calendarDays: CalendarDay[];
  monthBufferDays: CalendarDay[];

  constructor(private createCalendar: CreateCalendarService, private selectMonthService: SelectMonthYearService) { 
    
  }

  ngOnInit(): void {

    //setting the default month
    let currentMonth: CalendarMonth = this.createCalendar.getNewMonth(4,2020);
    this.calendarDays = currentMonth.days;
    this.monthBufferDays = currentMonth.bufferDays;

    //setting the abserveable for when user changes the month
    this.selectMonthService.dateSelected$.subscribe(month => this.calendarDays = month.days);
    this.selectMonthService.dateSelected$.subscribe(month => this.monthBufferDays = month.bufferDays);
  }

}
