import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { adminDetails } from '../models/admin-details';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private serverUrl: string = 'http://localhost:7777';

  constructor(private httpClint: HttpClient) {

  }

  // get all admins
  public getAllAdmins(): Observable<adminDetails[]> {
    let dataUrl: string = 'http://localhost:7777/adminDetails';
    return this.httpClint.get<adminDetails[]>(dataUrl).pipe();
  }
  // dataUrl<T>(dataUrl: any) {
  //   throw new Error('Method not implemented.');
  // }

//   // get single admin
//   public getAdmin(): Observable<adminDetails[]> {
//     let dataUrl: string = '${serverUrl}/adminDetails/${id}';
//     return this.httpClint.get<adminDetails[]>(this.dataUrl).pipe();
//   }

//   //create admin

  public createAdmin(admin:adminDetails):Observable<adminDetails>{
    let dataUrl: string = `${this.serverUrl}/adminDetails`;
    return this.httpClint.post<adminDetails>(this.serverUrl,admin).pipe();
  }

//   //update admin
//   public updateAdmin(admin:adminDetails, adminId: string):Observable<adminDetails>{
//     let dataUrl: string = '${serverUrl}/adminDetails/${adminId}';
//     return this.httpClint.put<adminDetails>(this.dataUrl,admin).pipe();
//   }
// // delete admin
// public deleteAdmin( adminId: string):Observable<{}>{
//   let dataUrl: string = '${serverUrl}/adminDetails/${adminId}';
//   return this.httpClint.delete<{}>(this.dataUrl).pipe();
// }



}
