import { Component, OnInit, Input } from '@angular/core';
import { CalendarDay } from 'src/app/models/calendar-day';
import { CalendarMonth } from 'src/app/models/calendar-month';
import { CreateEventService } from 'src/app/services/create-event.service';
import { UserEvent } from 'src/app/models/user-event';

@Component({
  selector: 'app-large-calendar-card',
  templateUrl: './large-calendar-card.component.html',
  styleUrls: ['./large-calendar-card.component.scss']
})
export class LargeCalendarCardComponent implements OnInit {

  @Input() public dayEvent: CalendarDay;
  public status: boolean = false;

  public currentMonth: CalendarMonth;
  
  
  constructor(private createEventService: CreateEventService) { }

  ngOnInit(): void {
    // console.log(this.dayEvent);
    if(this.dayEvent.events.length > 0){
      this.status = true;
    }
  }

  public selectedDay(){
    console.log(this.dayEvent.events.length);
    this.createEventService.setSelectedEvent(this.dayEvent.date);
  }



}
