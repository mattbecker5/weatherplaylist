import { Component, OnInit, Input } from '@angular/core';
import { CalendarDay } from '../../models/calendar-day';
import { CalendarMonth } from 'src/app/models/calendar-month';
import { SelectDateService } from 'src/app/services/select-date.service';

@Component({
  selector: 'app-create-date',
  templateUrl: './create-date.component.html',
  styleUrls: ['./create-date.component.scss']
})
export class CreateDateComponent implements OnInit {

  @Input() public dayEvent: CalendarDay;

  public currentMonth: CalendarMonth;
  public status: boolean = false;

  constructor(private selectDayService: SelectDateService) { }

  ngOnInit(): void {
    // this.currentMonth = new CalendarMonth()
  }

  selectedCurrentDay() {
    console.log(this.dayEvent);
    this.selectDayService.setSelectedDay(this.dayEvent);
    this.status = !this.status;
    console.log("active")  
  }

}
