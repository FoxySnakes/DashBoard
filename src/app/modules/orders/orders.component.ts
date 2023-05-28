import { Component, OnInit } from '@angular/core';
import { Order, OrderStatus } from 'src/app/models/order';
import { orders, users, products } from 'src/assets/data';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss', './orders2.component.scss' , '../../../assets/icon.scss']
})
export class OrdersComponent implements OnInit{
orderList = orders
usersList = users
productList = products

selectedFilter: string = 'id-increasing'; 
sortedOrderList: Order[] = [];
searchedWords: string = '';

constructor(){
}

ngOnInit(): void {
  this.sortedOrderList = orders
  
  document.getElementById('orders-search')?.addEventListener('keyup', (event : any) => {
    this.searchedWords = event.target.value
    this.orderList = orders.filter(order => (this.getUser(order.userId)?.name ?? '').toLowerCase().includes(this.searchedWords))
    this.sortedOrderList = this.orderList
    if(event.key == 'Backspace'){
      this.filterOrders();
    }
  })
  document.getElementsByName("filter").forEach(element =>{
    element.addEventListener('change', (event : any) => {
      if(event.target.checked){
        this.selectedFilter = event.target.id;
        this.filterOrders();
        }
    })})
}

getProductName(articleId : number){
  return this.productList.find(x => x.id == articleId)?.name
}

getUser(userId : number){
  return this.usersList.find(x => x.id == userId)
}

getState(state : OrderStatus){
  switch(state){
    case OrderStatus.Completed:
      return 'completed';
    case OrderStatus.Pending:
      return 'pending';
    case OrderStatus.Placed:
      return 'placed';
  }
}

filterOrders(){
        switch(this.selectedFilter){
          case 'id-increasing':
            this.sortedOrderList = this.orderList.sort((a, b) => a.id - b.id);
            break;
          case 'id-decreasing':
            this.sortedOrderList = this.orderList.sort((a, b) => b.id - a.id);
            break;
          case 'articles-increasing':
            this.sortedOrderList = this.orderList.sort((a, b) => b.articlesId.length - a.articlesId.length);
            break;
          case 'articles-decreasing':
            this.sortedOrderList = this.orderList.sort((a, b) => a.articlesId.length - b.articlesId.length);
            break;
          case 'user-increasing':
            this.sortedOrderList = this.orderList.sort((a, b) => {
              const userNameA = (this.getUser(a.userId)?.name ?? '').toLowerCase();
              const userNameB = (this.getUser(b.userId)?.name ?? '').toLowerCase();
              return userNameA.localeCompare(userNameB);
            });
            break;
          case 'user-decreasing':
            this.sortedOrderList = this.orderList.sort((a, b) => {
              const userNameA = (this.getUser(a.userId)?.name ?? '').toLowerCase();
              const userNameB = (this.getUser(b.userId)?.name ?? '').toLowerCase();
              return userNameB.localeCompare(userNameA);
            });
            break;
          case 'state-increasing':
            this.sortedOrderList = this.orderList.sort((a, b) => {
              const stateA = a.state;
              const stateB = b.state;
              switch(stateA){
                case OrderStatus.Placed:
                  switch(stateB){
                    case OrderStatus.Pending:
                      return -1;
                      break;
                    case OrderStatus.Completed:
                      return -1;
                      break;
                    default: 
                      return 0;
                      break;
                  }
                  break;
                case OrderStatus.Pending:
                  switch(stateB){
                    case OrderStatus.Placed:
                      return 1;
                      break;
                    case OrderStatus.Completed:
                      return -1;
                      break;
                    default: 
                      return 0;
                      break;
                  }
                  break;
                case OrderStatus.Completed:
                  switch(stateB){
                    case OrderStatus.Placed:
                      return 1;
                      break;
                    case OrderStatus.Pending:
                      return 1;
                      break;
                    default: 
                      return 0;
                      break;
                  }
                  break;
                default: 
                  return 0;
                  break;
              }
          });
          break;
          case 'state-decreasing':
            this.sortedOrderList = this.orderList.sort((a, b) => {
                const stateA = a.state;
                const stateB = b.state;
                switch(stateA){
                  case OrderStatus.Placed:
                    switch(stateB){
                      case OrderStatus.Pending:
                        return 1;
                        break;
                      case OrderStatus.Completed:
                        return 1;
                        break;
                      default: 
                        return 0;
                        break;
                    }
                  case OrderStatus.Pending:
                    switch(stateB){
                      case OrderStatus.Placed:
                        return -1;
                        break;
                      case OrderStatus.Completed:
                        return 1;
                        break;
                      default: 
                        return 0;
                        break;
                    }
                    break;
                  case OrderStatus.Completed:
                    switch(stateB){
                      case OrderStatus.Placed:
                        return -1;
                        break;
                      case OrderStatus.Pending:
                        return -1;
                        break;
                      default: 
                        return 0;
                        break;
                    }
                    break;
                  default: 
                    return 0;
                    break;
                }
            });
            break;
          case 'price-increasing':
            this.sortedOrderList = this.orderList.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
            break;
          case 'price-decreasing':
            this.sortedOrderList = this.orderList.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            break;
          default:
            this.sortedOrderList = this.orderList; 
            break;
        }
      
}

}
