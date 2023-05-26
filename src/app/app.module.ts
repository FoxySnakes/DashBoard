import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { ProductsComponent } from './modules/products/products.component';
import { CustomersComponent } from './modules/customers/customers.component';
import { LayoutComponent } from './modules/main-layout/layout/layout.component';
import { NavigationDekstopComponent } from './modules/main-layout/navigation-dekstop/navigation-dekstop.component';
import { NavigationMobileComponent } from './modules/main-layout/navigation-mobile/navigation-mobile.component';
import { SettingsComponent } from './modules/settings/settings.component';
import { OrdersComponent } from './modules/orders/orders.component';
import { UsersComponent } from './modules/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    CustomersComponent,
    LayoutComponent,
    NavigationDekstopComponent,
    NavigationMobileComponent,
    SettingsComponent,
    OrdersComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
