import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {  MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { AddprojectComponent } from './addproject/addproject.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatDialogModule} from '@angular/material/dialog';
import { EditComponent } from './edit/edit.component';
import {MatDividerModule} from '@angular/material/divider';
import { NgChartsModule } from 'ng2-charts';
import { MatTooltipModule } from '@angular/material/tooltip'; 
import { CdkTableExporterModule } from 'cdk-table-exporter';
import {MatTableExporterModule } from 'mat-table-exporter';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TodolistComponent } from './todolist/todolist.component';
import {MatPaginatorModule} from '@angular/material/paginator';
const routes: Routes = [
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'addproject',
    component:AddprojectComponent
  },
  {
    path:'edit',
    component:EditComponent
  },
  {
    path:'todolist',
    component:TodolistComponent
  }
]
@NgModule({
  declarations: [
    DashboardComponent,
    AddprojectComponent,
    EditComponent,
    TodolistComponent
  ],
  imports: [
    
    CommonModule,
    RouterModule.forChild(routes),
    NgChartsModule.forRoot(),
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatDividerModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatPaginatorModule
    // CdkTableExporterModule,
    // MatTableExporterModule
    
  ]
})
export class WebpageModuleModule { }
