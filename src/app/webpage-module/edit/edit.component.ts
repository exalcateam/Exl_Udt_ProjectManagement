import { Component,Inject} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  addproject:FormGroup;
constructor(private router:Router,private fb:FormBuilder,private dialogRef: MatDialogRef<Component>,
  @Inject(MAT_DIALOG_DATA) public data:any) {
  this.addproject=this.fb.group(data)
  console.log("des:",data)
  }
  save(){
    this.dialogRef.close(this.addproject.value);
  }
  close(){
    this.dialogRef.close();
  }
}
