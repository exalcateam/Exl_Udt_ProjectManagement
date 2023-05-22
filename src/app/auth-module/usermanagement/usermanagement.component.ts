import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SignupserviceService } from 'src/app/Service/signupservice.service';
import { AdduserComponent } from '../adduser/adduser.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.scss']
})
export class UsermanagementComponent {
  dataSource= new MatTableDataSource ();
  displayedColumns: string[] = ['Username', 'Email', 'Password', 'Role'];
 constructor(private _signupservice:SignupserviceService,private dialog:MatDialog){
  this._signupservice.GetUser().subscribe({
    next:(data)=>{
      this.dataSource=new MatTableDataSource(data)
    }
  })
 }

 openDialog(){
  this.dialog.open(AdduserComponent)
 }
}
