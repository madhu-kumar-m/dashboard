import { Component, OnInit } from '@angular/core'; 

declare var google: any;


@Component({
  selector: 'app-category-dashboard',
  templateUrl: './category-dashboard.component.html',
  styleUrls: ['./category-dashboard.component.css']
})
export class CategoryDashboardComponent implements OnInit { 
  

  constructor() { }

  ngOnInit(): void {

    google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Products', 'Sharings per Product'],
          ['Dawn',     52],
          ['Cascade',  16],
          ['Scotch Bride',  15],
          ['Sun Triple', 7],
          ['Colorex',    5],
          ['Scotch Bride', 5]
        ]);

        var options = {
          title: 'Products and Shares',
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }


    }
     
  }