import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SignupserviceService } from 'src/app/Service/signupservice.service';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.scss']
})
export class AddprojectComponent {
addproject:FormGroup;
constructor(private fb:FormBuilder,@Inject(MAT_DIALOG_DATA) details:any,
private _signupservice:SignupserviceService,private _dialogRef:DialogRef){
  this.addproject=this.fb.group({
    // Id:[0],
ProjectName:['',Validators.required],
StartDate:'',
StatusoftheProject:'',
AssignedTo:'',
Description:'',
Username:''
  })
}
// save(){
//   console.log(this.addproject.value)
//   if(this.addproject.valid)
// this._signupservice.addtask(this.addproject.value).subscribe({
//   next:()=>{
//    alert("Task were Added");
//   },
//   error:()=>{
//     alert("Task were Not Added");
//   }

// })
//   }
temp:any;
username:any;
save(){

  console.log(this.addproject.value)
this.temp=localStorage.getItem('datas')
this.username=JSON.parse(this.temp)
console.log('username',this.username.Username)
this.addproject.value.Username=this.username.Username
  if(this.addproject.valid){
  this._signupservice.addproject(this.addproject.value).subscribe({
    next:(data)=>{
   console.log('task',data)
     alert("Task were Added");
     this._dialogRef.close();
  
    },
error:(err)=>{
  // alert("Task were Not Added")
  console.log(err)
}
  });
}
}
}

