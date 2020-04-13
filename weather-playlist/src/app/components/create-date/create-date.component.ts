import { Component, OnInit, Input } from '@angular/core';
import { CalendarDay } from '../../model/calendar-day';

@Component({
  selector: 'app-create-date',
  templateUrl: './create-date.component.html',
  styleUrls: ['./create-date.component.scss']
})
export class CreateDateComponent implements OnInit {

  @Input() public dayEvent: CalendarDay;
  constructor() { }

  ngOnInit(): void {
  }

}
