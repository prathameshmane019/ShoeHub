import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'products',
    component:ProductsComponent
  },
  {
    path:'review',
    component:ReviewComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
