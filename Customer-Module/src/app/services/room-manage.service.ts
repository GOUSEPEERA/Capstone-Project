import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { rooms } from '../models/rooms';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoomManageService {
  headers = new HttpHeaders().set('content-Type','application/json').set('Accept','application/json');
  httpOptions = {
    headers: this.headers
  }
  constructor(private http : HttpClient) { }

  url : string = "http://localhost:7777/rooms";

  getRoom(){
    return this.http.get<rooms[]>(this.url);
  }
  
  deleteRoom(roomId:number):Observable<rooms>{
    const url = `${this.url}/${roomId}`;
    return this.http.delete<rooms>(url,this.httpOptions)
  }

  getUpdateRoom(roomId:number):Observable<rooms>{
    const url = `${this.url}/${roomId}`;
    return this.http.get<rooms>(url,this.httpOptions)
  }
  updateRoom(room:rooms):Observable<rooms>{
    const url = `${this.url}/${room.id}`;
    return this.http.put<rooms>(url,this.httpOptions).pipe(
      map(()=> room)
    )
  }
}
