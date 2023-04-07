// import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupserviceService } from 'src/app/Service/signupservice.service';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent {
  loginFormGroup:FormGroup;
  constructor(private router: Router,private _signupservice:SignupserviceService) {
    this._signupservice.islogin(false);

    this.loginFormGroup = new FormGroup({
      UserName: new FormControl('', [Validators.required,]),
      // password: new FormControl('', [Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,10}")])
      password:new FormControl('', [Validators.required,])
    })
}
onlogin() {
    
    if (this.loginFormGroup.valid)
    console.log(this.loginFormGroup.value)
    this._signupservice.login(this.loginFormGroup.value).subscribe({
      next:(c)=>{
        this.router.navigate(["/webpage-module/dashboard"]);

        alert("login Successfully")
        

        console.log(c)
        localStorage.setItem('data',JSON.stringify(c))
      },
       
        error:()=>{
          alert("Invalid User")
        }
       
    })
  }

}
