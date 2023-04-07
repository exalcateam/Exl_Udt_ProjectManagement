import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SignupserviceService } from 'src/app/Service/signupservice.service';
import { EditComponent } from '../edit/edit.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dataSource= new MatTableDataSource ();
  projectlist:any=[];

  user: any;
constructor(private _signupservice:SignupserviceService,private dialog:MatDialog){

}
 
  displayedColumns = ['ProjectName','StartDate','StatusoftheProject','AssignedBy','Description','Edit','Delete'];

  applyFilter(filter:string) {
    
    this.dataSource.filter = filter.trim().toLowerCase();
  }
  delete(Id:number){
    this._signupservice.Delete(Id).subscribe(data=>{
      this._signupservice.GetAll().subscribe(a=>{
        this.dataSource=new MatTableDataSource(a);
      })
    })
  }
  openDialog1(value:any,i:any){
     const editvalue = new MatDialogConfig();
     
         editvalue.disableClose = true;
         editvalue.autoFocus = true;
       editvalue.data=value;
          const edit=this.dialog.open(EditComponent,editvalue);
          edit.afterClosed().subscribe((data)=>{
             if(data){
               console.log(data);
               this._signupservice.Update(data).subscribe(b=>{
                this._signupservice.GetAll().subscribe(c=>{
                  this.dataSource=new MatTableDataSource(c)
                });
               })
              
             }
           });
  }
  ngOnInit(){

  this._signupservice.GetAll().subscribe({next:data=>{
    this.projectlist=data;
    console.log("Datas : ",this.projectlist)
    this.dataSource=new MatTableDataSource(this.projectlist)}
  })
 }
}
