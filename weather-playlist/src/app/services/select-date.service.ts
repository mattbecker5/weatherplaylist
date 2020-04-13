import { Injectable } from '@angular/core';
import { CalendarDay } from '../model/calendar-day';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectDateService {

  // Observable string sources
  private selectedDateSource = new Subject<CalendarDay>();

  // Observable string streams
  public dateSelected$ = this.selectedDateSource.asObservable();

  constructor() { }

  // Service commands
  selectDay(day: CalendarDay) {
    this.selectedDateSource.next(day);
  }

}
