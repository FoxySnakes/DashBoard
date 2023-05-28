import { Component, OnInit } from '@angular/core';
import { Chart} from 'chart.js/auto';
import { OrderStatus } from 'src/app/models/order';
import { orders, products, users } from 'src/assets/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', './home2.component.scss', '../../../assets/icon.scss']
})
export class HomeComponent implements OnInit {
  
  orderPlaced = orders.filter(order => order.state == OrderStatus.Placed)
  orderPending = orders.filter(order => order.state == OrderStatus.Pending)
  orderCompleted = orders.filter(order => order.state == OrderStatus.Completed)

  bestProducts = products.sort((a, b) => a.id - b.id).slice(0, 5);
  recentOrders = orders.sort((a, b) => a.dateCreated.getDate() - b.dateCreated.getDate()).slice(0, 5);

  canvas : any;
  today = new Date(Date.now());
  salesData = [
    6, 5, 7, 6, 8, 7, 6, 8, 7, 9,
    8, 6, 7, 6, 8, 7, 6, 8, 7, 9,
    8, 6, 7, 6, 8, 7, 6, 8, 7, 9
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
            suggestedMax: 15,
            suggestedMin: 0,
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

  getUser(userId : number){
    var user = users.find(x => x.id == userId)
    if(user){
      return user;
    }
    else{
      console.error(`No user exist with Id ${userId}`)
      return null;
    }
  }
}
