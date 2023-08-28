import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './products/products.component';
import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ReviewComponent } from './review/review.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserLoginComponent } from './user-login/user-login.component';
const routes:Routes=[{
  path:'Products',
  component:ProductsComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AboutComponent,
    ReviewComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
