import { Injectable } from '@angular/core';
import { Subject, fromEvent, Observable } from 'rxjs';
import { UserEvent } from '../models/user-event';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CreateEventService {

    // Observable sources
    private getEventSource = new Subject<UserEvent[]>();
    // Observable streams
    public getEventSource$ = this.getEventSource.asObservable();

    public events: UserEvent[] = [];

    // Observable sources
    private getSelectedDaySource = new Subject<number>();
    // Observable streams
    public getSelectedDaySource$ = this.getSelectedDaySource.asObservable();
  
    constructor(private firestore: AngularFirestore) { 

    }
  
    // Service commands
    setEvent(event: UserEvent[]) {
      this.getEventSource.next(event);
      this.events = event;
    }

    // Service commands
    setSelectedEvent(date: number) {
      this.getSelectedDaySource.next(date);
    }

    createNewEvents(events: UserEvent[], userId: string){
      events.forEach(event => {
        console.log("here to stay!!!");
        // this.firestore.collection('user-events').add(event);

        this.firestore.collection('events').add({ // Break down the chirp to a JS object to save
          userId: userId,
          day:  event.day.toString(),
          dayLong: event.dayLong,
          endTime: event.endTime,
          month: event.month.toString(),
          startTime: event.startTime,
          title: event.title,
          type: event.type,
          year: event.year.toString()
        });

      });


      return "created events"
  }

  getEvents() {
    return this.firestore.collection('events').snapshotChanges();
  }

  /** Gets all chirps in the system */
  public getAllEvents(uid:string): Observable<UserEvent[]> {
    
    return this.firestore
      .collection('events', ref => ref.where('userId', '==', uid))
      .valueChanges().pipe(
        map( events => events.map( eventObj => new UserEvent(eventObj) ))
      );
  }

  // public(uid:)

  // public getSnapShotEvents() {
  //   return this.firestore.collection('events').snapshotChanges();
  // }

}
