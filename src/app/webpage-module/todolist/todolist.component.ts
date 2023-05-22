import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupserviceService } from 'src/app/Service/signupservice.service';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent{
//  isChecked:boolean=false;
//   startdates: any;
  c: any;
  b:any;
  checkform: FormGroup;
  addtodo: FormGroup
//   count1:number=0;
temp:any
project:any
  constructor(private _signupservice:SignupserviceService, private fb: FormBuilder,private router:Router) {
    this.c=localStorage.getItem('datas')
    this.b=(JSON.parse(this.c))
    console.log('detail:',this.b)
//     // console.log(this._signupservice.projecttitlevalue)
//     this.startdates = this._signupservice.projecttitlevalue.startdate

//     console.log("the final", this.startdates)
//     this.c = this._signupservice.projecttitlevalue
    this.addtodo = this.fb.group({
      todolist: ['', Validators.required]
    })
    this.checkform = this.fb.group({
      tick: ['']
    })



    this.temp = localStorage.getItem('ProjectData')
    this.project = JSON.parse(this.temp)
    console.log("Project Data : ",this.project)





  }
//   detail = this._signupservice.GetAll()
//   dashboard() {
//     this.router.navigate(["dashboard"]);
//   }
  d: any = []
  count = 0;
  AddTodo(value: any) {
    this.d.push(value)
    this.addtodo.reset();
    this.count++;
    console.log('total value is',this.count)
  }
  
  
  
  value: number = 0

  ischecked: any;

  a: any[] = []
// count1:any;
  ticking(i: any) {
    console.log(i);
  
if(i.checked==true){
  this.count1++;
  console.log("this value",this.count1)
}
else
this.count1--;


  }
  cal:any;
  myvalue:any;
  count1:number=0;
  calculate(){
    
    this.cal=(this.count1/this.count)*100
    console.log("the calculation is",this.cal)
    if(this.cal==100){
      this.myvalue='complete'
      console.log("my value is",this.myvalue)
    }
    else if(this.cal>0&&this.cal<100){
      this.myvalue='incomplete'
      console.log("my value is ",this.myvalue)
    }
    else{
      this.myvalue='Not initiated'
      console.log("my value is ",this.myvalue)
    }
    this._signupservice.statusvalue=this.myvalue
    console.log("storage save",this._signupservice.statusvalue)
    // this.router.navigate(['/table'])
    
  }
  

  

}