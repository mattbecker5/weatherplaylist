import { Injectable } from '@angular/core';
import { CalendarMonth } from '../models/calendar-month';
import { CalendarDay } from '../models/calendar-day';

@Injectable({
  providedIn: 'root'
})
export class CreateCalendarService {

  public currentMonth: CalendarMonth;
  public currentCalendarDays: CalendarDay[];
  
  
  constructor() { 
    // let month = this.getNewMonth(4, 2020);
    // console.log(month);
  }

  public getNewMonth<CalendarMonth>(inputMonth: number, inputYear: number){
    
    //setting the calendar with the days
    this.currentMonth = this.createMonthArray(inputMonth, inputYear);
    this.currentCalendarDays = this.currentMonth.days;
    return this.currentMonth;

    // console.log(currentCalendar);
    // console.log(this.currentCalendarDays);
  }

  //creates a new calandar based on given month and year
  private createMonthArray<CalendarMonth>(tempMonth: number, tempYear: number): CalendarMonth{
    let totalDays = this.getDaysInMonth(tempMonth, tempYear);
    let d = new Date();
    let currentMonth;
    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let monthLong = ["January","February","March","April","May","June","July", "August","September","October","November","December"];
    let monthShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

    d.setFullYear(tempYear);
    d.setMonth(tempMonth - 1);

    currentMonth = new CalendarMonth(tempMonth, monthLong[d.getMonth()], monthShort[d.getMonth()], [], [], tempYear);
    for (let i = 0; i < totalDays; i++) {
        d.setDate(i+1);
        let day = new CalendarDay(i+1, weekDays[d.getDay()], []);
        currentMonth.days.push(day);
    };

    //add the blank days to the begging of the month
    // let completeMonth = this.createBufferDays(currentMonth);

    let tempBufferDays = [];

    //the number of buffer days is 0 at start
    let numBufferDays = 0;

    //this is needed to put empty spaces in begging of each month
    if(currentMonth.days[0].day === "Monday"){
        numBufferDays = 1;
    };

    if(currentMonth.days[0].day === "Tuesday"){
        numBufferDays = 2;
    };

    if(currentMonth.days[0].day === "Wednesday"){
        numBufferDays = 3;
    };

    if(currentMonth.days[0].day === "Thursday"){
        numBufferDays = 4;
    };

    if(currentMonth.days[0].day === "Friday"){
        numBufferDays = 5;
    };

    if(currentMonth.days[0].day === "Saturday"){
        numBufferDays = 6;
    };

    //finding all the buffer days needed for each month
    for (let i = 0; i < numBufferDays; i++) {
        let day = new CalendarDay(0, "last month", []);
        tempBufferDays.push(day);
    };

    //setting the current calendar to the class var to be looped in the HTML file
    currentMonth.bufferDays = tempBufferDays;

    return currentMonth;
  };

  //getting the days in the month by passing what month and year
  private getDaysInMonth(month, year) {
      // Here January is 1 based
      //Day 0 is the last day in the previous month
    return new Date(year, month, 0).getDate();
    // Here January is 0 based
    // return new Date(year, month+1, 0).getDate();
  };

  public createBufferDays<CalendarMonth>(currentMonth: CalendarMonth){

    

    return currentMonth;
  }

}
