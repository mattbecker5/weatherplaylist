import { Component, OnInit } from '@angular/core';
import { CalendarMonth } from '../calendar-month';

@Component({
  selector: 'app-small-calendar',
  templateUrl: './small-calendar.component.html',
  styleUrls: ['./small-calendar.component.scss']
})
export class SmallCalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //app state
    let currentCalendar = {};
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
    function createMonthArray(month, year){
        let totalDays = getDaysInMonth(month, year);
        let d = new Date();
        let currentMonth: CalendarMonth;
        let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let monthLong = ["January","February","March","April","May","June","July", "August","September","October","November","December"];
        let monthShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

        d.setFullYear(year);
        d.setMonth(month - 1);

        currentMonth = {"monthNum": month, "monthLong":monthLong[d.getMonth()], "monthShort": monthShort[d.getMonth()], "days":[], "year": year};
        for (let i = 0; i < totalDays; i++) {
            d.setDate(i+1);
            
            currentMonth.days.push({"date":i+1, "day": weekDays[d.getDay()]})
        };

        return currentMonth;
    };

    //the start of the app in time
    currentCalendar = createMonthArray(4, 2020);
    console.log(currentCalendar);
      }

}
