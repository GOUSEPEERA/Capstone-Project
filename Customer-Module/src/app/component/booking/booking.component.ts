import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

public bookingForm !: FormGroup;

  constructor( private bookingBuilder : FormBuilder, 
    private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {

    this.bookingForm = this.bookingBuilder.group({
      name:[''],
      email:[''],
      mobile:[''],
      roomtype:[''],
      address:['']
    })
  }

  booking(){
    this.http.post<any>("http://localhost:7777/booking",this.bookingForm.value).subscribe(
      res=>{
        alert("Room Booking Successfull");
        this.bookingForm.reset();
        this.router.navigate(['home']);
  
      },err=>{
        alert("Something went wrong")
      }
      
    )
  }

}
