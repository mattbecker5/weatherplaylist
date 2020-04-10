import { Component, OnInit, Input } from '@angular/core';
import { CalendarDay } from '../calendar-day';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  @Input() public day: CalendarDay;
  constructor() { }

  ngOnInit(): void {
  }

}
