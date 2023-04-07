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
constructor(private fb:FormBuilder,@Inject(MAT_DIALOG_DATA) details:any,private _signupservice:SignupserviceService){
  this.addproject=this.fb.group({
ProjectName:['',Validators.required],
StartDate:'',
StatusoftheProject:'',
AssignedBy:'',
Description:''
  })
}
save(){
  if(this.addproject.valid)
this._signupservice.createtask(this.addproject.value).subscribe({
  next:()=>{
   alert("Task were Added");
  },
  error:()=>{
    alert("Task were Not Added");
  }

})
  }
}

