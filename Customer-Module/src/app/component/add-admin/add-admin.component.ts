import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { adminDetails } from 'src/app/models/admin-details';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

   public admins: adminDetails = {} as adminDetails;

  public admin: adminDetails ={
    id: 4,
    name: 'PAB',
    email: "PAB@gmail.com",
    phone: "9441893903",
    password: "Pab@2001",
    gender: "Mali"
  }



  constructor(private adminServices: AdminService,
    private router:Router) { }

  ngOnInit(): void {
    this.adminServices.createAdmin(this.admins).subscribe((data)=>{
      this.admins = data;})

    /**
     * createAdmin
     */
    // public createAdmin() {
    //   this.adminServices.createAdmin(this.admins).subscribe((data)=>{
    //   })
    // }
  }

}
