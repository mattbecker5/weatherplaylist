import { Component, OnInit, Input } from '@angular/core';
import { CalendarMonth} from '../calendar-month';
import { CalendarDay } from '../calendar-day';

@Component({
  selector: 'app-small-calendar',
  templateUrl: './small-calendar.component.html',
  styleUrls: ['./small-calendar.component.scss']
})
export class SmallCalendarComponent implements OnInit {

  // @Input() public currentCalendarDays: CalendarDay[];
  constructor() { }

  public currentCalendarDays: CalendarDay[];

  ngOnInit(): void {

    //app state
    let currentCalendar: CalendarMonth;
    let smallCalendarCurrent = {};
    let largeCalendarCurrent = {};
    let events = {};

    //creating calendar

    let getDaysInMonth = function(month, year) {
        // Here January is 1 based
        //Day 0 is the last day in the previous month
      return new Date(year, month, 0).getDate();
      // Here January is 0 based
      // return new Date(year, month+1, 0).getDate();
    };


    //creates a new calandar based on given month and year
    function createMonthArray<CalendarMonth>(month, year): CalendarMonth{
        let totalDays = getDaysInMonth(month, year);
        let d = new Date();
        let currentMonth;
        let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let monthLong = ["January","February","March","April","May","June","July", "August","September","October","November","December"];
        let monthShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

        d.setFullYear(year);
        d.setMonth(month - 1);

        currentMonth = new CalendarMonth(month, monthLong[d.getMonth()], monthShort[d.getMonth()], [], year);
        for (let i = 0; i < totalDays; i++) {
            d.setDate(i+1);
            let day = new CalendarDay(i+1, weekDays[d.getDay()]);
            currentMonth.days.push(day);
        };

        return currentMonth;
    };

    //the start of the app in time
    currentCalendar = createMonthArray(4, 2020);
    this.currentCalendarDays = currentCalendar.days;
    console.log(currentCalendar);
    console.log(this.currentCalendarDays);
  }

}
