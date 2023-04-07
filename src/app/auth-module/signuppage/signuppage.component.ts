// import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupserviceService } from 'src/app/Service/signupservice.service';


@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.scss']
})
export class SignuppageComponent {
  signupFormGroup:FormGroup;
  constructor(private router: Router,private _signupservice:SignupserviceService){
    this._signupservice.islogin(false);
    this.signupFormGroup = new FormGroup({
      username:new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.required,]),
      // password: new FormControl('', [Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,10}")])
      password:new FormControl('',[Validators.required])
    })
  }
  onSubmit(){
if(this.signupFormGroup.valid)
this._signupservice.signup(this.signupFormGroup.value).subscribe({
  next:()=>{
   alert("User Registered Successfully!")
  
  },
  error:(err)=>{
    alert("Registeration failed")
  }
})
  }
}
