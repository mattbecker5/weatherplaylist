import { Injectable } from '@angular/core';
import { CalendarMonth } from '../model/calendar-month';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectMonthYearService {

    // Observable string sources
    private selectedDateSource = new Subject<CalendarMonth>();

    // Observable string streams
    public dateSelected$ = this.selectedDateSource.asObservable();
  
    constructor() { }
  
    // Service commands
    selectMonth(month: CalendarMonth) {
      this.selectedDateSource.next(month);
    }
}
