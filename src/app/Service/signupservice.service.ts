import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {

 url:string='https://localhost:7211/api/';
loginvalueemitter=new Subject<boolean>();

constructor(private _httpClient:HttpClient) {
 }
 islogin(val:boolean){
  this.loginvalueemitter.next(val)
 }

signup(signup:any){
  return this._httpClient.post(this.url+'Signuplogin/RegisterUser/register',signup);

}
login(login:any){
  return this._httpClient.post(this.url+'Signuplogin/Authenticate/authenticate',login);
 
}

createtask(create:any){
  console.log(create)
  return this._httpClient.post(this.url+'ProjectTable/Createtable',create);
}

GetAll():Observable<any>{
 return this._httpClient.get(this.url+'ProjectTable/GetAll');
}
Update(data:any){
  return this._httpClient.put(this.url+'ProjectTable/Updatedetails',data);
}
Delete(Id:number){
  return this._httpClient.delete(this.url+`ProjectTable/DeleteById?Id=${Id}`);
}


}
