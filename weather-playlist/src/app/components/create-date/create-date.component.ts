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
    // console.log(this.dayEvent);
    
    if(this.status){
      // console.log("should remove");
      this.status = false;
      this.selectDayService.deleteSelectedDay(this.dayEvent);
    } else {
      // console.log("should add");
      this.status = true;
      this.selectDayService.addSelectedDay(this.dayEvent);
    }
  }

}
