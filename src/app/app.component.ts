import { Component, createComponent } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SignupserviceService } from './Service/signupservice.service';

import { CreateComponent } from './create/create.component';
import { MatDialog } from '@angular/material/dialog';
import { AddprojectComponent } from './webpage-module/addproject/addproject.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taskManagement';
  isLogin: boolean=true;
c:any;
b:any;
  constructor(private _signupservice:SignupserviceService,private dialog: MatDialog){

  // display username
  this.c=localStorage.getItem('datas')
  this.b=(JSON.parse(this.c))
  console.log('detail:',this.b)
  
  }
  ngOnInit(): void {
    this._signupservice.loginvalueemitter.subscribe((value)=>{
      this.isLogin=value;

    
    })
  }
  setting(){

  }
  openDialog(){
    this.dialog.open(AddprojectComponent)
  }

  }

