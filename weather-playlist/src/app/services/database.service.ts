import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { SearchHistory } from '../models/search-history';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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


}
