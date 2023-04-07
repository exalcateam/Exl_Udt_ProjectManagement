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
d:any;
  constructor(private _signupservice:SignupserviceService,private dialog: MatDialog){}
  ngOnInit(): void {
    this._signupservice.loginvalueemitter.subscribe((value)=>{
      this.isLogin=value;

      //display username
      this.c=localStorage.getItem('data')
      this.d=(JSON.parse(this.c))
      console.log('detail:',this.d)
    })
  }
  setting(){

  }
  openDialog(){
    this.dialog.open(AddprojectComponent)
  }

  }

