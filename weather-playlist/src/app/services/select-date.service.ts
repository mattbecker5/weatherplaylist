import { Injectable } from '@angular/core';
import { CalendarDay } from '../models/calendar-day';
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
  setSelectedDay(day: CalendarDay) {
    this.selectedDateSource.next(day);
  }

}
