import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  // { path:'', redirectTo:'category', pathMatch:'full'},
  // { path:'', loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule) },
  { path:'', component:LandingPageComponent },
  { path:'category/:catId', component:LandingPageComponent },
  { path:'product' , loadChildren:()=> import('./product/product.module').then(m => m.ProductModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
