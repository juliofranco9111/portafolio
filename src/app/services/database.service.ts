import { message } from './../models/message.model';
import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    private db: AngularFireDatabase
    ) {}


  saveMessage( data: message ){
    const date = new Date;
    const now = date.getTime()
    
     return this.db.list(`messages/`).push(data);
  }

}
