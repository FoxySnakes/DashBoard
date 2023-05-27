import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-mobile',
  templateUrl: './navigation-mobile.component.html',
  styleUrls: ['./navigation-mobile.component.scss', '../../../../assets/icon.scss']
})
export class NavigationMobileComponent implements OnInit {

  test = ""

  constructor() { }

  ngOnInit(): void {
    this.adjustBottom();
    window.addEventListener('resize', this.adjustBottom);
  }

  adjustBottom() {
    const nav = document.getElementById('nav-bottom');
    let windowHeight = window.innerHeight;
    let documentHeight = document.documentElement.clientHeight;
    if (nav && windowHeight != documentHeight) {
      //nav.style.paddingBottom = `${windowHeight-documentHeight}px`;
    }
    this.test = `${windowHeight} / ${documentHeight} / ${windowHeight-documentHeight}`;
  }
}
