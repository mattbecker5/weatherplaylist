import { Component, OnInit, Input } from '@angular/core';
import { CalendarMonth} from '../../model/calendar-month';
import { CalendarDay } from '../../model/calendar-day';

@Component({
  selector: 'app-small-calendar',
  templateUrl: './small-calendar.component.html',
  styleUrls: ['./small-calendar.component.scss']
})
export class SmallCalendarComponent implements OnInit {

  // @Input() public currentCalendarDays: CalendarDay[];
  constructor() { }

  public currentCalendarDays: CalendarDay[];
  public monthBufferDays: CalendarDay[];

  ngOnInit(): void {

    //app state
    let currentCalendar: CalendarMonth;
    let tempBufferDays = [];
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

    let numBufferDays = 0;

    //this is needed to put empty spaces in begging of each month
    if(currentCalendar.days[0].day === "Monday"){
        numBufferDays = 1;
    };

    if(currentCalendar.days[0].day === "Tuesday"){
        numBufferDays = 2;
    };

    if(currentCalendar.days[0].day === "Wednesday"){
        numBufferDays = 3;
    };

    if(currentCalendar.days[0].day === "Thursday"){
        numBufferDays = 4;
    };

    if(currentCalendar.days[0].day === "Friday"){
        numBufferDays = 5;
    };

    if(currentCalendar.days[0].day === "Saturday"){
        numBufferDays = 6;
    };

    for (let i = 0; i < numBufferDays; i++) {
        let day = new CalendarDay(0, "last month");
        console.log(day);
        tempBufferDays.push(day);
        //this.monthBufferDays.push(day);
    };

    this.monthBufferDays = tempBufferDays;

    this.currentCalendarDays = currentCalendar.days;
    console.log(currentCalendar);
    console.log(this.currentCalendarDays);
  }

}
