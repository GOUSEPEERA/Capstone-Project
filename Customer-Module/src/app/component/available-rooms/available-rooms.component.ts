import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { rooms } from 'src/app/models/rooms';
import { RoomManageService } from 'src/app/services/room-manage.service';

@Component({
  selector: 'app-available-rooms',
  templateUrl: './available-rooms.component.html',
  styleUrls: ['./available-rooms.component.css']
})
export class AvailableRoomsComponent implements OnInit {
  rooms : rooms[] = [];
  roomId: any;
  p:number=1;
  constructor(public roomservices: RoomManageService, private router : Router) { }

  ngOnInit(): void {
    this.roomservices.getRoom().subscribe((response)=>{
      this.rooms = response;
    })
  }

  deleteRow(val: number){
    if(confirm("Are you sure to delete ??")){
      this.roomservices.deleteRoom(val).subscribe(data => {

      });
      this.roomservices.getRoom().subscribe((response =>{
        this.rooms = response;
      }))
    }
  }

}
