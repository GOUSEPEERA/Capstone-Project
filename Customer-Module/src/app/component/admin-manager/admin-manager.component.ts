import { Component, OnInit } from '@angular/core';
// import { nextTick } from 'process';
import { adminDetails } from 'src/app/models/admin-details';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-manager',
  templateUrl: './admin-manager.component.html',
  styleUrls: ['./admin-manager.component.css']
})
export class AdminManagerComponent implements OnInit {
  public admins: adminDetails[]=[
   
  ];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAllAdmins().subscribe((data)=>{
      this.admins = data;
    })
  }

}
