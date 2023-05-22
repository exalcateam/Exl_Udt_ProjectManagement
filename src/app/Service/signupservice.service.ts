import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {

//  url:string='https://localhost:7211/api/';
url:string='https://localhost:7211/api/';
loginvalueemitter=new Subject<boolean>();

constructor(private _httpClient:HttpClient) {
 }
 
 type:boolean=localStorage.getItem('type')=="Admin";

 islogin(val:boolean){
  this.loginvalueemitter.next(val)
 }

// signup(signup:any){
//   return this._httpClient.post(this.url+'Signuplogin/RegisterUser/register',signup);

// }
// login(login:any){
//   return this._httpClient.post(this.url+'Signuplogin/Authenticate/authenticate',login);
 
// }
// createtask(create:any){
//   console.log(create)
//   return this._httpClient.post(this.url+'ProjectTable/Createtable',create);
// }

// GetAll():Observable<any>{
//  return this._httpClient.get(this.url+'ProjectTable/GetAll');
// }
// Update(data:any){
//   return this._httpClient.put(this.url+'ProjectTable/Updatedetails',data);
// }
// Delete(Id:number){
//   return this._httpClient.delete(this.url+`ProjectTable/DeleteById?Id=${Id}`);
// }
adduser(adduser:any){
  return this._httpClient.post(this.url+'Project/AddUsers',adduser);
}
// addtask(addtask:any){
//   console.log("service",addtask)
//   return this._httpClient.post(this.url+'Project/AddTasks',addtask);
// }
addproject(addtask:any):Observable<any>{
  return this._httpClient.post(this.url+'Project/AddTasks',addtask);
}
GetAll():Observable<any>{
  return this._httpClient.get(this.url+'Project/getTask');
}
GetAllById(Id:number){
  return this._httpClient.get(this.url+`Project/getprojectlistByUserId?Id=${Id}`);
}
GetUser():Observable<any>{
  return this._httpClient.get(this.url+'Project/getUser');
}
update(update:any){
  return this._httpClient.put(this.url+'Project/UpdateTasks',update)
 }
 delete(deleteuser:any):Observable<any>{
  return this._httpClient.delete(this.url+'Project/delete',deleteuser);
 }
Login(logindb:any):Observable<any>
{
  // console.log("service",logindb)
  return this._httpClient.post(this.url+'Project/loginauth',logindb);
}
showproject(value:any):Observable<any>{
  // console.log(value)
  return this._httpClient.get(this.url+`Project/showprojects?username=${value}`);
}
projecttitlevalue:any;
statusvalue:any;
}