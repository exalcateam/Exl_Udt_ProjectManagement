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
      Username : new FormControl('', [Validators.required,]),
      // password: new FormControl('', [Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,10}")])
      // Password:new FormControl('', [Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,10}")])
      Password: new FormControl('', [Validators.required,]),
    })
}
// onlogin() {
    
//     if (this.loginFormGroup.valid)
//     console.log(this.loginFormGroup.value)
//     this._signupservice.login(this.loginFormGroup.value).subscribe({
//       next:(c)=>{
//         this.router.navigate(["/webpage-module/dashboard"]);

//         alert("login Successfully")
        

//         console.log(c)
//         localStorage.setItem('data',JSON.stringify(c))
//       },
       
//         error:()=>{
//           alert("Invalid User")
//         }
       
//     })
  // }
onlogin(){
  // if (this.loginFormGroup.valid)
   
      console.log("value",this.loginFormGroup.value)
      this._signupservice.Login(this.loginFormGroup.value).subscribe({
        next:(c)=>{
          console.log("detail",c)
          //for particular user project
          localStorage.setItem("Username",this.loginFormGroup.get('Username')?.value)
        
  // this._signupservice.showproject(this.loginFormGroup.get('Username')?.value).subscribe(data=>{
  //   console.log(data)
  // })

          this.router.navigate(["/webpage-module/dashboard"]);
          
                  localStorage.setItem('datas',JSON.stringify(c))
          // ,{queryParams:{user:this.loginFormGroup.get('Username')?.value}});
  
          alert("login Successfully")
},
       
      error:()=>{     
            alert("Invalid User")     
             }
       
})
          
}

}
