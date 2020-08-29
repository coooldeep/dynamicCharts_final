import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, SingleDataSet, monkeyPatchChartJsTooltip, monkeyPatchChartJsLegend, Color } from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  january:number;
  february:number;
  march:number;
  jancolor:any;
  febcolor:any;
  marcolor:any;
  chartType:any;
  pieShow: boolean = false;
  barShow: boolean = false;
  lineShow: boolean = false;
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales:{
      xAxes:[{
        display:true,
        scaleLabel:{
          labelString:'Color'
        }
      }
      ],
      yAxes:[{
        display:true,
        scaleLabel:{
          labelString:'Select Monthly Revenue'
        }
      }
      ]
    }
  };
  public barChartLabels: Label[] = ['January', 'February', 'March'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] ;
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['January', 'February', 'March'];
  public pieChartData: SingleDataSet ;
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors: Array < any >;
  public lineChartData: ChartDataSets[];
  public lineChartLabels: Label[] = ['January', 'February', 'March'];
  public lineChartOptions: (ChartOptions & { }) = {
    responsive: true,
    scales:{
      xAxes:[{
        display:true,
        scaleLabel:{
          labelString:'Color'
        }
      }
      ],
      yAxes:[{
        display:true,
        scaleLabel:{
          labelString:'Select Monthly Revenue'
        }
      }
      ]
    }
  };
  public lineChartColors: Color[] ;
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor() { 
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit() {
  }

  
  getData(){
    this.barChartData= [
      { data: [Number(this.january), Number(this.february), Number(this.march)],
         label: 'Market Qtr Report',
         backgroundColor: [this.jancolor, this.febcolor, this.marcolor] }
    ];
    this.lineChartData=[
      { data: [Number(this.january), Number(this.february), Number(this.march)],
         label: 'Market Qtr Report'}
    ];
  this.lineChartColors = [
    {
      borderColor: 'black',
    },
  ];
    this.pieChartData = [Number(this.january), Number(this.february), Number(this.march)];
    this.pieChartColors = [{
      backgroundColor: [this.jancolor, this.febcolor, this.marcolor],
      
   }];
  }

  showchart(){
    this.getData();
    if(this.chartType == "pie"){
      this.pieShow = true;
      this.barShow = false;
      this.lineShow = false;
    }
    else if(this.chartType == "bar"){
      this.pieShow = false;
      this.barShow = true;
      this.lineShow = false;
    }
    else if(this.chartType == "line"){
      this.pieShow = false;
      this.barShow = false;
      this.lineShow = true;
    }
  }

}
