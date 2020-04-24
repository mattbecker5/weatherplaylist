import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { SearchHistory } from '../models/search-history';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserEvent } from '../models/user-event';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private firestore: AngularFirestore) { }

  public addSearchHistory(search: SearchHistory){

    this.firestore.collection('history').add({
      userId: search.userID,
      term: search.term,
      time: search.time
    });
  }

  public getSearchHistory(uid:string): Observable<SearchHistory[]> {
    return this.firestore
      .collection('history', ref => ref.where('userId', '==', uid))
      .valueChanges().pipe(
        map( history => history.map( searchObj => new SearchHistory(searchObj) ))
      );
  }

  public deleteUserEvent(eventId: string){
    let event = this.firestore.collection('events', ref => ref.where('eventId', '==', eventId));
    event.get().subscribe(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        doc.ref.delete();
        console.log("completed delete")
      });
    });
  }

  /** Gets all events in the system */
  public getAllEvents(uid:string): Observable<UserEvent[]> {
    
    return this.firestore
      .collection('events', ref => ref.where('userId', '==', uid))
      .valueChanges().pipe(
        map( events => events.map( eventObj => new UserEvent(eventObj) ))
      );
  }



}
