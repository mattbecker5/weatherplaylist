import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UserEvent } from '../models/user-event';

@Injectable({
  providedIn: 'root'
})
export class CreateEventService {

    // Observable sources
    private getEventSource = new Subject<UserEvent[]>();

    // Observable streams
    public getEventSource$ = this.getEventSource.asObservable();
  
    constructor() { }
  
    // Service commands
    setEvent(event: UserEvent[]) {
      this.getEventSource.next(event);
    }
}
