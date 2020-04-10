import { Component, OnInit, Input } from '@angular/core';
import { CalendarDay } from '../calendar-day';

@Component({
  selector: 'app-event-date',
  templateUrl: './event-date.component.html',
  styleUrls: ['./event-date.component.scss']
})
export class EventDateComponent implements OnInit {

  @Input() public dayEvent: CalendarDay;
  constructor() { }

  ngOnInit(): void {
  }

}
