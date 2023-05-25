import { Component, NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './modules/main-layout/layout/layout.component';
import { HomeComponent } from './modules/home/home.component';
import { OrderComponent } from './modules/order/order.component';
import { ProductsComponent } from './modules/products/products.component';
import { UserComponent } from './modules/user/user.component';
import { SettingsComponent } from './modules/settings/settings.component';

const routes: Routes = [{
  path: '', component: LayoutComponent,
  children: [
    { path: '', component: HomeComponent},
    { path: 'home', redirectTo: ''},
    { path: 'orders', component: OrderComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'users', component: UserComponent },
    { path: 'settings', component: SettingsComponent }
  ]
}];
const routerOptions : ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64]
}
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
