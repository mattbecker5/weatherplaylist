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

  // Observable string sources
  private deleteDateSource = new Subject<CalendarDay>();
  // Observable string streams
  public deleteSelected$ = this.deleteDateSource.asObservable();

  constructor() { }

  // Service commands
  addSelectedDay(day: CalendarDay) {
    this.selectedDateSource.next(day);
  }

  deleteSelectedDay(day: CalendarDay) {
    this.deleteDateSource.next(day);
  }

}
