import { Component, OnInit, Input } from '@angular/core';
import { CalendarDay } from '../../models/calendar-day';
import { CalendarMonth } from 'src/app/models/calendar-month';

@Component({
  selector: 'app-create-date',
  templateUrl: './create-date.component.html',
  styleUrls: ['./create-date.component.scss']
})
export class CreateDateComponent implements OnInit {

  @Input() public dayEvent: CalendarDay;

  public currentMonth: CalendarMonth;

  constructor() { }

  ngOnInit(): void {
    // this.currentMonth = new CalendarMonth()
  }

  selectedDay() {
    console.log(this.dayEvent);
  }

}
