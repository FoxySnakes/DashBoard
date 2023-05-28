import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { products } from 'src/assets/data';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss', '../../../assets/icon.scss']
})
export class ProductsComponent implements OnInit, AfterViewInit {
  productList = products

  selectedFilter: string = 'id-increasing';
  sortedProductList: Product[] = [];
  searchedWords: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.sortedProductList = products

    document.getElementById('products-search')?.addEventListener('keyup', (event: any) => {
      this.searchedWords = event.target.value
      this.sortedProductList = products.filter(product => product.name.toLowerCase().includes(this.searchedWords.toLowerCase()))
      this.filterProducts();
    })

    document.getElementsByName("filter").forEach(element => {
      element.addEventListener('change', (event: any) => {
        if (event.target.checked) {
          this.selectedFilter = event.target.id;
          this.filterProducts();
        }
      })
    })
  }

  ngAfterViewInit(): void {

    document.querySelectorAll('.interactions > p:nth-child(2)').forEach(element => {
      element.addEventListener('click', (event: any) => {
        this.sortedProductList = this.sortedProductList.filter(x => x.id != event.target.id.split('-')[2])
      })
    })
  }

  filterProducts() {
    switch (this.selectedFilter) {
      case 'id-increasing':
        this.sortedProductList = this.sortedProductList.sort((a, b) => a.id - b.id);
        break;
      case 'id-decreasing':
        this.sortedProductList = this.sortedProductList.sort((a, b) => b.id - a.id);
        break;
      case 'name-increasing':
        this.sortedProductList = this.sortedProductList.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-decreasing':
        this.sortedProductList = this.sortedProductList.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }

  }
}
