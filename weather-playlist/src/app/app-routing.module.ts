import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // { path:'', redirectTo:'/home', pathMatch:'full' },
  // { path: '**', redirectTo: '/home' }
  // { path:'home', component: }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
