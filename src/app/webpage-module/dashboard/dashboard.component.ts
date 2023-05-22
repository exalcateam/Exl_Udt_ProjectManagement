import { Component, OnInit,ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SignupserviceService } from 'src/app/Service/signupservice.service';
import { EditComponent } from '../edit/edit.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import  DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import * as XLSX from 'xlsx';
import { ActivatedRoute, Router } from '@angular/router';
import { AddprojectComponent } from '../addproject/addproject.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  dataSource= new MatTableDataSource ();
  projectlist:any=[];
  data:any;
Username:any;
  ExcelData: any;
  Projectrow:any;
constructor(private _signupservice:SignupserviceService,private dialog:MatDialog,
  private activatedroute:ActivatedRoute,private router:Router){
// if(localStorage.getItem('Role') == 'Admin'){
    this._signupservice.GetAll().subscribe({
      next:(data)=>{
        console.log("projectlist",data);
        this.dataSource=new MatTableDataSource(data)
      },
      error:console.log,
    })

//     }
//   else{
//     this.Username=localStorage.getItem('Username')
//     _signupservice.showproject(this.Username).subscribe(data=>{
//     console.log("projectdata",data)
//     this.dataSource=new MatTableDataSource(data)
//   })
//   }
}
 
  displayedColumns = ['ProjectName','StartDate','StatusoftheProject','AssignedTo','Description','Edit','Delete'];

  applyFilter(filter:string) {
    
    this.dataSource.filter = filter.trim().toLowerCase();
  }
  delete(id:number){
    console.log(id)
    this._signupservice.delete(id).subscribe({
      next:(data) => {
        console.log("Deleted Successfully")
      },error(err) {
        console.log(err)
      },
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
               this._signupservice.update(data).subscribe(b=>{
                this._signupservice.GetAll().subscribe(c=>{
                  this.dataSource=new MatTableDataSource(c)
                });
               })
              
             }
           });
  }
  ngOnInit(){
}
  
openDialog(){
 this.dialog.open(AddprojectComponent)

} 
temp:any
taketodetail(but:any){
  // console.log("But : ",but)
  this.temp = but
  localStorage.setItem('ProjectData',JSON.stringify(this.temp))
  this.router.navigate(["/webpage-module/todolist"]);
}


 // Pie
 public pieChartOptions: ChartConfiguration['options'] = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'right',
    },
    datalabels: {
      formatter: (value, ctx) => {
        if (ctx.chart.data.labels) {
          return ctx.chart.data.labels[ctx.dataIndex];
        }
      },
    },
  }
};
public pieChartData: ChartData<'pie', number[], string | string[]> = {
  labels: [ 'Incomplete',  'Complete' , 'Not Initialized' ],
  datasets: [ {
    data: [ 300, 500, 100 ]
  } ]
};
public pieChartType: ChartType = 'pie';
public pieChartPlugins = [ DatalabelsPlugin ];

// events
public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
  console.log(event, active);
}

public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
  console.log(event, active);
}

// changeLabels(): void {
//   const words = [ 'hen', 'variable', 'embryo', 'instal', 'pleasant', 'physical', 'bomber', 'army', 'add', 'film',
//     'conductor', 'comfortable', 'flourish', 'establish', 'circumstance', 'chimney', 'crack', 'hall', 'energy',
//     'treat', 'window', 'shareholder', 'division', 'disk', 'temptation', 'chord', 'left', 'hospital', 'beef',
//     'patrol', 'satisfied', 'academy', 'acceptance', 'ivory', 'aquarium', 'building', 'store', 'replace', 'language',
//     'redeem', 'honest', 'intention', 'silk', 'opera', 'sleep', 'innocent', 'ignore', 'suite', 'applaud', 'funny' ];
//   const randomWord = () => words[Math.trunc(Math.random() * words.length)];
//   this.pieChartData.labels = new Array(3).map(_ => randomWord());

//   this.chart?.update();
// }

// addSlice(): void {
//   if (this.pieChartData.labels) {
//     this.pieChartData.labels.push([ 'Line 1', 'Line 2', 'Line 3' ]);
//   }

//   this.pieChartData.datasets[0].data.push(400);

//   this.chart?.update();
// }

// removeSlice(): void {
//   if (this.pieChartData.labels) {
//     this.pieChartData.labels.pop();
//   }

//   this.pieChartData.datasets[0].data.pop();

//   this.chart?.update();
// }

changeLegendPosition(): void {
  if (this.pieChartOptions?.plugins?.legend) {
    this.pieChartOptions.plugins.legend.position = this.pieChartOptions.plugins.legend.position === 'left' ? 'top' : 'left';
  }

  this.chart?.render();
}

toggleLegend(): void {
  if (this.pieChartOptions?.plugins?.legend) {
    this.pieChartOptions.plugins.legend.display = !this.pieChartOptions.plugins.legend.display;
  }

  this.chart?.render();
}

exportExcel()
  {
    let data=this.dataSource.filteredData
    const fileName = "test.xlsx";
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "test");
    XLSX.writeFile(wb, fileName);
    this.data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));
    console.log('Data: ', this.data);
}

// ReadExcel(event:any){
  
//     let file=event.target.files[0];
//     let fileReader=new FileReader();
//     fileReader.readAsBinaryString(file);
//     fileReader.onload=(e)=>{
//     var WorkBook=XLSX.read(fileReader.result,{type:'binary'});
//     var sheetNames = WorkBook.SheetNames;
//     this.ExcelData=XLSX.utils.sheet_to_json(WorkBook.Sheets[sheetNames[0]])
//     console.log('excel value',this.ExcelData)
//     this.user=[...this.user,  ...this.ExcelData ];
//     this.dataSource=new MatTableDataSource(this.user)
//     }
// }
}
