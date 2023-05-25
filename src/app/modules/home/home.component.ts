import { Component, OnInit } from '@angular/core';
import { Chart, ChartItem } from 'chart.js/auto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './home2.component.scss']
})
export class HomeComponent implements OnInit {
  canvas : any;
  today = new Date(Date.now());
  salesData = [
    70, 69, 72, 73, 71, 66, 65, 69, 68, 62,
    66, 70, 74, 79, 73, 77, 72, 76, 81, 75,
    72, 75, 79, 75, 77, 80, 76, 75, 79, 81
  ];
  dates = Array.from({ length: 30 }, (x, i) => {
    const date = new Date(this.today)
    date.setDate(this.today.getDate() - i)
    if(i == 0)
      return "Aujourd'hui"
    return date.toLocaleDateString("fr")
  })
  numberOfDay! : number;

  constructor() {
   }

  ngOnInit(): void {
    var chartInput = document.querySelector('.chart input:checked') as HTMLInputElement;
    this.numberOfDay = parseInt(chartInput.value)
    this.canvas = document.getElementById("chart")
    
    var chart = new Chart(this.canvas, {
      type: 'line',
      data: {
        labels: this.dates.slice(0,this.numberOfDay),
        datasets: [{
          label: 'Nombre de ventes',
          data: this.salesData,
          borderColor: 'white',
          backgroundColor: (context) => {
            const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, '#2B92F1');
            gradient.addColorStop(1, '#031949');
            return gradient;
          },
          borderWidth: 2,
          fill: true,
          pointStyle: 'circle' ,
          pointBackgroundColor: 'white',
          pointRadius: 2   
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid : {
              color : 'rgba(43,146,241,0.1)',
            },
            ticks : {
              color: function(context){
                if(context.index === 0){
                  return '#ffffff'
                }
                else{
                  return '#808080'
                }
              },
            },
            display: true,
            title: {
              display: true,
              text: 'Jour',
              font : {
                size: 15,
                family: 'Poppins'
              },
              color: '#d0d0d0'
            }
          },
          y: {
            grid : {
              color : 'rgba(43,146,241,0.1)',
            },
            ticks : {
              color: '#808080'
            },
            suggestedMax: 90,
            suggestedMin: 50,
            display: true,
            title: {
              display: true,
              text: 'Nombre de ventes',
              font : {
                size: 15,
                family: 'Poppins'
              },
              color: '#d0d0d0'
            }
          },
        },
        plugins: {
          legend: {
            display : false,
          },
          tooltip: {
            displayColors: false,
            backgroundColor: '#000000e0',
            callbacks: {
                label: function(context) {
                    return 'Nombre de ventes : ' + context.parsed.y; // Personnalisation du contenu de la tooltip
                }
            },
            xAlign: 'center',
            yAlign: 'bottom'
        }
        }
      }
    });

    document.querySelectorAll('.chart input').forEach((element) => {
      element.addEventListener('change',(event : any) => {
        if(this.numberOfDay != event.target.value){
          this.numberOfDay = event.target.value
          chart.data.labels = this.dates.slice(0,this.numberOfDay)
          chart.update('none')
        }
      })
    })
  }
}
