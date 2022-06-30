import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { customer } from 'src/app/models/customer';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {

  public CustomersForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private http: HttpClient, 
    private router: Router,
    ) { }

    public customers : customer[] = [];
  ngOnInit(): void {
    this.CustomersForm = this.formBuilder.group({
      name:[''],
      phone:[''],
      email:[''],
      roomType:[''],
      adress:['']
    })

    this.getCustomers().subscribe((data)=>{
      this.customers = data;
    })
  }

  
  

  public getCustomers(): Observable<customer[]> {
    let dataUrl: string = 'http://localhost:7777/booking';
    return this.http.get<customer[]>(dataUrl).pipe();
  }

}
