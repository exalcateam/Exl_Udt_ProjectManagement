import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupserviceService } from 'src/app/Service/signupservice.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent {
temp:any;
adduser:FormGroup;
constructor(private fb:FormBuilder,private _signupservice:SignupserviceService,private _dialogRef:DialogRef){
  this.adduser=this.fb.group({
    Username:['',Validators.required],
    Email:'',
    Password:'',
    Role:''
  })
}
addnewuser(){
  // console.log("adduser",this.adduser.value)
  // this.temp=localStorage.getItem('datas')
  // console.log('temp',this.temp)
  if(this.adduser.valid){
    this._signupservice.adduser(this.adduser.value).subscribe({
      next:(data)=>{
        console.log('adduser:',data)
        alert("User were Added");
        this._dialogRef.close();
      },
      error:(err)=>{
        alert("User were Not Added")
      }
    });
  }
}
}
