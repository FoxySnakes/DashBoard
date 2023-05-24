import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { OrderComponent } from './modules/order/order.component';
import { SettingsComponent } from './modules/settings/settings.component';
import { ProductsComponent } from './modules/products/products.component';
import { CustomersComponent } from './modules/customers/customers.component';
import { LayoutComponent } from './modules/main-layout/layout/layout.component';
import { NavigationDekstopComponent } from './modules/main-layout/navigation-dekstop/navigation-dekstop.component';
import { NavigationMobileComponent } from './modules/main-layout/navigation-mobile/navigation-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderComponent,
    SettingsComponent,
    ProductsComponent,
    CustomersComponent,
    LayoutComponent,
    NavigationDekstopComponent,
    NavigationMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
